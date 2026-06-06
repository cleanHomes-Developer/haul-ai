# DATA_ARCHITECTURE.md — Multi-Tenant Design

## TWO DATABASE STRATEGY

DB1 - PRIVATE (PostgreSQL with Row-Level Security):
  Enforces carrier isolation at DATABASE level (code bugs cannot bypass)
  All private tables: carriers, trucks, drivers, loads, negotiations,
                      invoices, oauth_tokens, broker_private_history
  RLS policy: carrier_id = current_setting('app.current_carrier_id')::UUID

DB2 - COMMUNITY (shared, no carrier identity):
  community_broker_profiles, community_lane_intelligence,
  community_shipper_profiles, community_negotiation_events

## MULTI-TENANT REQUEST FLOW
  1. Clerk JWT validated on every request
  2. Middleware: SET app.current_carrier_id = carrier.id
  3. RLS: database filters all queries automatically
  4. Service methods: always receive carrier_id explicitly (not from global)
  5. Community data: read by all, written only through anonymization pipeline

## ANONYMIZATION PIPELINE
  After every negotiation completes:
    - Extract behavioral signals only (percentages, not dollars)
    - SHA256 all carrier and address identifiers
    - Write to community_negotiation_events (no carrier_id)
    - Update community_broker_profiles rolling averages
    - Update community_lane_intelligence rate data

## SECURITY
  OAuth tokens: AES-256-GCM encrypted at rest
  DB connections: TLS 1.3 required
  R2 storage: carrier-prefixed paths /{carrier_id}/{load_id}/
  Redis: carrier-namespaced keys carrier_id:key_name
  All actions: logged with carrier_hash (not identity) for audit

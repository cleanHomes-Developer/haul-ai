# COMMUNITY_INTELLIGENCE.md — The Moat

## THE INSIGHT
500 carriers negotiating with Rakmark = know everything about Rakmark.
No individual carrier can build this. We aggregate it anonymized.
New carrier Day 1 gets intelligence from thousands of prior negotiations.

## PRIVACY MODEL
PRIVATE (never shared): carrier identity, exact rates, profit, driver data
COMMUNITY (anonymized): broker behavior %s, lane rates as %, shipper patterns
Minimum 5 carriers before surfacing any data. SHA256 on all identifiers.

## THE FLYWHEEL
10 carriers   → ±15% rate accuracy → slightly better than human
100 carriers  → ±10% → meaningfully better
1,000 carriers → ±3% → categorically better
10,000 carriers → ±1% → no human dispatcher competes

## COMMUNITY DB TABLES
  community_broker_profiles    (behavioral fingerprints)
  community_lane_intelligence  (rate patterns)
  community_shipper_profiles   (detention, requirements)
  community_negotiation_events (anonymized outcomes — NO carrier_id ever)

## ANONYMIZATION PIPELINE (in code)
  carrier_id:    NEVER stored in community tables
  dollar amounts: NEVER stored — only % vs market
  addresses:     SHA256 hashed
  exact times:   bucketed (morning/afternoon/evening, week number)

## THREE NEW CAPABILITIES
  1. Predictive Load Positioning: know where loads will be tomorrow
  2. Best Time Intelligence: when does each broker offer best rates?
  3. Shipper Direct Outreach: identify broker bypass opportunities

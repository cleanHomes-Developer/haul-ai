# REAL_EMAIL_FIXTURES.md
# Real broker email patterns from ILoad Logistics archive.
# Email parser must correctly handle all of these in Session 5.

## FIXTURE 1: Direct load offer (Jason Roy / Haul-One style)
FROM: jason@haul-one.com
SUBJECT: Detroit, MI Bessemer, AL
BODY:
  Plastics in pallets
  42,000 lbs
  FCFS Pickup today before 4:30 PM anytime
  Delivery Tmrw  7 AM by apt
  Can you do $1750?

EXPECTED PARSE:
  origin_city: Detroit | origin_state: MI
  dest_city: Bessemer | dest_state: AL
  offered_rate_total: 1750
  weight_lbs: 42000
  pickup_type: FCFS | pickup_deadline: today before 4:30 PM
  delivery_type: appointment | delivery_time: tomorrow 7 AM
  broker_name: Jason Roy | broker_company: Haul-One
  is_load_offer: true

## FIXTURE 2: Rate con with special instructions (GoTo Transport / Jenny)
FROM: jschoening@gototransport.com
SUBJECT: Rate Confirmation for order # 5194170
BODY:
  DJ, Attached is the load for today. Please sign and send back.
  This is a load of BEER, driver will be loaded to LEGAL GROSS LIMIT,
  please go in with full fuel. Requires 2 load locks or 2 straps.
  We use the Trucker Tool app.

EXPECTED PARSE:
  commodity: Beer
  special_instructions: LEGAL GROSS LIMIT, full fuel, 2 load locks or 2 straps
  tracking_app: Trucker Tools
  requires_driver_info: true
  order_number: 5194170
  is_load_offer: true

## FIXTURE 3: Check call request (ADL / Christian Garza style)
FROM: Christian.Garza@adldelivers.com
BODY: May I have ETA?

EXPECTED PARSE:
  email_type: check_call_request
  request_type: ETA update
  is_check_call: true
  requires_immediate_response: true

AI RESPONSE: Send full status: location, ETA, any issues.
RULE: For ADL, AI sends proactive ETA every 90 min to PREVENT this email.

## FIXTURE 4: WWEX booking confirmation (GlobalTranz)
FROM: Hane.Rusiana@wwex.com
CC: Offpeakteam@wwex.com, tldispatch@wwex.com
BODY:
  Thanks for the truck! Please use this email chain for updates.
  Remember to always reply all.
  PU 04/28 0800 DEL 04/29 0600
  FLOOR LOADED - Fool Grade Dry Vans - NO REEFERS.

EXPECTED PARSE:
  email_type: booking_confirmation
  reply_all_required: true
  pickup_date: 2026-04-28 | pickup_time: 08:00
  delivery_date: 2026-04-29 | delivery_time: 06:00
  equipment_requirement: Dry Van only NO REEFER
  floor_loaded: true

## FIXTURE 5: Short pay dispute
FROM: iloadlogistics1@gmail.com (carrier reporting)
BODY: We got informed of short pay for $470. Can you please clarify?

EXPECTED PARSE:
  email_type: short_pay_dispute
  amount_disputed: 470
  urgency: high
  action_required: HUMAN_ESCALATE_IMMEDIATELY

## FIXTURE 6: Lumper request
BODY: There will be a lumper fee. Are you able to send us a code for payment?

EXPECTED PARSE:
  email_type: lumper_request
  action_required: request_capstone_pay_code
  payment_method: Capstone Pay

## FIXTURE 7: Truck breakdown notification
BODY: Not the greatest news — driver has a DEF leak in Wichita KS.

EXPECTED PARSE:
  email_type: breakdown_notification
  issue: DEF leak
  location: Wichita KS
  action_required: AUTO_NOTIFY_BROKER_HOURLY

## FIXTURE 8: Highway platform rate con (WorldWide Logistics)
FROM: hello@highway.com
BODY: Marcus McConahay from WorldWide Logistics has issued a new rate confirmation.

EXPECTED PARSE:
  email_type: rate_confirmation_notification
  platform: Highway
  broker_name: Marcus McConahay
  broker_company: WorldWide Logistics
  action_required: HUMAN_VIEW_AND_SIGN

## FIXTURE 9: Detention notification
BODY: Need to put in a note for detention at this point.

EXPECTED PARSE:
  email_type: detention_notification
  action_required: notify_broker_of_detention
  for_globaltranz: check BOL handwritten times REQUIRED

## FIXTURE 10: Conway AR negotiation (Rakmark / Chris Reese)
FROM: chrisr@rakmarklogistics.com
BODY:
  PU: Conway,AR today FCFS 0800-1500
  DEL: Waco,TX 5th FCFS 0800-1500
  53ft dry van, 43500lbs
  Palletized recycled cardboard
  Rate?

EXPECTED PARSE:
  origin: Conway AR | dest: Waco TX
  equipment: 53ft dry van
  weight_lbs: 43500 | commodity: recycled cardboard
  pickup_type: FCFS | pickup_window: 0800-1500
  is_rate_request: true (broker asking for our quote)

AI RESPONSE: "We need $1,950 on this lane. DAT shows $1.85/mi average here."
             NOT: "Can you do $1,900?"

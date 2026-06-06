# NEGOTIATION_ENGINE.md — The AI Brain

## CORE PRINCIPLE
The AI never books a load where:
  Rate < (Fuel + Tolls + Driver + Overhead + Deadhead) + Target Margin
Floor calculated FRESH every load with live EIA diesel. Never hardcoded.

## REAL COST CALCULATION
  fuel = (miles / mpg) × live_diesel_price
  toll = routing_api.get_tolls(origin, dest)
  driver = miles × driver_cpm
  overhead = (fixed_monthly / monthly_miles) × miles
  deadhead = deadhead_miles × cost_per_mile
  floor = (total / miles) / (1 - target_margin)

## 25 SCENARIO RULES (first match wins — full list in CLAUDE.md)
See CLAUDE.md SECTION 2 SCENARIO RULES for complete list.

## REAL TRAINING EXAMPLES

CONWAY AR → WACO TX (Rakmark / Chris Reese):
  MISTAKE: ILoad asked "Can you do $1,900?" → settled $1,600
  AI FIX:  State "We need $1,950 on this lane. DAT shows $1.85/mi."
           Counter: "We can come to $1,800. That is our best today."
  RESULT:  $1,800 vs $1,600 = $200 improvement per load

DETROIT MI → BESSEMER AL (Haul-One / Jason Roy):
  CORRECT: ILoad said "Have to be closer to $2,350" — power language, worked
  AI ADDS: "EIA diesel on this corridor is $4.18. 730 miles. $1,750 won't cover costs."
  RULE:    "Have to be closer to $X" is the correct phrasing. Always.

## 11 INTELLIGENCE LAYERS (full detail in CLAUDE.md SECTION 2)
L01-L11 as specified in CLAUDE.md. All run in under 3 seconds.
Layer 10 insurance check: all 10 must pass before ANY booking.
Layer 11 relationship: NEW → FAMILIAR → PREFERRED stages.

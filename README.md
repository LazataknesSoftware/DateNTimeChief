# DateNTimeChief
Date and time manipulation tool

> **Node.js must be installed to use DateNTimeChief.**

# How to use

$T variable stands for _today_ or _now_. For example, if today is 29.02.2024, then the $T will have value 29.02.2024

* **amtt** <HOUR:MINUTE | $T> <MINUTES TO ADD> - add MINUTES TO ADD minutes to HOUR:MINUTE or $T (stands for now).
  
  Example 1: `amtt 10:20 30`
  
  Output 1: `10:50`

  Example 2: `amtt $T 10` (where $T = 10:10, for example)

  Output 2 `10:20`
* **adtd** <DAY.MONTH.YEAR | $T> <DAYS> - add DAYS to DAY.MONTH.YEAR or $T (stands for now).

  Example 1: `adtd 01.01.2018 2`

  Output 1: `3.1.2018`

  Example 2: `adtd $T 10` (where $T = 10.06.2017, for example)

  Output 2: `20.6.2017`
* **bt** <TIME1 | $T> <TIME2 | $T> - calculate difference between <TIME1> or $T (stands for now) and <TIME2> or $T (stands for now).

  Example 1: `bt 12:12 14:14`

  Output 1: `2 hours and 2 minutes`
  
  _Note:_ bt cannot work with $T (stands for now). I am working to it was able to work with $T (stands for now).
* **bd** <DATE1 | $T> <DATE2 | $T> - calculate difference between <DATE1> or $T (stands for today) and <DATE2> or $T (stands for today).

  Example 1: `bd 01.02.2012 03.01.2018`

  Output 1: `5 years, 11 months and 1 days`

  _Note:_ bd cannot work with $T (stands for now). I am working to it was able to work with $T (stands for now).

# DateNTimeChief
Date and time manipulation tool

> **Node.js must be installed to use DateNTimeChief.**

# How to use

$T variable stands for _today_ or _now_. For example, if today is 29.02.2024, then the $T will have value 29.02.2024

* **mt** <HOUR:MINUTE | $T> \<MINUTES TO ADD\> - add MINUTES TO ADD minutes to HOUR:MINUTE or $T (stands for now).
  
  Example 1: `mt 10:20 30`
  
  Output 1: `10:50`

  Example 2: `mt $T 10` (where $T = 10:10, for example)

  Output 2 `10:20`
* **dd** <DAY.MONTH.YEAR | $T> \<DAYS\> - add DAYS to DAY.MONTH.YEAR or $T (stands for now).

  Example 1: `dd 01.01.2018 2`

  Output 1: `3.1.2018`

  Example 2: `dd $T 10` (where $T = 10.06.2017, for example)

  Output 2: `20.6.2017`
* **bt** <TIME1 | $T> <TIME2 | $T> - calculate difference between <TIME1> or $T (stands for now) and <TIME2> or $T (stands for now).

  Example 1: `bt 12:12 14:14`

  Output 1: `2 hours and 2 minutes`
  
  Example 2: `bt $T 23:59` (where is $T = 21:43, for example)

  Output 2: `2 hours and 16 minutes`
* **bd** <DATE1 | $T> <DATE2 | $T> - calculate difference between <DATE1> or $T (stands for today) and <DATE2> or $T (stands for today).

  Example 1: `bd 01.02.2012 03.01.2018`

  Output 1: `5 years, 11 months and 1 days`

  Example 2: `bd $T 01.06.2024` (where is $T = 29.02.2024, for example)

  Output 2: `0 years, 3 months and 3 days`

/* MapleMath engine - pure functions, no DOM. Honest maple sugaring math.
   Constants stated in the UI: Rule of 86 - gallons of sap per gallon of syrup
   is 86 / sap sugar percent; one tap per 10-17 in tree, two to 24 in, three
   above; about 10 gal of sap per tap per season; syrup at 66.9 Brix. */
var MapleMath = (function () {
  function sapRatio(sugarPct) {
    return 86 / sugarPct;
  }
  function ratioVerdict(sugarPct) {
    if (sugarPct >= 3.5) return 'Exceptional sap - over 3.5% sugar is sugarbush royalty; guard those trees.';
    if (sugarPct >= 2.5) return 'Good sap - 2.5 to 3.5% keeps the boil short and the fuel bill honest.';
    if (sugarPct >= 1.5) return 'Average sap - the classic 40:1 neighborhood; most of the work, most of the fun.';
    return 'Lean sap - under 1.5% means a long boil; check for red maples or late-season runs.';
  }
  function tapsForTree(diameterIn) {
    if (diameterIn < 10) return 0;
    if (diameterIn < 18) return 1;
    if (diameterIn < 25) return 2;
    return 3;
  }
  function tapVerdict(diameterIn) {
    if (diameterIn < 10) return 'Under 10 in - let it grow; tapping a sapling steals its decade.';
    if (diameterIn < 18) return 'One tap - the tree barely notices.';
    if (diameterIn < 25) return 'Two taps - a mature tree can spare it.';
    return 'Three taps max - more holes than that and you are drilling a fence post, not a maple.';
  }
  function seasonSap(taps, galPerTap) {
    return taps * galPerTap;
  }
  function syrupGal(sapGal, sugarPct) {
    return sapGal / sapRatio(sugarPct);
  }
  function boilHours(sapGal, evapGalHr) {
    return sapGal / evapGalHr;
  }
  function boilVerdict(hours) {
    if (hours <= 8) return 'A few evenings at the pan - the pleasant scale of the hobby.';
    if (hours <= 20) return 'A season of weekends - line up the podcast queue and the split wood.';
    return 'Over 20 hours of boil - that is a part-time job; the evaporator upgrade pays for itself this year.';
  }
  function bottleCount(syrupGal, bottleMl) {
    return syrupGal * 3785.41 / bottleMl;
  }
  function valuePerGal(retailGal) {
    return retailGal;
  }
  function worthVerdict(syrupGal, retailGal, fuelCost, miscCost) {
    var v = syrupGal * retailGal - fuelCost - miscCost;
    if (syrupGal <= 0) return 'No syrup yet - check the taps when the nights freeze and the days thaw.';
    if (v > 200) return 'Ahead by $' + Math.round(v) + ' against retail - sugaring season pays, if the hours are free.';
    if (v > 0) return 'Roughly break-even in dollars - the profit is breakfast and the smell of the steam.';
    return 'Behind on dollars - nobody sugars for the money; check the fuel math anyway.';
  }
  return {
    sapRatio: sapRatio, ratioVerdict: ratioVerdict, tapsForTree: tapsForTree, tapVerdict: tapVerdict,
    seasonSap: seasonSap, syrupGal: syrupGal, boilHours: boilHours, boilVerdict: boilVerdict,
    bottleCount: bottleCount, valuePerGal: valuePerGal, worthVerdict: worthVerdict
  };
})();
if (typeof module !== 'undefined') module.exports = MapleMath;

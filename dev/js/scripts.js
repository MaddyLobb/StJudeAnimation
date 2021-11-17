import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);


let mainTL = gsap.timeline();


function square(){

    const tl = gsap.timeline();

    tl.from("#square",{duration: 1, alpha:0});

    return tl;
}

function logoletters(){

    const tl = gsap.timeline();

    tl.from("#s",{duration: .75, alpha:0})
      .from("#t",{duration: .75, alpha:0},"-=30%")
      .from("#j",{duration: .75, alpha:0},"-=30%")
      .from("#c",{duration: .75, alpha:0},"-=30%")
      .from("#h",{duration: .75, alpha:0},"-=30%");

    return tl;
}

function sllmoving(){

    const tl = gsap.timeline();

    tl.to("#square",{duration: 2, x: -188},"same")
      .to("#s",{duration: 2, x: -188},"same")
      .to("#t",{duration: 2, x: -188},"same")
      .to("#j",{duration: 2, x: -188},"same")
      .to("#c",{duration: 2, x: -188},"same")
      .to("#h",{duration: 2, x: -188},"same");

    return tl;
}

function stjude(){

    const tl = gsap.timeline();

    tl.from("#stjude",{duration: 2, x:360});

    return tl;
}




mainTL.add(square())
      .add(logoletters())
      .add(sllmoving(),"same")
      .add(stjude(),"same");
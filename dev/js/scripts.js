import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";


gsap.registerPlugin(MotionPathPlugin,ScrambleTextPlugin);


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

    tl.to("#square",{duration: 2, x: -188},"same1")
      .to("#s",{duration: 2, x: -188},"same1")
      .to("#t",{duration: 2, x: -188},"same1")
      .to("#j",{duration: 2, x: -188},"same1")
      .to("#c",{duration: 2, x: -188},"same1")
      .to("#h",{duration: 2, x: -188},"same1");

    return tl;
}

function stjude(){

    const tl = gsap.timeline();

    tl.from("#stjude",{duration: 2, x:360},"same2")
      .to("#tagline", {duration: 2, scrambleText:{text:"Finding cures. Saving children.", chars:"sjch" ,revealDelay:.5, tweenLength:false, speed:0.4}},"same2");

    return tl;
}




mainTL.add(square())
      .add(logoletters())
      .add(sllmoving(),"same")
      .add(stjude(),"same");
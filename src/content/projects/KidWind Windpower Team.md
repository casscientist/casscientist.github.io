---
title: KidWind Windpower Team
summary: Winning 1st place nationally and constructing a hand-built alternator for a wind turbine
role: Electrical Lead
dateText: 2016 - 2018
tags: []
url: "https://www.energy.gov/articles/kidwind-challenge-wraps-successful-season"
order: 3
coverImage: "/images/kidwind/kidwind_cover.webp"
featured: false
draft: false
---
Driven by an early passion for renewable energy, I spent three years participating in the KidWind Challenge with my middle school team, *Phish Phoil*. In 2017, our team won 1st place nationally in the middle school division through a combination of custom blade design, efficient power generation, and knowledge of wind-energy principles. 

Following the win, I wrote a guest article on the experience for [Apex Clean Energy](https://www.apexcleanenergy.com/insight/working-toward-clean-energy-future/) and gave a talk about the experience at their company-wide meeting.
<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/kidwind/kidwind_cover.webp" 
      alt="KidWind National Championship Turbine Setup" 
      class="max-h-[600px] w-auto rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Our winning KidWind turbine design featured a wooden tripod chassis and custom-twisted airfoil blades.</figcaption>
</figure>

### My Contribution
For our initial power configuration in 2017, I designed and fabricated a gear train. The gears were designed using free online software, laser-cut from acrylic, and coupled to an off-the-shelf DC generator. I chose and built a pyramidal wooden tripod base to provide a stable structure while keeping the design lightweight. After winning regionals, our team moved from the geared DC generator to a custom-built alternator.

I worked with the other three members to make twisted airfoil blades inspired by the design of airplane wings. We constructed laser-cut wooden ribs wrapped in stretched cellophane to minimize weight while maintaining their airfoil shape.

### Developing a Bigger Alternator 
The following year, I took the lead on developing a larger 3-phase axial-flux alternator (Hugh Piggott-style) from scratch, building on the alternator our team had developed the previous year:

* **Rotor & Magnetic Assembly:** I sourced high-strength rectangular neodymium magnets and epoxied them in a radial arrangement onto a steel backplate that I cut and ground into a circular shape using an angle grinder to act as the magnetic flux return path.
* **Coils and Coil Counter:** To make the coil-winding process more consistent, I built an automated coil-counting fixture using an Arduino and an ultrasonic distance sensor to count 400 winding rotations for each coil.
* **Stator & Electronics:** I arranged the wound coils in a 3-phase pattern and cast them in epoxy resin to form a rigid stator. The coils were then connected to a bridge rectifier to produce a DC output.

### Engineering Challenges & Key Takeaways
During on-site testing at the [2018 national competition](https://www.energy.gov/articles/kidwind-challenge-wraps-successful-season), the custom alternator successfully generated power, but also revealed mechanical and electromagnetic limitations. At higher speeds, the central hub began to wobble, causing physical interference between the rotor and stator at the small air gap required for efficient power generation. At smaller air gaps, we also observed increased eddy-current braking, which slowed the blade rotation. This forced us to use a larger air gap that substantially reduced the alternator's output.

This early project introduced me to the joy of the engineering design process and was one of the key experiences that inspired me to pursue a career in mechanical engineering.
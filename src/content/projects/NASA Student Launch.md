---
title: "High-Power Rocketry: NASA Student Launch Initiative"
summary: Designing, testing, and flying a high-power research rocket
role: Launch Vehicle Lead
dateText: 2017-2018, 2021-2022
tags: []
coverImage: "/images/student_launch/student_launch_cover.webp"
order: 1
featured: false
draft: false
---
For the 2017-2018 and 2021-2022 seasons, I participated in the NASA Student Launch Initiative (SLI), a rigorous, year-long competition where teams design, build, test, and fly high-power rockets carrying scientific or engineering payloads to specified altitude targets. 

As the Launch Vehicle Lead, I took our rocket from flight simulation and fabrication through avionics integration, ground testing, and launch operations. I also contributed to payload development and technical documentation across my two seasons on the team. We received [multiple awards](https://www.troop17bsa.org/2017-2018-project/), including the Altitude Award, Best Looking Rocket Award, and Educational Engagement Award.

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/student_launch/student_launch_inflight.webp" 
      alt="High-power rocket mid-ascent during flight test" 
      class="w-full max-w-4xl h-auto rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Rocket mid-ascent during a field flight test</figcaption>
</figure>

### Vehicle Overview

Our airframe was built around the Mad Cow Formula 98 G10 fiberglass chassis, featuring a three-section body, an Ogive nose cone, three trapezoidal fins, and a threaded Aeropack motor retainer. It was chosen to avoid the hazards of cutting fiberglass ourselves and to use a proven airframe to save development time.

* **Dual-Deploy Recovery:** Configured with a 12" Sky Angle Classic drogue chute firing 1 second post-apogee, followed by a 60" Sky Angle Classic main chute deploying at 600 ft AGL.
* **Redundant Avionics:** Recovery separation was managed by dual barometric altimeters (Missile Works RRC3 and MARSA33LHD) firing primary and secondary black powder ejection charges, with secondary charges sized 50% larger for additional deployment margin.
* **Propulsion:** I selected the motor and ballast through OpenRocket simulations and assembled the motor casing, and a Tripoli L3-certified mentor supervised motor preparation and loading.

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/student_launch/student_launch_diagram.webp" 
      alt="Exploded architectural diagram of high-power rocket components" 
      class="w-auto max-w-4xl max-h-[600px] rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Internal component overview diagram</figcaption>
</figure>

### Flight Simulation

To hit NASA’s strict performance criteria and our target apogee of 5,280 ft (1 mile), I ran extensive trajectory simulations in OpenRocket:

* **Motor and Ballast Selection:** Analyzed thrust-to-weight and predicted apogee to select the optimal motor (Aerotech K805) and determine exact ballast mass to reach 5280 feet.
* **NASA Constraint Verification:** Modeled rail-exit velocity, static stability margin, descent velocity, and kinetic energy upon touchdown to meet NASA requirements.
* **Weather Modeling:** Used Huntsville (the final competition location) weather profiles to inform all simulations, and estimated the landing radius based on wind to balance descent time and parachute stresses against ground drift distance.

Our flight altitude was within 4% of the declared target, closely matching the trajectory prediction and validating our motor and ballast selection.

  <figure class="text-center">
    <div class="flex justify-center">
      <img 
        src="/images/student_launch/student_launch_altitude_simulation.webp" 
        alt="OpenRocket altitude vs time simulation curve" 
        class="w-full h-auto rounded-lg border border-line object-cover !m-0" 
      />
    </div>
    <figcaption class="mt-2 text-sm text-ink-soft">OpenRocket altitude and velocity simulation</figcaption>
  </figure>

  <figure class="text-center">
    <div class="flex justify-center">
      <img 
        src="/images/student_launch/student_launch_stability_simulation.webp" 
        alt="OpenRocket center of gravity and center of pressure static margin analysis" 
        class="w-full h-auto rounded-lg border border-line object-cover !m-0" 
      />
    </div>
    <figcaption class="mt-2 text-sm text-ink-soft">OpenRocket static stability margin simulation in calibers</figcaption>
  </figure>

### Hands-On Assembly, Avionics & Ground Testing

Beyond simulations, I was heavily involved in the physical construction, wiring, and flight readiness workflows:

* **Avionics Bay:** Designed and 3D printed custom internal sleds to house altimeters, power switches, and GPS tracking hardware and set deployment profiles.
* **Structural Assembly:** Built most of the airframe, including epoxying fins, bulkheads, and motor housing, installing u-bolts and launch buttons, and packing the parachutes.
* **Ground Ejection Testing:** Led the black powder sizing tests on the ground, incrementally sizing charges in controlled separation tests to ensure complete shear-pin breakage without over-pressurizing the couplers. 
* **Technical Documentation:** Authored most sections of NASA review milestones (PDR, CDR, and FRR), including hazard assessments, leading and alternative component justifications, environmental risk analysis, and pre-flight checklists.

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/student_launch/student_launch_on_table.webp" 
      alt="Pre-flight vehicle assembly and checkouts on workbench" 
      class="w-full max-w-4xl max-h-[600px] rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Bench prep and integration before testing a subscale version of our rocket</figcaption>
</figure>

<figure class="my-8 text-center">
  <video 
    src="/documents/student_launch_separation_test.mp4" 
    autoplay 
    loop 
    muted 
    playsinline 
    class="w-full max-w-4xl h-auto rounded-lg border border-line my-8">
  </video>
  <figcaption class="mt-2 text-sm text-ink-soft">Ground test verifying drogue bay ejection charge sizing</figcaption>
</figure>


### Flight Operations & Recovery

Launch days were long, exciting, and high-stakes. Thanks to rigorous testing and flight checklists, our team completed the flights without losing an airframe, and both main and drogue parachutes deployed nominally and were recovered.

<figure class="my-8 text-center">
  <video 
    src="/documents/student_launch_flight.mp4" 
    autoplay 
    loop 
    muted 
    playsinline 
    class="w-auto mx-auto max-h-[630px] rounded-lg border border-line my-8">
  </video>
  <figcaption class="mt-2 text-sm text-ink-soft">Liftoff!</figcaption>
</figure>

Once the range gave us the all-clear, we used telemetry from our onboard GPS tracker to find the landing site, recover the vehicle, and harvest trajectory logs and payload data for post-flight analysis.

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/student_launch/student_launch_avionics_recovery.webp" 
      alt="Team recovering avionics bay in the field" 
      class="w-full max-w-4xl max-h-[600px] rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Recovering the avionics bay after flight.</figcaption>
</figure>

### Science Payloads & Experimental Design

Over my two years, we designed and flew two distinct scientific experiments:

#### 1. Aerogel Thermal Insulation Study
We evaluated the thermal insulating performance of aerogel by attaching it around the motor casing during flight. An array of three TMP36 temperature sensors logged temperature over time to characterize heat transfer through the aerogel during motor burn.

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/student_launch/student_launch_aerogel_experiment.webp" 
      alt="Temperature sensors wired and epoxied to the motor casing" 
      class="w-full max-w-4xl max-h-[600px] rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Temperature sensors wired and epoxied to the motor casing</figcaption>
</figure>

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/student_launch/student_launch_experiment_data.webp" 
      alt="Thermal data plot showing temperature over time for aerogel experiment" 
      class="w-full max-w-4xl h-auto rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">In-flight temperature logging the aerogel performance on a chilly day.</figcaption>
</figure>

The resulting data showed a maximum temperature that was far below the 220°C K-class motor casings are permitted to reach. Due to concerns about melting the wire insulation and adhesive, we did not have a control to compare our results to, so the experiment should be repeated alongside heat transfer modeling to gain more useful insights into aerogel's performance. 

#### 2. Vibration Characterization
My second year, the payload team mounted an accelerometer in the nose cone to characterize airframe vibrations during powered flight. This data could help inform vibration requirements for future payloads. My contribution was designing a 3D printed enclosure for the PCB to attach inside the nosecone. 

* **Hardware Stack:** Built around a Raspberry Pi Pico, ADXL345 3-axis accelerometer, MP1584 buck converter, micro-SD logging module, and a 2000mAh LiPo battery. These components were inexpensive and readily available while having sufficient battery and bandwidth capacity to capture our intended flight data.
* **High-Rate Data Logging:** The ADXL345 supports output data rates up to 3.2 kHz, requiring high-speed data transfer and buffering to capture the sensor's available bandwidth. We optimized buffer handling and loop execution to increase our logging rate.
* **Power & Trigger Logic:** Implemented hardware interrupts so the board remained in a sleep state on the pad and then automatically triggered high-speed logging upon launch detection and idling at apogee to conserve battery and simplify post-flight data analysis.

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/student_launch/student_launch_payload_schematic.webp" 
      alt="Electrical schematic for the Raspberry Pi Pico vibration logger" 
      class="w-full max-w-4xl h-auto rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Electrical schematic for the high-frequency vibration logging payload.</figcaption>
</figure>

### Key Takeaways

Participating in NASA Student Launch was a foundational experience. It taught me how to operate within a rigorous, formal engineering framework, manage a long list of requirements and trade-offs, and solve problems out in the field. I'm also proud to have participated with the team in educational outreach to young kids, sharing our passion and experience to over four hundred children my first year. Above all, it sparked an enduring passion for working on aerospace that continues to drive me today.
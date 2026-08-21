---
title: MagChess
summary: A handmade electronic chessboard that can track, analyze, and broadcast live moves
role: Project Lead
dateText: "Spring 2022"
tags: []
url: "https://github.com/casscientist/MagChess/tree/main"
order: 2
coverImage: "/images/magchess/magchess_cover.webp"
featured: false
draft: false
---
As an avid chess player, I’ve always preferred playing face-to-face—feeling the physical weight of the pieces, bantering with the opponent, and discussing our analysis after the game. However, over-the-board play lacks the automatic move tracking, broadcasting, and instant engine analysis that make online chess so powerful. 

Such electronic boards do already exist. However, they are expensive, and I wanted to create my own. I also wanted it to look identical to a normal chess board so it could be used without the electronics if necessary.

The goal of **MagChess** was to bridge this gap: building a handcrafted wooden chessboard with embedded sensing to track physical moves in real time, interface with a custom desktop app, and export Portable Game Notation (PGN) files directly to online engines like Lichess. 

As project lead, I worked across the full system, including 3D modeling and printing, woodworking, PCB design and soldering, embedded programming, and desktop software development.

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/magchess/magchess_final.webp" 
      alt="Finished MagChess Board" 
      class="w-full max-w-4xl h-auto rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">The completed MagChess board housing embedded electronics within a custom wooden enclosure.</figcaption>
</figure>

### System Architecture
To build a fully integrated hardware system, I split the project into four distinct areas:
1. **The Pieces:** 3D designing, printing, and post-processing custom chess pieces embedded with permanent magnets.
2. **The Board:** Hand-crafting a hardwood playing surface and sliding box enclosure to house the internal electronics.
3. **The Circuitry:** Designing a routed copper circuit board with a Hall-effect sensor matrix, multiplexed inputs, and state-tracking firmware.
4. **The Program:** Writing a Python desktop application for real-time game visualization, move validation, and automatic PGN export.

### Sensing Mechanism
Before prototyping, I evaluated several methods for detecting pieces:
* **Computer Vision:** Over-the-board cameras introduce environmental variables (shadows, lighting, line-of-sight) and require intrusive overhead mounting.
* **NFC / Active RFID:** Individual piece identification would enable more robust state tracking, but would require substantially more sensing hardware and system complexity than the Hall-effect approach.
* **Magnetic Hall-Effect Matrix:** Inspired by a project in [Nuts & Volts](https://www.nutsvolts.com/magazine/article/January2017_Electronic-Chessboard-LEDs-Hall-Effect-Sensors), I designed the sensing system around an array of Hall-effect sensors paired with magnets in the piece bases. This minimized the sensing hardware and allowed the firmware to infer moves from changes in board occupancy.

### 3D Printed Pieces
I collaborated with a classmate to 3D print a complete, custom-scaled chess set designed around the board dimensions. I modeled one of the pieces and provided feedback on the remaining designs as we refined the set. We shared the printing, sanding, and painting work equally. Recesses were added in the base of each piece to seat circular 1/2" × 1/8" neodymium magnets, which I secured in place with plaster and weights before adding felt pads to the bottom. After printing, the pieces were sanded and spray-painted cream and dark brown to emulate traditional wood finishes.

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center gap-4">
    <img 
      src="/images/magchess/magchess_pieces.webp" 
      alt="3D Printed Pieces" 
      class="w-1/3 h-auto rounded-lg border border-line object-cover !m-0" 
    />
    <img 
      src="/images/magchess/magchess_painting_pieces.webp" 
      alt="Spray Painting Pieces" 
      class="w-2/3 h-auto rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Left: The pieces right out of the printer. Right: Spray-painting the pieces.</figcaption>
</figure>

### The Hardwood Box and Enclosure
For the board, I wanted a classic look that completely masked the electronics and could be used like a regular board. I built the board alongside my grandfather, who provided the woodworking tools and taught me how to use them. Starting from my initial 12 x 12" playing-surface dimensions with 1.5" squares, we worked out the dimensions of the smaller sections around the electronics and enclosure. We then ripped and glued alternating strips of maple and walnut to form the playing surface.

We then constructed a 16 x 16" hardwood box with routed slots to house the main circuit board and Teensy microcontroller, allowing the top board to slide out for access. My grandfather showed me how to route and assemble the enclosure and helped with the woodworking process. Finally, I took the board home for fine sanding and oiling. 

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/magchess/magchess_making_board.webp" 
      alt="Oiling the Handcrafted Chessboard" 
      class="w-auto max-h-[600px] rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Applying oil finish to the wooden box</figcaption>
</figure>

### Electronics & PCB Fabrication

The sensing engine consists of an array of Hall-effect sensors routed through multiplexers to a Teensy 3.1 microcontroller. 

Because ordering a full-sized custom PCB from a commercial manufacturer was too expensive at the time and the circuitry was fairly simple, I planned to mill the circuit on a copper-clad laminate sheet. 

I developed the initial circuit schematic in KiCad based on the Hall-effect chessboard design from Nuts & Volts, adapting the circuit to remove the LED matrix and implement only the sensing functionality I needed. Because I didn't own a CNC router, I worked with an electrical engineer to adapt the schematic for in-house manufacturing. 

To overcome CNC bed-size constraints, the EE modified my schematic into four separate PCB sections and used a CNC router to mill the copper-clad laminate. The four sections were then assembled into a single circuit, and I hand-soldered all 64 Hall-effect sensors, multiplexers, and the microcontroller onto the assembled board.

<figure class="my-8 text-center">
<div class="my-8 flex justify-center">
  <img 
    src="/images/magchess/magchess_pcb_schematic.webp" 
    alt="Final Circuit Schematic in KiCad" 
    class="max-h-[600px] w-auto rounded-lg border border-line object-cover !m-0" />
</div>
<figcaption class="mt-2 text-sm text-ink-soft">Final Circuit Schematic in KiCad</figcaption>
</figure>

<figure class="my-8 text-center">
<div class="my-8 flex justify-center">
  <img 
    src="/images/magchess/magchess_pcb_design.webp" 
    alt="Initial PCB Design in KiCad" 
    class="max-h-[600px] w-auto rounded-lg border border-line object-cover !m-0" />
</div>
 <figcaption class="mt-2 text-sm text-ink-soft">Initial PCB Design in KiCad</figcaption>
</figure>

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center gap-4">
    <img 
      src="/images/magchess/magchess_milling_board.webp" 
      alt="Milling Copper PCB" 
      class="w-1/2 h-auto rounded-lg border border-line object-cover !m-0" 
    />
    <img 
      src="/images/magchess/magchess_circuitboard_complete.webp" 
      alt="Milled Circuit Board in Enclosure" 
      class="w-1/2 h-auto rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">Left: CNC milling the copper-clad board. Right: The hand-soldered sensor array seated in the enclosure.</figcaption>
</figure>

### The Firmware 

#### State Detection & Move Validation
I wrote the Teensy firmware to use row-column multiplexing to read all the board positions, building an 8x8 binary occupancy matrix (1 = occupied, 0 = vacant). By comparing each new occupancy matrix with the previous one, the software identifies which squares lost a piece and which gained one. The software assumes the board was set up correctly, so the pieces that changed positions are known and can be validated against standard chess move rules. If an illegal movement occurs (like a knight moving in a straight line), the firmware flags an error message over serial. 

#### PySimpleGUI Desktop Interface
I built a desktop companion app in Python using PySimpleGUI and pySerial to receive the Serial data stream. The app features:
* Real-time virtual board rendering and customizable graphical themes.
* Configurable game clocks and manual pawn promotion selectors.
* Instant move logging directly to standard Portable Game Notation (.pgn) files.
* Integration with Lichess using pyperclip and webbrowser, automatically opening the saved PGN in a browser for post-game Stockfish engine analysis.

The software repository is hosted on [GitHub](https://github.com/casscientist/MagChess/tree/main).

<figure class="my-8 text-center">
  <div class="my-8 flex justify-center">
    <img 
      src="/images/magchess/magchess_gui.webp" 
      alt="MagChess Desktop GUI Interface" 
      class="w-full max-w-4xl h-auto rounded-lg border border-line object-cover !m-0" 
    />
  </div>
  <figcaption class="mt-2 text-sm text-ink-soft">The Python desktop interface displaying live move rendering, game timers, and evaluation tools, pictured in a test configuration.</figcaption>
</figure>

### Failure Analysis

While most aspects of the prototype worked in isolation, the main circuit board ultimately did not detect the board state accurately. Several flaws prevented full reliability:

1. **Piece Weight and Magnetic Attraction:** The lightweight, hollow 3D prints lacked sufficient mass. When adjacent pieces were close together, the strong internal magnets caused them to snap together magnetically on the board.
2. **Soldering Challenges:** CNC-milled copper traces lack solder mask protection. Manual soldering across 64 sensors introduced shorts and cold joints that were difficult to isolate across four stitched boards.
3. **Sensor Threshold Sensitivity & Placement Alignment:** Manual hand-placement of Hall-effect sensors created variances in height relative to the wood top, causing inconsistent magnetic triggering across adjacent squares.
4. **State Machine Limitations without Unique ID:** Binary occupancy sensing meant that if two pieces were knocked over simultaneously or misplaced, the software lost track of changes and also relied on the user to reset illegal moves.
5. **Water Damage:** Unprotected storage in a humid outdoor shed caused the hardwood top to warp and crack.

### Future Improvements and MagChess 2.0
If I improve MagChess, I plan to implement the following hardware changes:
* **Inductive Coil / RFID Sensing:** Transition from simple magnets to RFID or LC resonance sensing to uniquely identify piece types on every square and prevent magnetic clumping.
* **Heavy Wooden Pieces:** CNC-machine or buy and modify high-quality wooden pieces with internal weights for better appearance and feel.
* **Modular PCB Architecture:** Replace the single large board with modular, professionally printed circuit boards to ensure tight sensor tolerances and easy replacement.
* **Remake the Playing Surface:** Cut and glue the wooden top again, waterproof it, and store it indoors this time.
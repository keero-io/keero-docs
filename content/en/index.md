---
seo:
  title: Keero Docs
  description: Public documentation for the Keero modular AI hardware project, including architecture, hardware overview, module direction, and firmware status.
---

::u-page-hero
#title
Keero Bot Documentation

#description
Keero is an early modular AI hardware project built around an ESP32-S3 mainboard. The goal is to grow it from a compact prototype platform into a more complete device with audio, sensing, display, haptics, camera support, and add-on modules such as dock and tracks.

This site is written as public project documentation, not as a manufacturing release. It explains what the platform is, how the main pieces fit together, what is already real, and what is still in progress.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /en/overview/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Start here
  :::

  :::u-button
  ---
  color: neutral
  icon: i-lucide-box-select
  size: xl
  to: /en/hardware/interactive-bom
  variant: outline
  ---
  Open board viewer
  :::

  :::u-button
  ---
  color: neutral
  icon: i-lucide-file-text
  size: xl
  to: /keero/pdf/keero_mainboard_schematic.pdf
  target: _blank
  variant: outline
  ---
  Open schematic PDF
  :::
::

::u-page-section
#title
What Keero Is

#features
  :::u-page-feature
  ---
  icon: i-lucide-cpu
  ---
  #title
  Mainboard First

  #description
  Keero starts with a compact ESP32-S3 mainboard that brings compute, power, interaction hardware, and module connectivity into one reusable core.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-box
  ---
  #title
  Modular By Design

  #description
  The mainboard is meant to work with add-ons such as dock and tracks, so the project can evolve without redesigning everything around a single static PCB.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-scan-face
  ---
  #title
  Built For Interaction

  #description
  The hardware direction already includes audio, haptics, motion sensing, display support, and camera connector paths, which makes the platform more than a generic dev board.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code-xml
  ---
  #title
  Open Where It Helps

  #description
  Firmware and architecture are documented openly. Production-grade hardware release files stay private so the project can remain public without becoming trivial to clone.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-joystick
  ---
  #title
  Still Early

  #description
  This is an active prototype project. Some parts are already real and testable, while other parts are documented as direction, not as finished product behavior.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-users
  ---
  #title
  Community Friendly

  #description
  The docs are meant to help makers, embedded developers, and curious followers understand the project quickly without needing a full private hardware package.
  :::
::

::u-page-section
#title
Current Hardware Snapshot

#description
Current Keero render assets mirrored from the hardware repository for deployment.

::div{.keero-docs-embed}
![Keero hero](/keero/images/hero.png){.keero-docs-image .keero-docs-image--wide}
::
::

::u-page-section
#title
Current Platform Snapshot

#features
  :::u-page-feature
  ---
  icon: i-lucide-microchip
  ---
  #title
  ESP32-S3 Core

  #description
  The platform is built around ESP32-S3-WROOM-1U-N16R8 as the central compute and connectivity module for firmware, peripherals, and module control.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-audio-lines
  ---
  #title
  Audio And Feedback

  #description
  The current board direction includes microphone input, speaker output, haptic feedback, and local user feedback paths for more expressive prototypes.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-camera
  ---
  #title
  Camera And Display Paths

  #description
  Keero includes connector paths for camera and small display workflows. These are part of the board architecture, even when the final attached module or enclosure is still evolving.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-battery-charging
  ---
  #title
  Portable Power Direction

  #description
  The project uses a battery-oriented power-management approach so the board can move beyond a USB-only lab setup and toward portable and docked use.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-boxes
  ---
  #title
  Dock And Mobility Ideas

  #description
  The first visible module directions are dock and tracks, which help explain where the platform can grow next.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-route
  ---
  #title
  Firmware In Progress

  #description
  Firmware is still early overall, but the tracks module already has real code and serves as the clearest example of how the platform can turn into a working device family.
  :::
::

::u-page-section
#title
What You Can Do Next

#features
  :::u-page-feature
  ---
  icon: i-lucide-book-open
  ---
  #title
  Read The Overview

  #description
  Start with the overview pages if you want the short version of what Keero is trying to become.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-circuit-board
  ---
  #title
  Inspect The Hardware

  #description
  Visit the hardware section for the mainboard role, module strategy, connector map, and the interactive board viewer.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-binary
  ---
  #title
  Check Firmware Status

  #description
  Use the firmware pages to see what is already implemented and what is still placeholder territory.
  :::
::

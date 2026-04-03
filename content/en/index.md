---
seo:
  title: Keero Docs
  description: Complete documentation for the Keero modular AI hardware platform, including mainboard architecture, manufacturing files, connectors, modules, and firmware status.
---

::u-page-hero
#title
Keero Bot Modular AI Hardware Platform

#description
Complete open documentation for the Keero hardware platform built around the ESP32-S3.

This site documents the current Keero mainboard revision, available manufacturing files, connector map, subsystem architecture, and the early firmware work for the tracks module.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /en/overview/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Explore docs
  :::

  :::u-button
  ---
  color: neutral
  icon: i-lucide-file-down
  size: xl
  to: /keero/downloads/keero_mainboard_schematic.pdf
  target: _blank
  variant: outline
  ---
  Open schematic
  :::
::

::u-page-section
#title
Current Hardware Snapshot

#features
  :::u-page-feature
  ---
  icon: i-lucide-cpu
  ---
  #title
  ESP32-S3 Core
  
  #description
  Mainboard built around `ESP32-S3-WROOM-1U-N16R8` with native USB, external antenna support, camera routing, and expansion headers.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-battery-charging
  ---
  #title
  Managed Power Tree
  
  #description
  `AXP2101` PMIC generates the main rails used across the system, including `3V3A`, `3V3B`, `2V8A`, `DV_2.8V`, `1V5A`, and display boost power.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-scan-face
  ---
  #title
  Sensors and Interaction
  
  #description
  The current board integrates camera, OLED, digital microphone, I2S amplifier, haptics, accelerometer, and pogo-based module expansion.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-factory
  ---
  #title
  Manufacturing Ready
  
  #description
  Gerbers, BOM, pick-place, EasyEDA export, and 3D files are all linked so the project can be inspected, ordered, and assembled from the documentation site.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-joystick
  ---
  #title
  Modular Expansion
  
  #description
  Dock and tracks modules are part of the system design, with the tracks firmware already containing motion, light, and battery monitoring foundations.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-wrench
  ---
  #title
  Firmware Roadmap
  
  #description
  Firmware is still in bring-up, but the docs already cover the current `tracks` PlatformIO target, UART command format, and subsystem responsibilities.
  :::
::

::u-page-section
#title
Project Preview

#description
Current Keero render assets mirrored from the hardware repository for deployment.

::div{.keero-docs-embed}
![Keero hero](/keero/images/hero.png){.keero-docs-image .keero-docs-image--wide}
::
::

::u-page-section
#title
What Is Documented Here

#features
  :::u-page-feature
  ---
  icon: i-lucide-file-text
  ---
  #title
  Mainboard Architecture

  #description
  Mainboard subsystem breakdown from the current schematic revision dated `2026-03-09`.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-microchip
  ---
  #title
  Production Components

  #description
  BOM-based documentation for `AXP2101`, `ESP32-S3-WROOM-1U-N16R8`, `MAX98357A`, `DRV2605L`, `LIS2DW12TR`, and `ICS-41350`.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-plug-zap
  ---
  #title
  Connector Map

  #description
  Connector roles for battery, speaker, motor, camera, OLED, microphone, user button, pogo docking, and the ESP breakout header.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-package-search
  ---
  #title
  Manufacturing Assets

  #description
  Production files required for PCB fabrication, PCBA, review, and mechanical validation.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-cpu
  ---
  #title
  Firmware Status

  #description
  Current tracks firmware state, command format, and a prepared placeholder path for the full Keero platform firmware.
  :::
::

::u-page-section
#title
Downloads

#features
  :::u-page-feature
  ---
  icon: i-lucide-file-down
  to: /keero/downloads/keero_mainboard_schematic.pdf
  target: _blank
  ---
  #title
  Mainboard Schematic PDF

  #description
  Full schematic export for electrical review and integration work.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-layout-panel-top
  to: /keero/downloads/PCB_board_2026-04-02.pdf
  target: _blank
  ---
  #title
  PCB Layout PDF

  #description
  Board layout export for placement, routing, and connector inspection.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-list-tree
  to: /keero/downloads/mainboard-bom.csv
  target: _blank
  ---
  #title
  BOM CSV

  #description
  Bill of materials used for sourcing, costing, and assembly prep.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-crosshair
  to: /keero/downloads/mainboard-pick-place.csv
  target: _blank
  ---
  #title
  Pick and Place CSV

  #description
  Placement file for PCBA workflows and assembly validation.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-file-archive
  to: /keero/downloads/easyeda.zip
  target: _blank
  ---
  #title
  EasyEDA Export

  #description
  Editable source export copied from the hardware repository.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-folder-open
  to: /keero/downloads/exports.zip
  target: _blank
  ---
  #title
  Mainboard Outputs Archive

  #description
  Additional generated output files packaged for download.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-box-select
  to: /en/hardware/interactive-bom
  ---
  #title
  Interactive BOM

  #description
  Embedded board viewer for quick assembly inspection and reference designator lookup.
  :::
::

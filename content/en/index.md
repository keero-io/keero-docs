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

## Preview

![Keero hero](/keero/images/hero.png)

## What Is Documented Here

- Mainboard subsystem breakdown from the current schematic revision dated `2026-03-09`.
- Key production components from the BOM, including `AXP2101`, `ESP32-S3-WROOM-1U-N16R8`, `MAX98357A`, `DRV2605L`, `LIS2DW12TR`, and `ICS-41350`.
- Connector roles for battery, speaker, motor, camera, OLED, microphone, user button, pogo docking, and the ESP breakout header.
- Manufacturing assets required for PCB fabrication and PCBA.
- Current firmware state for the tracks module, with a placeholder path for the future full platform firmware.

## Downloads

- [Mainboard schematic PDF](/keero/downloads/keero_mainboard_schematic.pdf)
- [PCB layout PDF](/keero/downloads/PCB_board_2026-04-02.pdf)
- [BOM CSV](/keero/downloads/mainboard-bom.csv)
- [Pick and place CSV](/keero/downloads/mainboard-pick-place.csv)
- [EasyEDA export](/keero/downloads/easyeda.zip)
- [Mainboard outputs archive](/keero/downloads/exports.zip)

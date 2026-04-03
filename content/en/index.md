---
seo:
  title: Keero Docs
  description: High-level documentation for the Keero Bot modular AI hardware platform, including architecture, modules, firmware direction, and prototyping status.
---

::u-page-hero
#title
Keero Bot Modular AI Hardware Platform

#description
Keero Bot is a modular embedded platform for AI-driven physical interaction, built around an ESP32-S3 core and designed to combine sensing, audio, haptics, display, and expansion modules in one coherent system.

This documentation is intentionally public and high level. It explains the system architecture, product direction, prototyping status, and firmware roadmap while keeping production-critical hardware details private.

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
  icon: i-lucide-box-select
  size: xl
  to: /en/hardware/interactive-bom
  variant: outline
  ---
  Open board viewer
  :::
::

::u-page-section
#title
Why Keero Bot

#features
  :::u-page-feature
  ---
  icon: i-lucide-cpu
  ---
  #title
  AI-Ready Core

  #description
  Built around ESP32-S3 to support connected, sensor-rich embedded experiences with a practical path toward audio, vision, and interaction workloads.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-box
  ---
  #title
  Modular Hardware

  #description
  The system is designed as a reusable mainboard plus swappable modules such as dock and tracks, making it suitable for iterative product development.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-scan-face
  ---
  #title
  Multi-Modal Interaction

  #description
  Keero Bot combines camera, audio, haptics, motion sensing, and display support so interaction logic can move beyond a simple dev-board workflow.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-factory
  ---
  #title
  Prototype-Friendly

  #description
  The board was designed with real PCB manufacturing and early assembly workflows in mind, making it suitable for serious prototyping and sponsor evaluation.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-joystick
  ---
  #title
  Physical AI Experiments

  #description
  The platform is aimed at embodied AI ideas where compute meets movement, sensing, feedback, and real-world environmental input.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code-xml
  ---
  #title
  Open Firmware Direction

  #description
  Firmware is the openly evolving software layer of the platform, while hardware documentation stays intentionally higher level to protect production know-how.
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
What Is Public

#features
  :::u-page-feature
  ---
  icon: i-lucide-workflow
  ---
  #title
  Architecture

  #description
  Public docs describe the system through compute, power, interaction, module expansion, and firmware responsibilities rather than low-level electrical implementation.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-plug-zap
  ---
  #title
  Modular Design

  #description
  The docs explain how the mainboard, dock, tracks, and module interfaces fit together so developers and sponsors can understand the platform vision quickly.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-compass
  ---
  #title
  Use Cases

  #description
  Keero Bot is positioned for embodied AI experiments, interactive robotics, docking concepts, and sensor-rich hardware prototyping.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-wrench
  ---
  #title
  Status and Roadmap

  #description
  Public progress tracking covers what is already integrated, what is in active prototyping, and what is planned for future firmware and module releases.
  :::
::

::u-page-section
#title
Access Policy

#features
  :::u-page-feature
  ---
  icon: i-lucide-lock
  ---
  #title
  Production Files Are Private

  #description
  Gerbers, pick-and-place outputs, editable design sources, and full manufacturing BOMs are not publicly distributed in this documentation build.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-badge-info
  ---
  #title
  Open but Protected

  #description
  Keero Bot is developed in an open-hardware spirit, but the public release is not intended to enable unrestricted commercial cloning of the official hardware.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-handshake
  ---
  #title
  Sponsor-Friendly Review

  #description
  Additional production detail can be shared selectively for prototyping, sponsorship, or manufacturing discussions when there is a legitimate project need.
  :::
::

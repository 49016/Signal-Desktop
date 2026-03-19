// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

// See `TICK_INTERVAL` in group_call.rs in RingRTC
export const AUDIO_LEVEL_INTERVAL_MS = 200;

export const REQUESTED_VIDEO_WIDTH = 1920;
export const REQUESTED_VIDEO_HEIGHT = 1080;
export const REQUESTED_VIDEO_FRAMERATE = 60;

export const REQUESTED_GROUP_VIDEO_WIDTH = 1280;
export const REQUESTED_GROUP_VIDEO_HEIGHT = 720;

export const REQUESTED_SCREEN_SHARE_WIDTH = 2880;
export const REQUESTED_SCREEN_SHARE_HEIGHT = 1800;
// 15fps is much nicer but takes up a lot more CPU.
export const REQUESTED_SCREEN_SHARE_FRAMERATE = 15;

export const MAX_FRAME_WIDTH = 2880;
export const MAX_FRAME_HEIGHT = 1800;
export const FRAME_BUFFER_SIZE = MAX_FRAME_WIDTH * MAX_FRAME_HEIGHT * 4;

const rawIconList = [
  "10k",
  "10mp",
  "11mp",
  "123",
  "12mp",
  "13mp",
  "14mp",
  "15mp",
  "16mp",
  "17mp",
  "18_up_rating",
  "18mp",
  "19mp",
  "1k",
  "1k_plus",
  "1x_mobiledata",
  "20mp",
  "21mp",
  "22mp",
  "23mp",
  "24mp",
  "2k",
  "2k_plus",
  "2mp",
  "30fps",
  "30fps_select",
  "360",
  "3d_rotation",
  "3g_mobiledata",
  "3k",
  "3k_plus",
  "3mp",
  "3p",
  "4g_mobiledata",
  "4g_plus_mobiledata",
  "4k",
  "4k_plus",
  "4mp",
  "5g",
  "5k",
  "5k_plus",
  "5mp",
  "60fps",
  "60fps_select",
  "6_ft_apart",
  "6k",
  "6k_plus",
  "6mp",
  "7k",
  "7k_plus",
  "7mp",
  "8k",
  "8k_plus",
  "8mp",
  "9k",
  "9k_plus",
  "9mp",
  "abc",
  "ac_unit",
  "access_alarm",
  "access_alarms",
  "access_time",
  "access_time_filled",
  "accessibility",
  "accessibility_new",
  "accessible",
  "accessible_forward",
  "account_balance",
  "account_balance_wallet",
  "account_box",
  "account_circle",
  "account_tree",
  "ad_units",
  "adb",
  "add",
  "add_a_photo",
  "add_alarm",
  "add_alert",
  "add_box",
  "add_business",
  "add_call",
  "add_card",
  "add_chart",
  "add_circle",
  "add_circle_outline",
  "add_comment",
  "add_home",
  "add_home_work",
  "add_ic_call",
  "add_link",
  "add_location",
  "add_location_alt",
  "add_moderator",
  "add_photo_alternate",
  "add_reaction",
  "add_road",
  "add_shopping_cart",
  "add_task",
  "add_to_drive",
  "add_to_home_screen",
  "add_to_photos",
  "add_to_queue",
  "addchart",
  "adf_scanner",
  "adjust",
  "admin_panel_settings",
  "adobe",
  "ads_click",
  "agriculture",
  "air",
  "airline_seat_flat",
  "airline_seat_flat_angled",
  "airline_seat_individual_suite",
  "airline_seat_legroom_extra",
  "airline_seat_legroom_normal",
  "airline_seat_legroom_reduced",
  "airline_seat_recline_extra",
  "airline_seat_recline_normal",
  "airline_stops",
  "airlines",
  "airplane_ticket",
  "airplanemode_active",
  "airplanemode_inactive",
  "airplanemode_off",
  "airplanemode_on",
  "airplay",
  "airport_shuttle",
  "alarm",
  "alarm_add",
  "alarm_off",
  "alarm_on",
  "album",
  "align_horizontal_center",
  "align_horizontal_left",
  "align_horizontal_right",
  "align_vertical_bottom",
  "align_vertical_center",
  "align_vertical_top",
  "all_inbox",
  "all_inclusive",
  "all_out",
  "alt_route",
  "alternate_email",
  "amp_stories",
  "analytics",
  "anchor",
  "android",
  "animation",
  "announcement",
  "aod",
  "apartment",
  "api",
  "app_blocking",
  "app_registration",
  "app_settings_alt",
  "app_shortcut",
  "apple",
  "approval",
  "apps",
  "apps_outage",
  "architecture",
  "archive",
  "area_chart",
  "arrow_back",
  "arrow_back_ios",
  "arrow_back_ios_new",
  "arrow_circle_down",
  "arrow_circle_left",
  "arrow_circle_right",
  "arrow_circle_up",
  "arrow_downward",
  "arrow_drop_down",
  "arrow_drop_down_circle",
  "arrow_drop_up",
  "arrow_forward",
  "arrow_forward_ios",
  "arrow_left",
  "arrow_outward",
  "arrow_right",
  "arrow_right_alt",
  "arrow_upward",
  "art_track",
  "article",
  "aspect_ratio",
  "assessment",
  "assignment",
  "assignment_add",
  "assignment_ind",
  "assignment_late",
  "assignment_return",
  "assignment_returned",
  "assignment_turned_in",
  "assist_walker",
  "assistant",
  "assistant_direction",
  "assistant_navigation",
  "assistant_photo",
  "assured_workload",
  "atm",
  "attach_email",
  "attach_file",
  "attach_money",
  "attachment",
  "attractions",
  "attribution",
  "audio_file",
  "audiotrack",
  "auto_awesome",
  "auto_awesome_mosaic",
  "auto_awesome_motion",
  "auto_delete",
  "auto_fix_high",
  "auto_fix_normal",
  "auto_fix_off",
  "auto_graph",
  "auto_mode",
  "auto_stories",
  "autofps_select",
  "autorenew",
  "av_timer",
  "baby_changing_station",
  "back_hand",
  "backpack",
  "backspace",
  "backup",
  "backup_table",
  "badge",
  "bakery_dining",
  "balance",
  "balcony",
  "ballot",
  "bar_chart",
  "barcode_reader",
  "batch_prediction",
  "bathroom",
  "bathtub",
  "battery_0_bar",
  "battery_1_bar",
  "battery_2_bar",
  "battery_3_bar",
  "battery_4_bar",
  "battery_5_bar",
  "battery_6_bar",
  "battery_alert",
  "battery_charging_full",
  "battery_full",
  "battery_saver",
  "battery_std",
  "battery_unknown",
  "beach_access",
  "bed",
  "bedroom_baby",
  "bedroom_child",
  "bedroom_parent",
  "bedtime",
  "bedtime_off",
  "beenhere",
  "bento",
  "bike_scooter",
  "biotech",
  "blender",
  "blind",
  "blinds",
  "blinds_closed",
  "block",
  "block_flipped",
  "bloodtype",
  "bluetooth",
  "bluetooth_audio",
  "bluetooth_connected",
  "bluetooth_disabled",
  "bluetooth_drive",
  "bluetooth_searching",
  "blur_circular",
  "blur_linear",
  "blur_off",
  "blur_on",
  "bolt",
  "book",
  "book_online",
  "bookmark",
  "bookmark_add",
  "bookmark_added",
  "bookmark_border",
  "bookmark_outline",
  "bookmark_remove",
  "bookmarks",
  "border_all",
  "border_bottom",
  "border_clear",
  "border_color",
  "border_horizontal",
  "border_inner",
  "border_left",
  "border_outer",
  "border_right",
  "border_style",
  "border_top",
  "border_vertical",
  "boy",
  "branding_watermark",
  "breakfast_dining",
  "brightness_1",
  "brightness_2",
  "brightness_3",
  "brightness_4",
  "brightness_5",
  "brightness_6",
  "brightness_7",
  "brightness_auto",
  "brightness_high",
  "brightness_low",
  "brightness_medium",
  "broadcast_on_home",
  "broadcast_on_personal",
  "broken_image",
  "browse_gallery",
  "browser_not_supported",
  "browser_updated",
  "brunch_dining",
  "brush",
  "bubble_chart",
  "bug_report",
  "build",
  "build_circle",
  "bungalow",
  "burst_mode",
  "bus_alert",
  "business",
  "business_center",
  "cabin",
  "cable",
  "cached",
  "cake",
  "calculate",
  "calendar_month",
  "calendar_today",
  "calendar_view_day",
  "calendar_view_month",
  "calendar_view_week",
  "call",
  "call_end",
  "call_made",
  "call_merge",
  "call_missed",
  "call_missed_outgoing",
  "call_received",
  "call_split",
  "call_to_action",
  "camera",
  "camera_alt",
  "camera_enhance",
  "camera_front",
  "camera_indoor",
  "camera_outdoor",
  "camera_rear",
  "camera_roll",
  "cameraswitch",
  "campaign",
  "cancel",
  "cancel_presentation",
  "cancel_schedule_send",
  "candlestick_chart",
  "car_crash",
  "car_rental",
  "car_repair",
  "card_giftcard",
  "card_membership",
  "card_travel",
  "carpenter",
  "cases",
  "casino",
  "cast",
  "cast_connected",
  "cast_for_education",
  "castle",
  "catching_pokemon",
  "category",
  "celebration",
  "cell_tower",
  "cell_wifi",
  "center_focus_strong",
  "center_focus_weak",
  "chair",
  "chair_alt",
  "chalet",
  "change_circle",
  "change_history",
  "charging_station",
  "chat",
  "chat_bubble",
  "chat_bubble_outline",
  "check",
  "check_box",
  "check_box_outline_blank",
  "check_circle",
  "check_circle_outline",
  "checklist",
  "checklist_rtl",
  "checkroom",
  "chevron_left",
  "chevron_right",
  "child_care",
  "child_friendly",
  "chrome_reader_mode",
  "church",
  "circle",
  "circle_notifications",
  "class",
  "clean_hands",
  "cleaning_services",
  "clear",
  "clear_all",
  "close",
  "close_fullscreen",
  "closed_caption",
  "closed_caption_disabled",
  "closed_caption_off",
  "cloud",
  "cloud_circle",
  "cloud_done",
  "cloud_download",
  "cloud_off",
  "cloud_queue",
  "cloud_sync",
  "cloud_upload",
  "cloudy_snowing",
  "co2",
  "co_present",
  "code",
  "code_off",
  "coffee",
  "coffee_maker",
  "collections",
  "collections_bookmark",
  "color_lens",
  "colorize",
  "comment",
  "comment_bank",
  "comments_disabled",
  "commit",
  "commute",
  "compare",
  "compare_arrows",
  "compass_calibration",
  "compost",
  "compress",
  "computer",
  "confirmation_num",
  "confirmation_number",
  "connect_without_contact",
  "connected_tv",
  "connecting_airports",
  "construction",
  "contact_emergency",
  "contact_mail",
  "contact_page",
  "contact_phone",
  "contact_support",
  "contactless",
  "contacts",
  "content_copy",
  "content_cut",
  "content_paste",
  "content_paste_go",
  "content_paste_off",
  "content_paste_search",
  "contrast",
  "control_camera",
  "control_point",
  "control_point_duplicate",
  "conveyor_belt",
  "cookie",
  "copy_all",
  "copyright",
  "coronavirus",
  "corporate_fare",
  "cottage",
  "countertops",
  "create",
  "create_new_folder",
  "credit_card",
  "credit_card_off",
  "credit_score",
  "crib",
  "crisis_alert",
  "crop",
  "crop_16_9",
  "crop_3_2",
  "crop_5_4",
  "crop_7_5",
  "crop_din",
  "crop_free",
  "crop_landscape",
  "crop_original",
  "crop_portrait",
  "crop_rotate",
  "crop_square",
  "cruelty_free",
  "css",
  "currency_bitcoin",
  "currency_exchange",
  "currency_franc",
  "currency_lira",
  "currency_pound",
  "currency_ruble",
  "currency_rupee",
  "currency_yen",
  "currency_yuan",
  "curtains",
  "curtains_closed",
  "cyclone",
  "dangerous",
  "dark_mode",
  "dashboard",
  "dashboard_customize",
  "data_array",
  "data_exploration",
  "data_object",
  "data_saver_off",
  "data_saver_on",
  "data_thresholding",
  "data_usage",
  "dataset",
  "dataset_linked",
  "date_range",
  "deblur",
  "deck",
  "dehaze",
  "delete",
  "delete_forever",
  "delete_outline",
  "delete_sweep",
  "delivery_dining",
  "density_large",
  "density_medium",
  "density_small",
  "departure_board",
  "description",
  "deselect",
  "design_services",
  "desk",
  "desktop_access_disabled",
  "desktop_mac",
  "desktop_windows",
  "details",
  "developer_board",
  "developer_board_off",
  "developer_mode",
  "device_hub",
  "device_thermostat",
  "device_unknown",
  "devices",
  "devices_fold",
  "devices_other",
  "dew_point",
  "dialer_sip",
  "dialpad",
  "diamond",
  "difference",
  "dining",
  "dinner_dining",
  "directions",
  "directions_bike",
  "directions_boat",
  "directions_boat_filled",
  "directions_bus",
  "directions_bus_filled",
  "directions_car",
  "directions_car_filled",
  "directions_ferry",
  "directions_off",
  "directions_railway",
  "directions_railway_filled",
  "directions_run",
  "directions_subway",
  "directions_subway_filled",
  "directions_train",
  "directions_transit",
  "directions_transit_filled",
  "directions_walk",
  "dirty_lens",
  "disabled_by_default",
  "disabled_visible",
  "disc_full",
  "discord",
  "discount",
  "display_settings",
  "diversity_1",
  "diversity_2",
  "diversity_3",
  "dnd_forwardslash",
  "dns",
  "do_disturb",
  "do_disturb_alt",
  "do_disturb_off",
  "do_disturb_on",
  "do_not_disturb",
  "do_not_disturb_alt",
  "do_not_disturb_off",
  "do_not_disturb_on",
  "do_not_disturb_on_total_silence",
  "do_not_step",
  "do_not_touch",
  "dock",
  "document_scanner",
  "domain",
  "domain_add",
  "domain_disabled",
  "domain_verification",
  "done",
  "done_all",
  "done_outline",
  "donut_large",
  "donut_small",
  "door_back",
  "door_front",
  "door_sliding",
  "doorbell",
  "double_arrow",
  "downhill_skiing",
  "download",
  "download_done",
  "download_for_offline",
  "downloading",
  "drafts",
  "drag_handle",
  "drag_indicator",
  "draw",
  "drive_eta",
  "drive_file_move",
  "drive_file_move_outline",
  "drive_file_move_rtl",
  "drive_file_rename_outline",
  "drive_folder_upload",
  "dry",
  "dry_cleaning",
  "duo",
  "dvr",
  "dynamic_feed",
  "dynamic_form",
  "e_mobiledata",
  "earbuds",
  "earbuds_battery",
  "east",
  "eco",
  "edgesensor_high",
  "edgesensor_low",
  "edit",
  "edit_attributes",
  "edit_calendar",
  "edit_document",
  "edit_location",
  "edit_location_alt",
  "edit_note",
  "edit_notifications",
  "edit_off",
  "edit_road",
  "edit_square",
  "egg",
  "egg_alt",
  "eject",
  "elderly",
  "elderly_woman",
  "electric_bike",
  "electric_bolt",
  "electric_car",
  "electric_meter",
  "electric_moped",
  "electric_rickshaw",
  "electric_scooter",
  "electrical_services",
  "elevator",
  "email",
  "emergency",
  "emergency_recording",
  "emergency_share",
  "emoji_emotions",
  "emoji_events",
  "emoji_flags",
  "emoji_food_beverage",
  "emoji_nature",
  "emoji_objects",
  "emoji_people",
  "emoji_symbols",
  "emoji_transportation",
  "energy_savings_leaf",
  "engineering",
  "enhance_photo_translate",
  "enhanced_encryption",
  "equalizer",
  "error",
  "error_outline",
  "escalator",
  "escalator_warning",
  "euro",
  "euro_symbol",
  "ev_station",
  "event",
  "event_available",
  "event_busy",
  "event_note",
  "event_repeat",
  "event_seat",
  "exit_to_app",
  "expand",
  "expand_circle_down",
  "expand_less",
  "expand_more",
  "explicit",
  "explore",
  "explore_off",
  "exposure",
  "exposure_minus_1",
  "exposure_minus_2",
  "exposure_neg_1",
  "exposure_neg_2",
  "exposure_plus_1",
  "exposure_plus_2",
  "exposure_zero",
  "extension",
  "extension_off",
  "face",
  "face_2",
  "face_3",
  "face_4",
  "face_5",
  "face_6",
  "face_retouching_natural",
  "face_retouching_off",
  "facebook",
  "fact_check",
  "factory",
  "family_restroom",
  "fast_forward",
  "fast_rewind",
  "fastfood",
  "favorite",
  "favorite_border",
  "favorite_outline",
  "fax",
  "featured_play_list",
  "featured_video",
  "feed",
  "feedback",
  "female",
  "fence",
  "festival",
  "fiber_dvr",
  "fiber_manual_record",
  "fiber_new",
  "fiber_pin",
  "fiber_smart_record",
  "file_copy",
  "file_download",
  "file_download_done",
  "file_download_off",
  "file_open",
  "file_present",
  "file_upload",
  "file_upload_off",
  "filter",
  "filter_1",
  "filter_2",
  "filter_3",
  "filter_4",
  "filter_5",
  "filter_6",
  "filter_7",
  "filter_8",
  "filter_9",
  "filter_9_plus",
  "filter_alt",
  "filter_alt_off",
  "filter_b_and_w",
  "filter_center_focus",
  "filter_drama",
  "filter_frames",
  "filter_hdr",
  "filter_list",
  "filter_list_alt",
  "filter_list_off",
  "filter_none",
  "filter_tilt_shift",
  "filter_vintage",
  "find_in_page",
  "find_replace",
  "fingerprint",
  "fire_extinguisher",
  "fire_hydrant",
  "fire_hydrant_alt",
  "fire_truck",
  "fireplace",
  "first_page",
  "fit_screen",
  "fitbit",
  "fitness_center",
  "flag",
  "flag_circle",
  "flaky",
  "flare",
  "flash_auto",
  "flash_off",
  "flash_on",
  "flashlight_off",
  "flashlight_on",
  "flatware",
  "flight",
  "flight_class",
  "flight_land",
  "flight_takeoff",
  "flip",
  "flip_camera_android",
  "flip_camera_ios",
  "flip_to_back",
  "flip_to_front",
  "flood",
  "flourescent",
  "flourescent",
  "fluorescent",
  "flutter_dash",
  "fmd_bad",
  "fmd_good",
  "foggy",
  "folder",
  "folder_copy",
  "folder_delete",
  "folder_off",
  "folder_open",
  "folder_shared",
  "folder_special",
  "folder_zip",
  "follow_the_signs",
  "font_download",
  "font_download_off",
  "food_bank",
  "forest",
  "fork_left",
  "fork_right",
  "forklift",
  "format_align_center",
  "format_align_justify",
  "format_align_left",
  "format_align_right",
  "format_bold",
  "format_clear",
  "format_color_fill",
  "format_color_reset",
  "format_color_text",
  "format_indent_decrease",
  "format_indent_increase",
  "format_italic",
  "format_line_spacing",
  "format_list_bulleted",
  "format_list_bulleted_add",
  "format_list_numbered",
  "format_list_numbered_rtl",
  "format_overline",
  "format_paint",
  "format_quote",
  "format_shapes",
  "format_size",
  "format_strikethrough",
  "format_textdirection_l_to_r",
  "format_textdirection_r_to_l",
  "format_underline",
  "format_underlined",
  "fort",
  "forum",
  "forward",
  "forward_10",
  "forward_30",
  "forward_5",
  "forward_to_inbox",
  "foundation",
  "free_breakfast",
  "free_cancellation",
  "front_hand",
  "front_loader",
  "fullscreen",
  "fullscreen_exit",
  "functions",
  "g_mobiledata",
  "g_translate",
  "gamepad",
  "games",
  "garage",
  "gas_meter",
  "gavel",
  "generating_tokens",
  "gesture",
  "get_app",
  "gif",
  "gif_box",
  "girl",
  "gite",
  "goat",
  "golf_course",
  "gpp_bad",
  "gpp_good",
  "gpp_maybe",
  "gps_fixed",
  "gps_not_fixed",
  "gps_off",
  "grade",
  "gradient",
  "grading",
  "grain",
  "graphic_eq",
  "grass",
  "grid_3x3",
  "grid_4x4",
  "grid_goldenratio",
  "grid_off",
  "grid_on",
  "grid_view",
  "group",
  "group_add",
  "group_off",
  "group_remove",
  "group_work",
  "groups",
  "groups_2",
  "groups_3",
  "h_mobiledata",
  "h_plus_mobiledata",
  "hail",
  "handshake",
  "handyman",
  "hardware",
  "hd",
  "hdr_auto",
  "hdr_auto_select",
  "hdr_enhanced_select",
  "hdr_off",
  "hdr_off_select",
  "hdr_on",
  "hdr_on_select",
  "hdr_plus",
  "hdr_strong",
  "hdr_weak",
  "headphones",
  "headphones_battery",
  "headset",
  "headset_mic",
  "headset_off",
  "healing",
  "health_and_safety",
  "hearing",
  "hearing_disabled",
  "heart_broken",
  "heat_pump",
  "height",
  "help",
  "help_center",
  "help_outline",
  "hevc",
  "hexagon",
  "hide_image",
  "hide_source",
  "high_quality",
  "highlight",
  "highlight_alt",
  "highlight_off",
  "highlight_remove",
  "hiking",
  "history",
  "history_edu",
  "history_toggle_off",
  "hive",
  "hls",
  "hls_off",
  "holiday_village",
  "home",
  "home_filled",
  "home_max",
  "home_mini",
  "home_repair_service",
  "home_work",
  "horizontal_distribute",
  "horizontal_rule",
  "horizontal_split",
  "hot_tub",
  "hotel",
  "hotel_class",
  "hourglass_bottom",
  "hourglass_disabled",
  "hourglass_empty",
  "hourglass_full",
  "hourglass_top",
  "house",
  "house_siding",
  "houseboat",
  "how_to_reg",
  "how_to_vote",
  "html",
  "http",
  "https",
  "hub",
  "hvac",
  "ice_skating",
  "icecream",
  "image",
  "image_aspect_ratio",
  "image_not_supported",
  "image_search",
  "imagesearch_roller",
  "import_contacts",
  "import_export",
  "important_devices",
  "inbox",
  "incomplete_circle",
  "indeterminate_check_box",
  "info",
  "info_outline",
  "input",
  "insert_chart",
  "insert_chart_outlined",
  "insert_comment",
  "insert_drive_file",
  "insert_emoticon",
  "insert_invitation",
  "insert_link",
  "insert_page_break",
  "insert_photo",
  "insights",
  "install_desktop",
  "install_mobile",
  "integration_instructions",
  "interests",
  "interpreter_mode",
  "inventory",
  "inventory_2",
  "invert_colors",
  "invert_colors_off",
  "invert_colors_on",
  "ios_share",
  "iron",
  "iso",
  "javascript",
  "join_full",
  "join_inner",
  "join_left",
  "join_right",
  "kayaking",
  "kebab_dining",
  "key",
  "key_off",
  "keyboard",
  "keyboard_alt",
  "keyboard_arrow_down",
  "keyboard_arrow_left",
  "keyboard_arrow_right",
  "keyboard_arrow_up",
  "keyboard_backspace",
  "keyboard_capslock",
  "keyboard_command",
  "keyboard_command_key",
  "keyboard_control",
  "keyboard_control_key",
  "keyboard_double_arrow_down",
  "keyboard_double_arrow_left",
  "keyboard_double_arrow_right",
  "keyboard_double_arrow_up",
  "keyboard_hide",
  "keyboard_option",
  "keyboard_option_key",
  "keyboard_return",
  "keyboard_tab",
  "keyboard_voice",
  "king_bed",
  "kitchen",
  "kitesurfing",
  "label",
  "label_important",
  "label_important_outline",
  "label_off",
  "label_outline",
  "lan",
  "landscape",
  "landslide",
  "language",
  "laptop",
  "laptop_chromebook",
  "laptop_mac",
  "laptop_windows",
  "last_page",
  "launch",
  "layers",
  "layers_clear",
  "leaderboard",
  "leak_add",
  "leak_remove",
  "leave_bags_at_home",
  "legend_toggle",
  "lens",
  "lens_blur",
  "library_add",
  "library_add_check",
  "library_books",
  "library_music",
  "light",
  "light_mode",
  "lightbulb",
  "lightbulb_circle",
  "lightbulb_outline",
  "line_axis",
  "line_style",
  "line_weight",
  "linear_scale",
  "link",
  "link_off",
  "linked_camera",
  "liquor",
  "list",
  "list_alt",
  "live_help",
  "live_tv",
  "living",
  "local_activity",
  "local_airport",
  "local_atm",
  "local_attraction",
  "local_bar",
  "local_cafe",
  "local_car_wash",
  "local_convenience_store",
  "local_dining",
  "local_drink",
  "local_fire_department",
  "local_florist",
  "local_gas_station",
  "local_grocery_store",
  "local_hospital",
  "local_hotel",
  "local_laundry_service",
  "local_library",
  "local_mall",
  "local_movies",
  "local_offer",
  "local_parking",
  "local_pharmacy",
  "local_phone",
  "local_pizza",
  "local_play",
  "local_police",
  "local_post_office",
  "local_print_shop",
  "local_printshop",
  "local_restaurant",
  "local_see",
  "local_shipping",
  "local_taxi",
  "location_city",
  "location_disabled",
  "location_history",
  "location_off",
  "location_on",
  "location_pin",
  "location_searching",
  "lock",
  "lock_clock",
  "lock_open",
  "lock_outline",
  "lock_person",
  "lock_reset",
  "login",
  "logo_dev",
  "logout",
  "looks",
  "looks_3",
  "looks_4",
  "looks_5",
  "looks_6",
  "looks_one",
  "looks_two",
  "loop",
  "loupe",
  "low_priority",
  "loyalty",
  "lte_mobiledata",
  "lte_plus_mobiledata",
  "luggage",
  "lunch_dining",
  "lyrics",
  "macro_off",
  "mail",
  "mail_lock",
  "mail_outline",
  "male",
  "man",
  "man_2",
  "man_3",
  "man_4",
  "manage_accounts",
  "manage_history",
  "manage_search",
  "map",
  "maps_home_work",
  "maps_ugc",
  "margin",
  "mark_as_unread",
  "mark_chat_read",
  "mark_chat_unread",
  "mark_email_read",
  "mark_email_unread",
  "mark_unread_chat_alt",
  "markunread",
  "markunread_mailbox",
  "masks",
  "maximize",
  "media_bluetooth_off",
  "media_bluetooth_on",
  "mediation",
  "medical_information",
  "medical_services",
  "medication",
  "medication_liquid",
  "meeting_room",
  "memory",
  "menu",
  "menu_book",
  "menu_open",
  "merge",
  "merge_type",
  "message",
  "messenger",
  "messenger_outline",
  "mic",
  "mic_external_off",
  "mic_external_on",
  "mic_none",
  "mic_off",
  "microwave",
  "military_tech",
  "minimize",
  "minor_crash",
  "miscellaneous_services",
  "missed_video_call",
  "mms",
  "mobile_friendly",
  "mobile_off",
  "mobile_screen_share",
  "mobiledata_off",
  "mode",
  "mode_comment",
  "mode_edit",
  "mode_edit_outline",
  "mode_fan_off",
  "mode_night",
  "mode_of_travel",
  "mode_standby",
  "model_training",
  "monetization_on",
  "money",
  "money_off",
  "money_off_csred",
  "monitor",
  "monitor_heart",
  "monitor_weight",
  "monochrome_photos",
  "mood",
  "mood_bad",
  "moped",
  "more",
  "more_horiz",
  "more_time",
  "more_vert",
  "mosque",
  "motion_photos_auto",
  "motion_photos_off",
  "motion_photos_on",
  "motion_photos_pause",
  "motion_photos_paused",
  "motorcycle",
  "mouse",
  "move_down",
  "move_to_inbox",
  "move_up",
  "movie",
  "movie_creation",
  "movie_edit",
  "movie_filter",
  "moving",
  "mp",
  "multiline_chart",
  "multiple_stop",
  "multitrack_audio",
  "museum",
  "music_note",
  "music_off",
  "music_video",
  "my_library_add",
  "my_library_books",
  "my_library_music",
  "my_location",
  "nat",
  "nature",
  "nature_people",
  "navigate_before",
  "navigate_next",
  "navigation",
  "near_me",
  "near_me_disabled",
  "nearby_error",
  "nearby_off",
  "nest_cam_wired_stand",
  "network_cell",
  "network_check",
  "network_locked",
  "network_ping",
  "network_wifi",
  "network_wifi_1_bar",
  "network_wifi_2_bar",
  "network_wifi_3_bar",
  "new_label",
  "new_releases",
  "newspaper",
  "next_plan",
  "next_week",
  "nfc",
  "night_shelter",
  "nightlife",
  "nightlight",
  "nightlight_round",
  "nights_stay",
  "no_accounts",
  "no_adult_content",
  "no_backpack",
  "no_cell",
  "no_crash",
  "no_drinks",
  "no_encryption",
  "no_encryption_gmailerrorred",
  "no_flash",
  "no_food",
  "no_luggage",
  "no_meals",
  "no_meals_ouline",
  "no_meeting_room",
  "no_photography",
  "no_sim",
  "no_stroller",
  "no_transfer",
  "noise_aware",
  "noise_control_off",
  "nordic_walking",
  "north",
  "north_east",
  "north_west",
  "not_accessible",
  "not_interested",
  "not_listed_location",
  "not_started",
  "note",
  "note_add",
  "note_alt",
  "notes",
  "notification_add",
  "notification_important",
  "notifications",
  "notifications_active",
  "notifications_none",
  "notifications_off",
  "notifications_on",
  "notifications_paused",
  "now_wallpaper",
  "now_widgets",
  "numbers",
  "offline_bolt",
  "offline_pin",
  "offline_share",
  "oil_barrel",
  "on_device_training",
  "ondemand_video",
  "online_prediction",
  "opacity",
  "open_in_browser",
  "open_in_full",
  "open_in_new",
  "open_in_new_off",
  "open_with",
  "other_houses",
  "outbond",
  "outbound",
  "outbox",
  "outdoor_grill",
  "outgoing_mail",
  "outlet",
  "outlined_flag",
  "output",
  "padding",
  "pages",
  "pageview",
  "paid",
  "palette",
  "pallet",
  "pan_tool",
  "pan_tool_alt",
  "panorama",
  "panorama_fish_eye",
  "panorama_fisheye",
  "panorama_horizontal",
  "panorama_horizontal_select",
  "panorama_photosphere",
  "panorama_photosphere_select",
  "panorama_vertical",
  "panorama_vertical_select",
  "panorama_wide_angle",
  "panorama_wide_angle_select",
  "paragliding",
  "park",
  "party_mode",
  "password",
  "pattern",
  "pause",
  "pause_circle",
  "pause_circle_filled",
  "pause_circle_outline",
  "pause_presentation",
  "payment",
  "payments",
  "paypal",
  "pedal_bike",
  "pending",
  "pending_actions",
  "pentagon",
  "people",
  "people_alt",
  "people_outline",
  "percent",
  "perm_camera_mic",
  "perm_contact_cal",
  "perm_contact_calendar",
  "perm_data_setting",
  "perm_device_info",
  "perm_device_information",
  "perm_identity",
  "perm_media",
  "perm_phone_msg",
  "perm_scan_wifi",
  "person",
  "person_2",
  "person_3",
  "person_4",
  "person_add",
  "person_add_alt",
  "person_add_alt_1",
  "person_add_disabled",
  "person_off",
  "person_outline",
  "person_pin",
  "person_pin_circle",
  "person_remove",
  "person_remove_alt_1",
  "person_search",
  "personal_injury",
  "personal_video",
  "pest_control",
  "pest_control_rodent",
  "pets",
  "phishing",
  "phone",
  "phone_android",
  "phone_bluetooth_speaker",
  "phone_callback",
  "phone_disabled",
  "phone_enabled",
  "phone_forwarded",
  "phone_in_talk",
  "phone_iphone",
  "phone_locked",
  "phone_missed",
  "phone_paused",
  "phonelink",
  "phonelink_erase",
  "phonelink_lock",
  "phonelink_off",
  "phonelink_ring",
  "phonelink_setup",
  "photo",
  "photo_album",
  "photo_camera",
  "photo_camera_back",
  "photo_camera_front",
  "photo_filter",
  "photo_library",
  "photo_size_select_actual",
  "photo_size_select_large",
  "photo_size_select_small",
  "php",
  "piano",
  "piano_off",
  "picture_as_pdf",
  "picture_in_picture",
  "picture_in_picture_alt",
  "pie_chart",
  "pie_chart_outline",
  "pie_chart_outlined",
  "pin",
  "pin_drop",
  "pin_end",
  "pin_invoke",
  "pinch",
  "pivot_table_chart",
  "pix",
  "place",
  "plagiarism",
  "play_arrow",
  "play_circle",
  "play_circle_fill",
  "play_circle_filled",
  "play_circle_outline",
  "play_disabled",
  "play_for_work",
  "play_lesson",
  "playlist_add",
  "playlist_add_check",
  "playlist_add_check_circle",
  "playlist_add_circle",
  "playlist_play",
  "playlist_remove",
  "plumbing",
  "plus_one",
  "podcasts",
  "point_of_sale",
  "policy",
  "poll",
  "polyline",
  "polymer",
  "pool",
  "portable_wifi_off",
  "portrait",
  "post_add",
  "power",
  "power_input",
  "power_off",
  "power_settings_new",
  "precision_manufacturing",
  "pregnant_woman",
  "present_to_all",
  "preview",
  "price_change",
  "price_check",
  "print",
  "print_disabled",
  "priority_high",
  "privacy_tip",
  "private_connectivity",
  "production_quantity_limits",
  "propane",
  "propane_tank",
  "psychology",
  "psychology_alt",
  "public",
  "public_off",
  "publish",
  "published_with_changes",
  "punch_clock",
  "push_pin",
  "qr_code",
  "qr_code_2",
  "qr_code_scanner",
  "query_builder",
  "query_stats",
  "question_answer",
  "question_mark",
  "queue",
  "queue_music",
  "queue_play_next",
  "quick_contacts_dialer",
  "quick_contacts_mail",
  "quickreply",
  "quiz",
  "quora",
  "r_mobiledata",
  "radar",
  "radio",
  "radio_button_checked",
  "radio_button_off",
  "radio_button_on",
  "radio_button_unchecked",
  "railway_alert",
  "ramen_dining",
  "ramp_left",
  "ramp_right",
  "rate_review",
  "raw_off",
  "raw_on",
  "read_more",
  "real_estate_agent",
  "rebase_edit",
  "receipt",
  "receipt_long",
  "recent_actors",
  "recommend",
  "record_voice_over",
  "rectangle",
  "recycling",
  "reddit",
  "redeem",
  "redo",
  "reduce_capacity",
  "refresh",
  "remember_me",
  "remove",
  "remove_circle",
  "remove_circle_outline",
  "remove_done",
  "remove_from_queue",
  "remove_moderator",
  "remove_red_eye",
  "remove_road",
  "remove_shopping_cart",
  "reorder",
  "repartition",
  "repeat",
  "repeat_on",
  "repeat_one",
  "repeat_one_on",
  "replay",
  "replay_10",
  "replay_30",
  "replay_5",
  "replay_circle_filled",
  "reply",
  "reply_all",
  "report",
  "report_gmailerrorred",
  "report_off",
  "report_problem",
  "request_page",
  "request_quote",
  "reset_tv",
  "restart_alt",
  "restaurant",
  "restaurant_menu",
  "restore",
  "restore_from_trash",
  "restore_page",
  "reviews",
  "rice_bowl",
  "ring_volume",
  "rocket",
  "rocket_launch",
  "roller_shades",
  "roller_shades_closed",
  "roller_skating",
  "roofing",
  "room",
  "room_preferences",
  "room_service",
  "rotate_90_degrees_ccw",
  "rotate_90_degrees_cw",
  "rotate_left",
  "rotate_right",
  "roundabout_left",
  "roundabout_right",
  "rounded_corner",
  "route",
  "router",
  "rowing",
  "rss_feed",
  "rsvp",
  "rtt",
  "rule",
  "rule_folder",
  "run_circle",
  "running_with_errors",
  "rv_hookup",
  "safety_check",
  "safety_divider",
  "sailing",
  "sanitizer",
  "satellite",
  "satellite_alt",
  "save",
  "save_alt",
  "save_as",
  "saved_search",
  "savings",
  "scale",
  "scanner",
  "scatter_plot",
  "schedule",
  "schedule_send",
  "schema",
  "school",
  "science",
  "score",
  "scoreboard",
  "screen_lock_landscape",
  "screen_lock_portrait",
  "screen_lock_rotation",
  "screen_rotation",
  "screen_rotation_alt",
  "screen_search_desktop",
  "screen_share",
  "screenshot",
  "screenshot_monitor",
  "scuba_diving",
  "sd",
  "sd_card",
  "sd_card_alert",
  "sd_storage",
  "search",
  "search_off",
  "security",
  "security_update",
  "security_update_good",
  "security_update_warning",
  "segment",
  "select_all",
  "self_improvement",
  "sell",
  "send",
  "send_and_archive",
  "send_time_extension",
  "send_to_mobile",
  "sensor_door",
  "sensor_occupied",
  "sensor_window",
  "sensors",
  "sensors_off",
  "sentiment_dissatisfied",
  "sentiment_neutral",
  "sentiment_satisfied",
  "sentiment_satisfied_alt",
  "sentiment_very_dissatisfied",
  "sentiment_very_satisfied",
  "set_meal",
  "settings",
  "settings_accessibility",
  "settings_applications",
  "settings_backup_restore",
  "settings_bluetooth",
  "settings_brightness",
  "settings_cell",
  "settings_display",
  "settings_ethernet",
  "settings_input_antenna",
  "settings_input_component",
  "settings_input_composite",
  "settings_input_hdmi",
  "settings_input_svideo",
  "settings_overscan",
  "settings_phone",
  "settings_power",
  "settings_remote",
  "settings_suggest",
  "settings_system_daydream",
  "settings_voice",
  "severe_cold",
  "shape_line",
  "share",
  "share_arrival_time",
  "share_location",
  "shelves",
  "shield",
  "shield_moon",
  "shop",
  "shop_2",
  "shop_two",
  "shopify",
  "shopping_bag",
  "shopping_basket",
  "shopping_cart",
  "shopping_cart_checkout",
  "short_text",
  "shortcut",
  "show_chart",
  "shower",
  "shuffle",
  "shuffle_on",
  "shutter_speed",
  "sick",
  "sign_language",
  "signal_cellular_0_bar",
  "signal_cellular_4_bar",
  "signal_cellular_alt",
  "signal_cellular_alt_1_bar",
  "signal_cellular_alt_2_bar",
  "signal_cellular_connected_no_internet_0_bar",
  "signal_cellular_connected_no_internet_4_bar",
  "signal_cellular_no_sim",
  "signal_cellular_nodata",
  "signal_cellular_null",
  "signal_cellular_off",
  "signal_wifi_0_bar",
  "signal_wifi_4_bar",
  "signal_wifi_4_bar_lock",
  "signal_wifi_bad",
  "signal_wifi_connected_no_internet_4",
  "signal_wifi_off",
  "signal_wifi_statusbar_4_bar",
  "signal_wifi_statusbar_connected_no_internet_4",
  "signal_wifi_statusbar_null",
  "signpost",
  "sim_card",
  "sim_card_alert",
  "sim_card_download",
  "single_bed",
  "sip",
  "skateboarding",
  "skip_next",
  "skip_previous",
  "sledding",
  "slideshow",
  "slow_motion_video",
  "smart_button",
  "smart_display",
  "smart_screen",
  "smart_toy",
  "smartphone",
  "smoke_free",
  "smoking_rooms",
  "sms",
  "sms_failed",
  "snapchat",
  "snippet_folder",
  "snooze",
  "snowboarding",
  "snowing",
  "snowmobile",
  "snowshoeing",
  "soap",
  "social_distance",
  "solar_power",
  "sort",
  "sort_by_alpha",
  "sos",
  "soup_kitchen",
  "source",
  "south",
  "south_america",
  "south_east",
  "south_west",
  "spa",
  "space_bar",
  "space_dashboard",
  "spatial_audio",
  "spatial_audio_off",
  "spatial_tracking",
  "speaker",
  "speaker_group",
  "speaker_notes",
  "speaker_notes_off",
  "speaker_phone",
  "speed",
  "spellcheck",
  "splitscreen",
  "spoke",
  "sports",
  "sports_bar",
  "sports_baseball",
  "sports_basketball",
  "sports_cricket",
  "sports_esports",
  "sports_football",
  "sports_golf",
  "sports_gymnastics",
  "sports_handball",
  "sports_hockey",
  "sports_kabaddi",
  "sports_martial_arts",
  "sports_mma",
  "sports_motorsports",
  "sports_rugby",
  "sports_score",
  "sports_soccer",
  "sports_tennis",
  "sports_volleyball",
  "square",
  "square_foot",
  "ssid_chart",
  "stacked_bar_chart",
  "stacked_line_chart",
  "stadium",
  "stairs",
  "star",
  "star_border",
  "star_border_purple500",
  "star_half",
  "star_outline",
  "star_purple500",
  "star_rate",
  "stars",
  "start",
  "stay_current_landscape",
  "stay_current_portrait",
  "stay_primary_landscape",
  "stay_primary_portrait",
  "sticky_note_2",
  "stop",
  "stop_circle",
  "stop_screen_share",
  "storage",
  "store",
  "store_mall_directory",
  "storefront",
  "storm",
  "straight",
  "straighten",
  "stream",
  "streetview",
  "strikethrough_s",
  "stroller",
  "style",
  "subdirectory_arrow_left",
  "subdirectory_arrow_right",
  "subject",
  "subscript",
  "subscriptions",
  "subtitles",
  "subtitles_off",
  "subway",
  "summarize",
  "sunny",
  "sunny_snowing",
  "superscript",
  "supervised_user_circle",
  "supervisor_account",
  "support",
  "support_agent",
  "surfing",
  "surround_sound",
  "swap_calls",
  "swap_horiz",
  "swap_horizontal_circle",
  "swap_vert",
  "swap_vert_circle",
  "swap_vertical_circle",
  "swipe",
  "swipe_down",
  "swipe_down_alt",
  "swipe_left",
  "swipe_left_alt",
  "swipe_right",
  "swipe_right_alt",
  "swipe_up",
  "swipe_up_alt",
  "swipe_vertical",
  "switch_access_shortcut",
  "switch_access_shortcut_add",
  "switch_account",
  "switch_camera",
  "switch_left",
  "switch_right",
  "switch_video",
  "synagogue",
  "sync",
  "sync_alt",
  "sync_disabled",
  "sync_lock",
  "sync_problem",
  "system_security_update",
  "system_security_update_good",
  "system_security_update_warning",
  "system_update",
  "system_update_alt",
  "system_update_tv",
  "tab",
  "tab_unselected",
  "table_bar",
  "table_chart",
  "table_restaurant",
  "table_rows",
  "table_view",
  "tablet",
  "tablet_android",
  "tablet_mac",
  "tag",
  "tag_faces",
  "takeout_dining",
  "tap_and_play",
  "tapas",
  "task",
  "task_alt",
  "taxi_alert",
  "telegram",
  "temple_buddhist",
  "temple_hindu",
  "terminal",
  "terrain",
  "text_decrease",
  "text_fields",
  "text_format",
  "text_increase",
  "text_rotate_up",
  "text_rotate_vertical",
  "text_rotation_angledown",
  "text_rotation_angleup",
  "text_rotation_down",
  "text_rotation_none",
  "text_snippet",
  "textsms",
  "texture",
  "theater_comedy",
  "theaters",
  "thermostat",
  "thermostat_auto",
  "thumb_down",
  "thumb_down_alt",
  "thumb_down_off_alt",
  "thumb_up",
  "thumb_up_alt",
  "thumb_up_off_alt",
  "thumbs_up_down",
  "thunderstorm",
  "tiktok",
  "time_to_leave",
  "timelapse",
  "timeline",
  "timer",
  "timer_10",
  "timer_10_select",
  "timer_3",
  "timer_3_select",
  "timer_off",
  "tips_and_updates",
  "tire_repair",
  "title",
  "toc",
  "today",
  "toggle_off",
  "toggle_on",
  "token",
  "toll",
  "tonality",
  "topic",
  "tornado",
  "touch_app",
  "tour",
  "toys",
  "track_changes",
  "traffic",
  "train",
  "tram",
  "transcribe",
  "transfer_within_a_station",
  "transform",
  "transgender",
  "transit_enterexit",
  "translate",
  "travel_explore",
  "trending_down",
  "trending_flat",
  "trending_neutral",
  "trending_up",
  "trip_origin",
  "trolley",
  "troubleshoot",
  "try",
  "tsunami",
  "tty",
  "tune",
  "tungsten",
  "turn_left",
  "turn_right",
  "turn_sharp_left",
  "turn_sharp_right",
  "turn_slight_left",
  "turn_slight_right",
  "turned_in",
  "turned_in_not",
  "tv",
  "tv_off",
  "two_wheeler",
  "type_specimen",
  "u_turn_left",
  "u_turn_right",
  "umbrella",
  "unarchive",
  "undo",
  "unfold_less",
  "unfold_less_double",
  "unfold_more",
  "unfold_more_double",
  "unpublished",
  "unsubscribe",
  "upcoming",
  "update",
  "update_disabled",
  "upgrade",
  "upload",
  "upload_file",
  "usb",
  "usb_off",
  "vaccines",
  "vape_free",
  "vaping_rooms",
  "verified",
  "verified_user",
  "vertical_align_bottom",
  "vertical_align_center",
  "vertical_align_top",
  "vertical_distribute",
  "vertical_shades",
  "vertical_shades_closed",
  "vertical_split",
  "vibration",
  "video_call",
  "video_camera_back",
  "video_camera_front",
  "video_chat",
  "video_collection",
  "video_file",
  "video_label",
  "video_library",
  "video_settings",
  "video_stable",
  "videocam",
  "videocam_off",
  "videogame_asset",
  "videogame_asset_off",
  "view_agenda",
  "view_array",
  "view_carousel",
  "view_column",
  "view_comfortable",
  "view_comfy",
  "view_comfy_alt",
  "view_compact",
  "view_compact_alt",
  "view_cozy",
  "view_day",
  "view_headline",
  "view_in_ar",
  "view_kanban",
  "view_list",
  "view_module",
  "view_quilt",
  "view_sidebar",
  "view_stream",
  "view_timeline",
  "view_week",
  "vignette",
  "villa",
  "visibility",
  "visibility_off",
  "voice_chat",
  "voice_over_off",
  "voicemail",
  "volcano",
  "volume_down",
  "volume_down_alt",
  "volume_mute",
  "volume_off",
  "volume_up",
  "volunteer_activism",
  "vpn_key",
  "vpn_key_off",
  "vpn_lock",
  "vrpano",
  "wallet",
  "wallet_giftcard",
  "wallet_membership",
  "wallet_travel",
  "wallpaper",
  "warehouse",
  "warning",
  "warning_amber",
  "wash",
  "watch",
  "watch_later",
  "watch_off",
  "water",
  "water_damage",
  "water_drop",
  "waterfall_chart",
  "waves",
  "waving_hand",
  "wb_auto",
  "wb_cloudy",
  "wb_incandescent",
  "wb_iridescent",
  "wb_shade",
  "wb_sunny",
  "wb_twighlight",
  "wb_twilight",
  "wc",
  "web",
  "web_asset",
  "web_asset_off",
  "web_stories",
  "webhook",
  "wechat",
  "weekend",
  "west",
  "whatshot",
  "wheelchair_pickup",
  "where_to_vote",
  "widgets",
  "width_full",
  "width_normal",
  "width_wide",
  "wifi",
  "wifi_1_bar",
  "wifi_2_bar",
  "wifi_calling",
  "wifi_calling_3",
  "wifi_channel",
  "wifi_find",
  "wifi_lock",
  "wifi_off",
  "wifi_password",
  "wifi_protected_setup",
  "wifi_tethering",
  "wifi_tethering_error",
  "wifi_tethering_error_rounded",
  "wifi_tethering_off",
  "wind_power",
  "window",
  "wine_bar",
  "woman",
  "woman_2",
  "woo_commerce",
  "wordpress",
  "work",
  "work_history",
  "work_off",
  "work_outline",
  "workspace_premium",
  "workspaces",
  "workspaces_filled",
  "workspaces_outline",
  "wrap_text",
  "wrong_location",
  "wysiwyg",
  "yard",
  "youtube_searched_for",
  "zoom_in",
  "zoom_in_map",
  "zoom_out",
  "zoom_out_map",
];

const gradedIconList = [
    {
        "id": 0,
        "name": "10k",
        "difficulty": 0
    },
    {
        "id": 1,
        "name": "10mp",
        "difficulty": 0
    },
    {
        "id": 2,
        "name": "11mp",
        "difficulty": 0
    },
    {
        "id": 3,
        "name": "123",
        "difficulty": 0
    },
    {
        "id": 4,
        "name": "12mp",
        "difficulty": 0
    },
    {
        "id": 5,
        "name": "13mp",
        "difficulty": 0
    },
    {
        "id": 6,
        "name": "14mp",
        "difficulty": 0
    },
    {
        "id": 7,
        "name": "15mp",
        "difficulty": 0
    },
    {
        "id": 8,
        "name": "16mp",
        "difficulty": 0
    },
    {
        "id": 9,
        "name": "17mp",
        "difficulty": 0
    },
    {
        "id": 10,
        "name": "18_up_rating",
        "difficulty": 1
    },
    {
        "id": 11,
        "name": "18mp",
        "difficulty": 0
    },
    {
        "id": 12,
        "name": "19mp",
        "difficulty": 0
    },
    {
        "id": 13,
        "name": "1k",
        "difficulty": 0
    },
    {
        "id": 14,
        "name": "1k_plus",
        "difficulty": 0
    },
    {
        "id": 15,
        "name": "1x_mobiledata",
        "difficulty": 1
    },
    {
        "id": 16,
        "name": "20mp",
        "difficulty": 0
    },
    {
        "id": 17,
        "name": "21mp",
        "difficulty": 0
    },
    {
        "id": 18,
        "name": "22mp",
        "difficulty": 0
    },
    {
        "id": 19,
        "name": "23mp",
        "difficulty": 0
    },
    {
        "id": 20,
        "name": "24mp",
        "difficulty": 0
    },
    {
        "id": 21,
        "name": "2k",
        "difficulty": 0
    },
    {
        "id": 22,
        "name": "2k_plus",
        "difficulty": 0
    },
    {
        "id": 23,
        "name": "2mp",
        "difficulty": 0
    },
    {
        "id": 24,
        "name": "30fps",
        "difficulty": 1
    },
    {
        "id": 25,
        "name": "30fps_select",
        "difficulty": 2
    },
    {
        "id": 26,
        "name": "360",
        "difficulty": 3
    },
    {
        "id": 27,
        "name": "3d_rotation",
        "difficulty": 1
    },
    {
        "id": 28,
        "name": "3g_mobiledata",
        "difficulty": 1
    },
    {
        "id": 29,
        "name": "3k",
        "difficulty": 0
    },
    {
        "id": 30,
        "name": "3k_plus",
        "difficulty": 0
    },
    {
        "id": 31,
        "name": "3mp",
        "difficulty": 0
    },
    {
        "id": 32,
        "name": "3p",
        "difficulty": 9
    },
    {
        "id": 33,
        "name": "4g_mobiledata",
        "difficulty": 1
    },
    {
        "id": 34,
        "name": "4g_plus_mobiledata",
        "difficulty": 1
    },
    {
        "id": 35,
        "name": "4k",
        "difficulty": 0
    },
    {
        "id": 36,
        "name": "4k_plus",
        "difficulty": 0
    },
    {
        "id": 37,
        "name": "4mp",
        "difficulty": 0
    },
    {
        "id": 38,
        "name": "5g",
        "difficulty": 0
    },
    {
        "id": 39,
        "name": "5k",
        "difficulty": 0
    },
    {
        "id": 40,
        "name": "5k_plus",
        "difficulty": 0
    },
    {
        "id": 41,
        "name": "5mp",
        "difficulty": 0
    },
    {
        "id": 42,
        "name": "60fps",
        "difficulty": 1
    },
    {
        "id": 43,
        "name": "60fps_select",
        "difficulty": 2
    },
    {
        "id": 44,
        "name": "6_ft_apart",
        "difficulty": 0
    },
    {
        "id": 45,
        "name": "6k",
        "difficulty": 0
    },
    {
        "id": 46,
        "name": "6k_plus",
        "difficulty": 0
    },
    {
        "id": 47,
        "name": "6mp",
        "difficulty": 0
    },
    {
        "id": 48,
        "name": "7k",
        "difficulty": 0
    },
    {
        "id": 49,
        "name": "7k_plus",
        "difficulty": 0
    },
    {
        "id": 50,
        "name": "7mp",
        "difficulty": 0
    },
    {
        "id": 51,
        "name": "8k",
        "difficulty": 0
    },
    {
        "id": 52,
        "name": "8k_plus",
        "difficulty": 0
    },
    {
        "id": 53,
        "name": "8mp",
        "difficulty": 0
    },
    {
        "id": 54,
        "name": "9k",
        "difficulty": 0
    },
    {
        "id": 55,
        "name": "9k_plus",
        "difficulty": 0
    },
    {
        "id": 56,
        "name": "9mp",
        "difficulty": 0
    },
    {
        "id": 57,
        "name": "abc",
        "difficulty": 0
    },
    {
        "id": 58,
        "name": "ac_unit",
        "difficulty": 6
    },
    {
        "id": 59,
        "name": "access_alarm",
        "difficulty": 4
    },
    {
        "id": 60,
        "name": "access_alarms",
        "difficulty": 4
    },
    {
        "id": 61,
        "name": "access_time",
        "difficulty": 3
    },
    {
        "id": 62,
        "name": "access_time_filled",
        "difficulty": 3
    },
    {
        "id": 63,
        "name": "accessibility",
        "difficulty": 3
    },
    {
        "id": 64,
        "name": "accessibility_new",
        "difficulty": 3
    },
    {
        "id": 65,
        "name": "accessible",
        "difficulty": 3
    },
    {
        "id": 66,
        "name": "accessible_forward",
        "difficulty": 3
    },
    {
        "id": 67,
        "name": "account_balance",
        "difficulty": 6
    },
    {
        "id": 68,
        "name": "account_balance_wallet",
        "difficulty": 7
    },
    {
        "id": 69,
        "name": "account_box",
        "difficulty": 3
    },
    {
        "id": 70,
        "name": "account_circle",
        "difficulty": 2
    },
    {
        "id": 71,
        "name": "account_tree",
        "difficulty": 6
    },
    {
        "id": 72,
        "name": "ad_units",
        "difficulty": 5
    },
    {
        "id": 73,
        "name": "adb",
        "difficulty": 8
    },
    {
        "id": 74,
        "name": "add",
        "difficulty": 1
    },
    {
        "id": 75,
        "name": "add_a_photo",
        "difficulty": 1
    },
    {
        "id": 76,
        "name": "add_alarm",
        "difficulty": 1
    },
    {
        "id": 77,
        "name": "add_alert",
        "difficulty": 1
    },
    {
        "id": 78,
        "name": "add_box",
        "difficulty": 1
    },
    {
        "id": 79,
        "name": "add_business",
        "difficulty": 3
    },
    {
        "id": 80,
        "name": "add_call",
        "difficulty": 1
    },
    {
        "id": 81,
        "name": "add_card",
        "difficulty": 1
    },
    {
        "id": 82,
        "name": "add_chart",
        "difficulty": 2
    },
    {
        "id": 83,
        "name": "add_circle",
        "difficulty": 1
    },
    {
        "id": 84,
        "name": "add_circle_outline",
        "difficulty": 1
    },
    {
        "id": 85,
        "name": "add_comment",
        "difficulty": 1
    },
    {
        "id": 86,
        "name": "add_home",
        "difficulty": 1
    },
    {
        "id": 87,
        "name": "add_home_work",
        "difficulty": 3
    },
    {
        "id": 88,
        "name": "add_ic_call",
        "difficulty": 2
    },
    {
        "id": 89,
        "name": "add_link",
        "difficulty": 1
    },
    {
        "id": 90,
        "name": "add_location",
        "difficulty": 1
    },
    {
        "id": 91,
        "name": "add_location_alt",
        "difficulty": 1
    },
    {
        "id": 92,
        "name": "add_moderator",
        "difficulty": 2
    },
    {
        "id": 93,
        "name": "add_photo_alternate",
        "difficulty": 1
    },
    {
        "id": 94,
        "name": "add_reaction",
        "difficulty": 2
    },
    {
        "id": 95,
        "name": "add_road",
        "difficulty": 4
    },
    {
        "id": 96,
        "name": "add_shopping_cart",
        "difficulty": 1
    },
    {
        "id": 97,
        "name": "add_task",
        "difficulty": 2
    },
    {
        "id": 98,
        "name": "add_to_drive",
        "difficulty": 2
    },
    {
        "id": 99,
        "name": "add_to_home_screen",
        "difficulty": 4
    },
    {
        "id": 100,
        "name": "add_to_photos",
        "difficulty": 4
    },
    {
        "id": 101,
        "name": "add_to_queue",
        "difficulty": 5
    },
    {
        "id": 102,
        "name": "addchart",
        "difficulty": 2
    },
    {
        "id": 103,
        "name": "adf_scanner",
        "difficulty": 2
    },
    {
        "id": 104,
        "name": "adjust",
        "difficulty": 8
    },
    {
        "id": 105,
        "name": "admin_panel_settings",
        "difficulty": 6
    },
    {
        "id": 106,
        "name": "adobe",
        "difficulty": 1
    },
    {
        "id": 107,
        "name": "ads_click",
        "difficulty": 2
    },
    {
        "id": 108,
        "name": "agriculture",
        "difficulty": 2
    },
    {
        "id": 109,
        "name": "air",
        "difficulty": 2
    },
    {
        "id": 110,
        "name": "airline_seat_flat",
        "difficulty": 4
    },
    {
        "id": 111,
        "name": "airline_seat_flat_angled",
        "difficulty": 4
    },
    {
        "id": 112,
        "name": "airline_seat_individual_suite",
        "difficulty": 5
    },
    {
        "id": 113,
        "name": "airline_seat_legroom_extra",
        "difficulty": 3
    },
    {
        "id": 114,
        "name": "airline_seat_legroom_normal",
        "difficulty": 2
    },
    {
        "id": 115,
        "name": "airline_seat_legroom_reduced",
        "difficulty": 2
    },
    {
        "id": 116,
        "name": "airline_seat_recline_extra",
        "difficulty": 3
    },
    {
        "id": 117,
        "name": "airline_seat_recline_normal",
        "difficulty": 2
    },
    {
        "id": 118,
        "name": "airline_stops",
        "difficulty": 7
    },
    {
        "id": 119,
        "name": "airlines",
        "difficulty": 2
    },
    {
        "id": 120,
        "name": "airplane_ticket",
        "difficulty": 1
    },
    {
        "id": 121,
        "name": "airplanemode_active",
        "difficulty": 1
    },
    {
        "id": 122,
        "name": "airplanemode_inactive",
        "difficulty": 1
    },
    {
        "id": 123,
        "name": "airplanemode_off",
        "difficulty": 1
    },
    {
        "id": 124,
        "name": "airplanemode_on",
        "difficulty": 1
    },
    {
        "id": 125,
        "name": "airplay",
        "difficulty": 3
    },
    {
        "id": 126,
        "name": "airport_shuttle",
        "difficulty": 5
    },
    {
        "id": 127,
        "name": "alarm",
        "difficulty": 1
    },
    {
        "id": 128,
        "name": "alarm_add",
        "difficulty": 1
    },
    {
        "id": 129,
        "name": "alarm_off",
        "difficulty": 1
    },
    {
        "id": 130,
        "name": "alarm_on",
        "difficulty": 1
    },
    {
        "id": 131,
        "name": "album",
        "difficulty": 5
    },
    {
        "id": 132,
        "name": "align_horizontal_center",
        "difficulty": 4
    },
    {
        "id": 133,
        "name": "align_horizontal_left",
        "difficulty": 3
    },
    {
        "id": 134,
        "name": "align_horizontal_right",
        "difficulty": 3
    },
    {
        "id": 135,
        "name": "align_vertical_bottom",
        "difficulty": 3
    },
    {
        "id": 136,
        "name": "align_vertical_center",
        "difficulty": 4
    },
    {
        "id": 137,
        "name": "align_vertical_top",
        "difficulty": 3
    },
    {
        "id": 138,
        "name": "all_inbox",
        "difficulty": 2
    },
    {
        "id": 139,
        "name": "all_inclusive",
        "difficulty": 7
    },
    {
        "id": 140,
        "name": "all_out",
        "difficulty": 7
    },
    {
        "id": 141,
        "name": "alt_route",
        "difficulty": 2
    },
    {
        "id": 142,
        "name": "alternate_email",
        "difficulty": 5
    },
    {
        "id": 143,
        "name": "amp_stories",
        "difficulty": 8
    },
    {
        "id": 144,
        "name": "analytics",
        "difficulty": 3
    },
    {
        "id": 145,
        "name": "anchor",
        "difficulty": 1
    },
    {
        "id": 146,
        "name": "android",
        "difficulty": 1
    },
    {
        "id": 147,
        "name": "animation",
        "difficulty": 2
    },
    {
        "id": 148,
        "name": "announcement",
        "difficulty": 3
    },
    {
        "id": 149,
        "name": "aod",
        "difficulty": 7
    },
    {
        "id": 150,
        "name": "apartment",
        "difficulty": 2
    },
    {
        "id": 151,
        "name": "api",
        "difficulty": 9
    },
    {
        "id": 152,
        "name": "app_blocking",
        "difficulty": 2
    },
    {
        "id": 153,
        "name": "app_registration",
        "difficulty": 3
    },
    {
        "id": 154,
        "name": "app_settings_alt",
        "difficulty": 2
    },
    {
        "id": 155,
        "name": "app_shortcut",
        "difficulty": 4
    },
    {
        "id": 156,
        "name": "apple",
        "difficulty": 1
    },
    {
        "id": 157,
        "name": "approval",
        "difficulty": 8
    },
    {
        "id": 158,
        "name": "apps",
        "difficulty": 2
    },
    {
        "id": 159,
        "name": "apps_outage",
        "difficulty": 2
    },
    {
        "id": 160,
        "name": "architecture",
        "difficulty": 4
    },
    {
        "id": 161,
        "name": "archive",
        "difficulty": 3
    },
    {
        "id": 162,
        "name": "area_chart",
        "difficulty": 2
    },
    {
        "id": 163,
        "name": "arrow_back",
        "difficulty": 1
    },
    {
        "id": 164,
        "name": "arrow_back_ios",
        "difficulty": 2
    },
    {
        "id": 165,
        "name": "arrow_back_ios_new",
        "difficulty": 2
    },
    {
        "id": 166,
        "name": "arrow_circle_down",
        "difficulty": 1
    },
    {
        "id": 167,
        "name": "arrow_circle_left",
        "difficulty": 1
    },
    {
        "id": 168,
        "name": "arrow_circle_right",
        "difficulty": 1
    },
    {
        "id": 169,
        "name": "arrow_circle_up",
        "difficulty": 1
    },
    {
        "id": 170,
        "name": "arrow_downward",
        "difficulty": 2
    },
    {
        "id": 171,
        "name": "arrow_drop_down",
        "difficulty": 3
    },
    {
        "id": 172,
        "name": "arrow_drop_down_circle",
        "difficulty": 2
    },
    {
        "id": 173,
        "name": "arrow_drop_up",
        "difficulty": 3
    },
    {
        "id": 174,
        "name": "arrow_forward",
        "difficulty": 1
    },
    {
        "id": 175,
        "name": "arrow_forward_ios",
        "difficulty": 2
    },
    {
        "id": 176,
        "name": "arrow_left",
        "difficulty": 2
    },
    {
        "id": 177,
        "name": "arrow_outward",
        "difficulty": 2
    },
    {
        "id": 178,
        "name": "arrow_right",
        "difficulty": 2
    },
    {
        "id": 179,
        "name": "arrow_right_alt",
        "difficulty": 1
    },
    {
        "id": 180,
        "name": "arrow_upward",
        "difficulty": 1
    },
    {
        "id": 181,
        "name": "art_track",
        "difficulty": 5
    },
    {
        "id": 182,
        "name": "article",
        "difficulty": 3
    },
    {
        "id": 183,
        "name": "aspect_ratio",
        "difficulty": 3
    },
    {
        "id": 184,
        "name": "assessment",
        "difficulty": 4
    },
    {
        "id": 185,
        "name": "assignment",
        "difficulty": 3
    },
    {
        "id": 186,
        "name": "assignment_add",
        "difficulty": 2
    },
    {
        "id": 187,
        "name": "assignment_ind",
        "difficulty": 3
    },
    {
        "id": 188,
        "name": "assignment_late",
        "difficulty": 3
    },
    {
        "id": 189,
        "name": "assignment_return",
        "difficulty": 3
    },
    {
        "id": 190,
        "name": "assignment_returned",
        "difficulty": 3
    },
    {
        "id": 191,
        "name": "assignment_turned_in",
        "difficulty": 3
    },
    {
        "id": 192,
        "name": "assist_walker",
        "difficulty": 3
    },
    {
        "id": 193,
        "name": "assistant",
        "difficulty": 5
    },
    {
        "id": 194,
        "name": "assistant_direction",
        "difficulty": 3
    },
    {
        "id": 195,
        "name": "assistant_navigation",
        "difficulty": 4
    },
    {
        "id": 196,
        "name": "assistant_photo",
        "difficulty": 9
    },
    {
        "id": 197,
        "name": "assured_workload",
        "difficulty": 8
    },
    {
        "id": 198,
        "name": "atm",
        "difficulty": 0
    },
    {
        "id": 199,
        "name": "attach_email",
        "difficulty": 1
    },
    {
        "id": 200,
        "name": "attach_file",
        "difficulty": 2
    },
    {
        "id": 201,
        "name": "attach_money",
        "difficulty": 2
    },
    {
        "id": 202,
        "name": "attachment",
        "difficulty": 1
    },
    {
        "id": 203,
        "name": "attractions",
        "difficulty": 2
    },
    {
        "id": 204,
        "name": "attribution",
        "difficulty": 6
    },
    {
        "id": 205,
        "name": "audio_file",
        "difficulty": 1
    },
    {
        "id": 206,
        "name": "audiotrack",
        "difficulty": 2
    },
    {
        "id": 207,
        "name": "auto_awesome",
        "difficulty": 7
    },
    {
        "id": 208,
        "name": "auto_awesome_mosaic",
        "difficulty": 6
    },
    {
        "id": 209,
        "name": "auto_awesome_motion",
        "difficulty": 7
    },
    {
        "id": 210,
        "name": "auto_delete",
        "difficulty": 4
    },
    {
        "id": 211,
        "name": "auto_fix_high",
        "difficulty": 3
    },
    {
        "id": 212,
        "name": "auto_fix_normal",
        "difficulty": 3
    },
    {
        "id": 213,
        "name": "auto_fix_off",
        "difficulty": 4
    },
    {
        "id": 214,
        "name": "auto_graph",
        "difficulty": 2
    },
    {
        "id": 215,
        "name": "auto_mode",
        "difficulty": 4
    },
    {
        "id": 216,
        "name": "auto_stories",
        "difficulty": 3
    },
    {
        "id": 217,
        "name": "autofps_select",
        "difficulty": 3
    },
    {
        "id": 218,
        "name": "autorenew",
        "difficulty": 2
    },
    {
        "id": 219,
        "name": "av_timer",
        "difficulty": 2
    },
    {
        "id": 220,
        "name": "baby_changing_station",
        "difficulty": 1
    },
    {
        "id": 221,
        "name": "back_hand",
        "difficulty": 1
    },
    {
        "id": 222,
        "name": "backpack",
        "difficulty": 2
    },
    {
        "id": 223,
        "name": "backspace",
        "difficulty": 1
    },
    {
        "id": 224,
        "name": "backup",
        "difficulty": 2
    },
    {
        "id": 225,
        "name": "backup_table",
        "difficulty": 2
    },
    {
        "id": 226,
        "name": "badge",
        "difficulty": 2
    },
    {
        "id": 227,
        "name": "bakery_dining",
        "difficulty": 2
    },
    {
        "id": 228,
        "name": "balance",
        "difficulty": 1
    },
    {
        "id": 229,
        "name": "balcony",
        "difficulty": 2
    },
    {
        "id": 230,
        "name": "ballot",
        "difficulty": 3
    },
    {
        "id": 231,
        "name": "bar_chart",
        "difficulty": 1
    },
    {
        "id": 232,
        "name": "barcode_reader",
        "difficulty": 2
    },
    {
        "id": 233,
        "name": "batch_prediction",
        "difficulty": 3
    },
    {
        "id": 234,
        "name": "bathroom",
        "difficulty": 3
    },
    {
        "id": 235,
        "name": "bathtub",
        "difficulty": 1
    },
    {
        "id": 236,
        "name": "battery_0_bar",
        "difficulty": 2
    },
    {
        "id": 237,
        "name": "battery_1_bar",
        "difficulty": 1
    },
    {
        "id": 238,
        "name": "battery_2_bar",
        "difficulty": 1
    },
    {
        "id": 239,
        "name": "battery_3_bar",
        "difficulty": 1
    },
    {
        "id": 240,
        "name": "battery_4_bar",
        "difficulty": 1
    },
    {
        "id": 241,
        "name": "battery_5_bar",
        "difficulty": 1
    },
    {
        "id": 242,
        "name": "battery_6_bar",
        "difficulty": 1
    },
    {
        "id": 243,
        "name": "battery_alert",
        "difficulty": 1
    },
    {
        "id": 244,
        "name": "battery_charging_full",
        "difficulty": 1
    },
    {
        "id": 245,
        "name": "battery_full",
        "difficulty": 1
    },
    {
        "id": 246,
        "name": "battery_saver",
        "difficulty": 1
    },
    {
        "id": 247,
        "name": "battery_std",
        "difficulty": 1
    },
    {
        "id": 248,
        "name": "battery_unknown",
        "difficulty": 1
    },
    {
        "id": 249,
        "name": "beach_access",
        "difficulty": 2
    },
    {
        "id": 250,
        "name": "bed",
        "difficulty": 2
    },
    {
        "id": 251,
        "name": "bedroom_baby",
        "difficulty": 4
    },
    {
        "id": 252,
        "name": "bedroom_child",
        "difficulty": 4
    },
    {
        "id": 253,
        "name": "bedroom_parent",
        "difficulty": 4
    },
    {
        "id": 254,
        "name": "bedtime",
        "difficulty": 3
    },
    {
        "id": 255,
        "name": "bedtime_off",
        "difficulty": 3
    },
    {
        "id": 256,
        "name": "beenhere",
        "difficulty": 5
    },
    {
        "id": 257,
        "name": "bento",
        "difficulty": 5
    },
    {
        "id": 258,
        "name": "bike_scooter",
        "difficulty": 3
    },
    {
        "id": 259,
        "name": "biotech",
        "difficulty": 3
    },
    {
        "id": 260,
        "name": "blender",
        "difficulty": 2
    },
    {
        "id": 261,
        "name": "blind",
        "difficulty": 1
    },
    {
        "id": 262,
        "name": "blinds",
        "difficulty": 1
    },
    {
        "id": 263,
        "name": "blinds_closed",
        "difficulty": 1
    },
    {
        "id": 264,
        "name": "block",
        "difficulty": 2
    },
    {
        "id": 265,
        "name": "block_flipped",
        "difficulty": 2
    },
    {
        "id": 266,
        "name": "bloodtype",
        "difficulty": 2
    },
    {
        "id": 267,
        "name": "bluetooth",
        "difficulty": 0
    },
    {
        "id": 268,
        "name": "bluetooth_audio",
        "difficulty": 1
    },
    {
        "id": 269,
        "name": "bluetooth_connected",
        "difficulty": 2
    },
    {
        "id": 270,
        "name": "bluetooth_disabled",
        "difficulty": 1
    },
    {
        "id": 271,
        "name": "bluetooth_drive",
        "difficulty": 1
    },
    {
        "id": 272,
        "name": "bluetooth_searching",
        "difficulty": 1
    },
    {
        "id": 273,
        "name": "blur_circular",
        "difficulty": 4
    },
    {
        "id": 274,
        "name": "blur_linear",
        "difficulty": 4
    },
    {
        "id": 275,
        "name": "blur_off",
        "difficulty": 4
    },
    {
        "id": 276,
        "name": "blur_on",
        "difficulty": 4
    },
    {
        "id": 277,
        "name": "bolt",
        "difficulty": 2
    },
    {
        "id": 278,
        "name": "book",
        "difficulty": 4
    },
    {
        "id": 279,
        "name": "book_online",
        "difficulty": 5
    },
    {
        "id": 280,
        "name": "bookmark",
        "difficulty": 1
    },
    {
        "id": 281,
        "name": "bookmark_add",
        "difficulty": 1
    },
    {
        "id": 282,
        "name": "bookmark_added",
        "difficulty": 1
    },
    {
        "id": 283,
        "name": "bookmark_border",
        "difficulty": 1
    },
    {
        "id": 284,
        "name": "bookmark_outline",
        "difficulty": 1
    },
    {
        "id": 285,
        "name": "bookmark_remove",
        "difficulty": 1
    },
    {
        "id": 286,
        "name": "bookmarks",
        "difficulty": 1
    },
    {
        "id": 287,
        "name": "border_all",
        "difficulty": 4
    },
    {
        "id": 288,
        "name": "border_bottom",
        "difficulty": 3
    },
    {
        "id": 289,
        "name": "border_clear",
        "difficulty": 5
    },
    {
        "id": 290,
        "name": "border_color",
        "difficulty": 6
    },
    {
        "id": 291,
        "name": "border_horizontal",
        "difficulty": 4
    },
    {
        "id": 292,
        "name": "border_inner",
        "difficulty": 4
    },
    {
        "id": 293,
        "name": "border_left",
        "difficulty": 4
    },
    {
        "id": 294,
        "name": "border_outer",
        "difficulty": 5
    },
    {
        "id": 295,
        "name": "border_right",
        "difficulty": 4
    },
    {
        "id": 296,
        "name": "border_style",
        "difficulty": 4
    },
    {
        "id": 297,
        "name": "border_top",
        "difficulty": 4
    },
    {
        "id": 298,
        "name": "border_vertical",
        "difficulty": 4
    },
    {
        "id": 299,
        "name": "boy",
        "difficulty": 1
    },
    {
        "id": 300,
        "name": "branding_watermark",
        "difficulty": 3
    },
    {
        "id": 301,
        "name": "breakfast_dining",
        "difficulty": 6
    },
    {
        "id": 302,
        "name": "brightness_1",
        "difficulty": 7
    },
    {
        "id": 303,
        "name": "brightness_2",
        "difficulty": 6
    },
    {
        "id": 304,
        "name": "brightness_3",
        "difficulty": 6
    },
    {
        "id": 305,
        "name": "brightness_4",
        "difficulty": 4
    },
    {
        "id": 306,
        "name": "brightness_5",
        "difficulty": 4
    },
    {
        "id": 307,
        "name": "brightness_6",
        "difficulty": 4
    },
    {
        "id": 308,
        "name": "brightness_7",
        "difficulty": 4
    },
    {
        "id": 309,
        "name": "brightness_auto",
        "difficulty": 4
    },
    {
        "id": 310,
        "name": "brightness_high",
        "difficulty": 5
    },
    {
        "id": 311,
        "name": "brightness_low",
        "difficulty": 4
    },
    {
        "id": 312,
        "name": "brightness_medium",
        "difficulty": 4
    },
    {
        "id": 313,
        "name": "broadcast_on_home",
        "difficulty": 5
    },
    {
        "id": 314,
        "name": "broadcast_on_personal",
        "difficulty": 5
    },
    {
        "id": 315,
        "name": "broken_image",
        "difficulty": 4
    },
    {
        "id": 316,
        "name": "browse_gallery",
        "difficulty": 7
    },
    {
        "id": 317,
        "name": "browser_not_supported",
        "difficulty": 6
    },
    {
        "id": 318,
        "name": "browser_updated",
        "difficulty": 5
    },
    {
        "id": 319,
        "name": "brunch_dining",
        "difficulty": 4
    },
    {
        "id": 320,
        "name": "brush",
        "difficulty": 1
    },
    {
        "id": 321,
        "name": "bubble_chart",
        "difficulty": 2
    },
    {
        "id": 322,
        "name": "bug_report",
        "difficulty": 2
    },
    {
        "id": 323,
        "name": "build",
        "difficulty": 2
    },
    {
        "id": 324,
        "name": "build_circle",
        "difficulty": 2
    },
    {
        "id": 325,
        "name": "bungalow",
        "difficulty": 3
    },
    {
        "id": 326,
        "name": "burst_mode",
        "difficulty": 3
    },
    {
        "id": 327,
        "name": "bus_alert",
        "difficulty": 2
    },
    {
        "id": 328,
        "name": "business",
        "difficulty": 4
    },
    {
        "id": 329,
        "name": "business_center",
        "difficulty": 4
    },
    {
        "id": 330,
        "name": "cabin",
        "difficulty": 3
    },
    {
        "id": 331,
        "name": "cable",
        "difficulty": 1
    },
    {
        "id": 332,
        "name": "cached",
        "difficulty": 3
    },
    {
        "id": 333,
        "name": "cake",
        "difficulty": 1
    },
    {
        "id": 334,
        "name": "calculate",
        "difficulty": 2
    },
    {
        "id": 335,
        "name": "calendar_month",
        "difficulty": 2
    },
    {
        "id": 336,
        "name": "calendar_today",
        "difficulty": 2
    },
    {
        "id": 337,
        "name": "calendar_view_day",
        "difficulty": 7
    },
    {
        "id": 338,
        "name": "calendar_view_month",
        "difficulty": 6
    },
    {
        "id": 339,
        "name": "calendar_view_week",
        "difficulty": 6
    },
    {
        "id": 340,
        "name": "call",
        "difficulty": 1
    },
    {
        "id": 341,
        "name": "call_end",
        "difficulty": 1
    },
    {
        "id": 342,
        "name": "call_made",
        "difficulty": 8
    },
    {
        "id": 343,
        "name": "call_merge",
        "difficulty": 7
    },
    {
        "id": 344,
        "name": "call_missed",
        "difficulty": 8
    },
    {
        "id": 345,
        "name": "call_missed_outgoing",
        "difficulty": 8
    },
    {
        "id": 346,
        "name": "call_received",
        "difficulty": 8
    },
    {
        "id": 347,
        "name": "call_split",
        "difficulty": 7
    },
    {
        "id": 348,
        "name": "call_to_action",
        "difficulty": 9
    },
    {
        "id": 349,
        "name": "camera",
        "difficulty": 2
    },
    {
        "id": 350,
        "name": "camera_alt",
        "difficulty": 1
    },
    {
        "id": 351,
        "name": "camera_enhance",
        "difficulty": 1
    },
    {
        "id": 352,
        "name": "camera_front",
        "difficulty": 3
    },
    {
        "id": 353,
        "name": "camera_indoor",
        "difficulty": 2
    },
    {
        "id": 354,
        "name": "camera_outdoor",
        "difficulty": 3
    },
    {
        "id": 355,
        "name": "camera_rear",
        "difficulty": 2
    },
    {
        "id": 356,
        "name": "camera_roll",
        "difficulty": 2
    },
    {
        "id": 357,
        "name": "cameraswitch",
        "difficulty": 1
    },
    {
        "id": 358,
        "name": "campaign",
        "difficulty": 5
    },
    {
        "id": 359,
        "name": "cancel",
        "difficulty": 2
    },
    {
        "id": 360,
        "name": "cancel_presentation",
        "difficulty": 3
    },
    {
        "id": 361,
        "name": "cancel_schedule_send",
        "difficulty": 2
    },
    {
        "id": 362,
        "name": "candlestick_chart",
        "difficulty": 4
    },
    {
        "id": 363,
        "name": "car_crash",
        "difficulty": 3
    },
    {
        "id": 364,
        "name": "car_rental",
        "difficulty": 3
    },
    {
        "id": 365,
        "name": "car_repair",
        "difficulty": 3
    },
    {
        "id": 366,
        "name": "card_giftcard",
        "difficulty": 3
    },
    {
        "id": 367,
        "name": "card_membership",
        "difficulty": 4
    },
    {
        "id": 368,
        "name": "card_travel",
        "difficulty": 5
    },
    {
        "id": 369,
        "name": "carpenter",
        "difficulty": 4
    },
    {
        "id": 370,
        "name": "cases",
        "difficulty": 3
    },
    {
        "id": 371,
        "name": "casino",
        "difficulty": 4
    },
    {
        "id": 372,
        "name": "cast",
        "difficulty": 2
    },
    {
        "id": 373,
        "name": "cast_connected",
        "difficulty": 2
    },
    {
        "id": 374,
        "name": "cast_for_education",
        "difficulty": 2
    },
    {
        "id": 375,
        "name": "castle",
        "difficulty": 1
    },
    {
        "id": 376,
        "name": "catching_pokemon",
        "difficulty": 2
    },
    {
        "id": 377,
        "name": "category",
        "difficulty": 4
    },
    {
        "id": 378,
        "name": "celebration",
        "difficulty": 2
    },
    {
        "id": 379,
        "name": "cell_tower",
        "difficulty": 2
    },
    {
        "id": 380,
        "name": "cell_wifi",
        "difficulty": 2
    },
    {
        "id": 381,
        "name": "center_focus_strong",
        "difficulty": 3
    },
    {
        "id": 382,
        "name": "center_focus_weak",
        "difficulty": 4
    },
    {
        "id": 383,
        "name": "chair",
        "difficulty": 2
    },
    {
        "id": 384,
        "name": "chair_alt",
        "difficulty": 3
    },
    {
        "id": 385,
        "name": "chalet",
        "difficulty": 3
    },
    {
        "id": 386,
        "name": "change_circle",
        "difficulty": 1
    },
    {
        "id": 387,
        "name": "change_history",
        "difficulty": 9
    },
    {
        "id": 388,
        "name": "charging_station",
        "difficulty": 3
    },
    {
        "id": 389,
        "name": "chat",
        "difficulty": 2
    },
    {
        "id": 390,
        "name": "chat_bubble",
        "difficulty": 1
    },
    {
        "id": 391,
        "name": "chat_bubble_outline",
        "difficulty": 1
    },
    {
        "id": 392,
        "name": "check",
        "difficulty": 1
    },
    {
        "id": 393,
        "name": "check_box",
        "difficulty": 1
    },
    {
        "id": 394,
        "name": "check_box_outline_blank",
        "difficulty": 2
    },
    {
        "id": 395,
        "name": "check_circle",
        "difficulty": 1
    },
    {
        "id": 396,
        "name": "check_circle_outline",
        "difficulty": 1
    },
    {
        "id": 397,
        "name": "checklist",
        "difficulty": 1
    },
    {
        "id": 398,
        "name": "checklist_rtl",
        "difficulty": 2
    },
    {
        "id": 399,
        "name": "checkroom",
        "difficulty": 3
    },
    {
        "id": 400,
        "name": "chevron_left",
        "difficulty": 3
    },
    {
        "id": 401,
        "name": "chevron_right",
        "difficulty": 3
    },
    {
        "id": 402,
        "name": "child_care",
        "difficulty": 2
    },
    {
        "id": 403,
        "name": "child_friendly",
        "difficulty": 2
    },
    {
        "id": 404,
        "name": "chrome_reader_mode",
        "difficulty": 5
    },
    {
        "id": 405,
        "name": "church",
        "difficulty": 1
    },
    {
        "id": 406,
        "name": "circle",
        "difficulty": 0
    },
    {
        "id": 407,
        "name": "circle_notifications",
        "difficulty": 1
    },
    {
        "id": 408,
        "name": "class",
        "difficulty": 3
    },
    {
        "id": 409,
        "name": "clean_hands",
        "difficulty": 2
    },
    {
        "id": 410,
        "name": "cleaning_services",
        "difficulty": 6
    },
    {
        "id": 411,
        "name": "clear",
        "difficulty": 2
    },
    {
        "id": 412,
        "name": "clear_all",
        "difficulty": 7
    },
    {
        "id": 413,
        "name": "close",
        "difficulty": 1
    },
    {
        "id": 414,
        "name": "close_fullscreen",
        "difficulty": 1
    },
    {
        "id": 415,
        "name": "closed_caption",
        "difficulty": 0
    },
    {
        "id": 416,
        "name": "closed_caption_disabled",
        "difficulty": 0
    },
    {
        "id": 417,
        "name": "closed_caption_off",
        "difficulty": 0
    },
    {
        "id": 418,
        "name": "cloud",
        "difficulty": 0
    },
    {
        "id": 419,
        "name": "cloud_circle",
        "difficulty": 1
    },
    {
        "id": 420,
        "name": "cloud_done",
        "difficulty": 1
    },
    {
        "id": 421,
        "name": "cloud_download",
        "difficulty": 1
    },
    {
        "id": 422,
        "name": "cloud_off",
        "difficulty": 1
    },
    {
        "id": 423,
        "name": "cloud_queue",
        "difficulty": 1
    },
    {
        "id": 424,
        "name": "cloud_sync",
        "difficulty": 2
    },
    {
        "id": 425,
        "name": "cloud_upload",
        "difficulty": 1
    },
    {
        "id": 426,
        "name": "cloudy_snowing",
        "difficulty": 1
    },
    {
        "id": 427,
        "name": "co2",
        "difficulty": 0
    },
    {
        "id": 428,
        "name": "co_present",
        "difficulty": 4
    },
    {
        "id": 429,
        "name": "code",
        "difficulty": 3
    },
    {
        "id": 430,
        "name": "code_off",
        "difficulty": 3
    },
    {
        "id": 431,
        "name": "coffee",
        "difficulty": 1
    },
    {
        "id": 432,
        "name": "coffee_maker",
        "difficulty": 2
    },
    {
        "id": 433,
        "name": "collections",
        "difficulty": 5
    },
    {
        "id": 434,
        "name": "collections_bookmark",
        "difficulty": 4
    },
    {
        "id": 435,
        "name": "color_lens",
        "difficulty": 7
    },
    {
        "id": 436,
        "name": "colorize",
        "difficulty": 6
    },
    {
        "id": 437,
        "name": "comment",
        "difficulty": 3
    },
    {
        "id": 438,
        "name": "comment_bank",
        "difficulty": 5
    },
    {
        "id": 439,
        "name": "comments_disabled",
        "difficulty": 3
    },
    {
        "id": 440,
        "name": "commit",
        "difficulty": 7
    },
    {
        "id": 441,
        "name": "commute",
        "difficulty": 3
    },
    {
        "id": 442,
        "name": "compare",
        "difficulty": 5
    },
    {
        "id": 443,
        "name": "compare_arrows",
        "difficulty": 4
    },
    {
        "id": 444,
        "name": "compass_calibration",
        "difficulty": 5
    },
    {
        "id": 445,
        "name": "compost",
        "difficulty": 3
    },
    {
        "id": 446,
        "name": "compress",
        "difficulty": 2
    },
    {
        "id": 447,
        "name": "computer",
        "difficulty": 1
    },
    {
        "id": 448,
        "name": "confirmation_num",
        "difficulty": 9
    },
    {
        "id": 449,
        "name": "confirmation_number",
        "difficulty": 9
    },
    {
        "id": 450,
        "name": "connect_without_contact",
        "difficulty": 4
    },
    {
        "id": 451,
        "name": "connected_tv",
        "difficulty": 3
    },
    {
        "id": 452,
        "name": "connecting_airports",
        "difficulty": 3
    },
    {
        "id": 453,
        "name": "construction",
        "difficulty": 2
    },
    {
        "id": 454,
        "name": "contact_emergency",
        "difficulty": 2
    },
    {
        "id": 455,
        "name": "contact_mail",
        "difficulty": 2
    },
    {
        "id": 456,
        "name": "contact_page",
        "difficulty": 2
    },
    {
        "id": 457,
        "name": "contact_phone",
        "difficulty": 2
    },
    {
        "id": 458,
        "name": "contact_support",
        "difficulty": 3
    },
    {
        "id": 459,
        "name": "contactless",
        "difficulty": 3
    },
    {
        "id": 460,
        "name": "contacts",
        "difficulty": 2
    },
    {
        "id": 461,
        "name": "content_copy",
        "difficulty": 2
    },
    {
        "id": 462,
        "name": "content_cut",
        "difficulty": 3
    },
    {
        "id": 463,
        "name": "content_paste",
        "difficulty": 3
    },
    {
        "id": 464,
        "name": "content_paste_go",
        "difficulty": 3
    },
    {
        "id": 465,
        "name": "content_paste_off",
        "difficulty": 3
    },
    {
        "id": 466,
        "name": "content_paste_search",
        "difficulty": 3
    },
    {
        "id": 467,
        "name": "contrast",
        "difficulty": 4
    },
    {
        "id": 468,
        "name": "control_camera",
        "difficulty": 7
    },
    {
        "id": 469,
        "name": "control_point",
        "difficulty": 8
    },
    {
        "id": 470,
        "name": "control_point_duplicate",
        "difficulty": 7
    },
    {
        "id": 471,
        "name": "conveyor_belt",
        "difficulty": 3
    },
    {
        "id": 472,
        "name": "cookie",
        "difficulty": 2
    },
    {
        "id": 473,
        "name": "copy_all",
        "difficulty": 3
    },
    {
        "id": 474,
        "name": "copyright",
        "difficulty": 0
    },
    {
        "id": 475,
        "name": "coronavirus",
        "difficulty": 1
    },
    {
        "id": 476,
        "name": "corporate_fare",
        "difficulty": 5
    },
    {
        "id": 477,
        "name": "cottage",
        "difficulty": 3
    },
    {
        "id": 478,
        "name": "countertops",
        "difficulty": 3
    },
    {
        "id": 479,
        "name": "create",
        "difficulty": 2
    },
    {
        "id": 480,
        "name": "create_new_folder",
        "difficulty": 1
    },
    {
        "id": 481,
        "name": "credit_card",
        "difficulty": 1
    },
    {
        "id": 482,
        "name": "credit_card_off",
        "difficulty": 1
    },
    {
        "id": 483,
        "name": "credit_score",
        "difficulty": 2
    },
    {
        "id": 484,
        "name": "crib",
        "difficulty": 1
    },
    {
        "id": 485,
        "name": "crisis_alert",
        "difficulty": 4
    },
    {
        "id": 486,
        "name": "crop",
        "difficulty": 3
    },
    {
        "id": 487,
        "name": "crop_16_9",
        "difficulty": 3
    },
    {
        "id": 488,
        "name": "crop_3_2",
        "difficulty": 3
    },
    {
        "id": 489,
        "name": "crop_5_4",
        "difficulty": 3
    },
    {
        "id": 490,
        "name": "crop_7_5",
        "difficulty": 3
    },
    {
        "id": 491,
        "name": "crop_din",
        "difficulty": 3
    },
    {
        "id": 492,
        "name": "crop_free",
        "difficulty": 5
    },
    {
        "id": 493,
        "name": "crop_landscape",
        "difficulty": 4
    },
    {
        "id": 494,
        "name": "crop_original",
        "difficulty": 7
    },
    {
        "id": 495,
        "name": "crop_portrait",
        "difficulty": 4
    },
    {
        "id": 496,
        "name": "crop_rotate",
        "difficulty": 3
    },
    {
        "id": 497,
        "name": "crop_square",
        "difficulty": 3
    },
    {
        "id": 498,
        "name": "cruelty_free",
        "difficulty": 4
    },
    {
        "id": 499,
        "name": "css",
        "difficulty": 0
    },
    {
        "id": 500,
        "name": "currency_bitcoin",
        "difficulty": 1
    },
    {
        "id": 501,
        "name": "currency_exchange",
        "difficulty": 2
    },
    {
        "id": 502,
        "name": "currency_franc",
        "difficulty": 2
    },
    {
        "id": 503,
        "name": "currency_lira",
        "difficulty": 2
    },
    {
        "id": 504,
        "name": "currency_pound",
        "difficulty": 1
    },
    {
        "id": 505,
        "name": "currency_ruble",
        "difficulty": 2
    },
    {
        "id": 506,
        "name": "currency_rupee",
        "difficulty": 1
    },
    {
        "id": 507,
        "name": "currency_yen",
        "difficulty": 1
    },
    {
        "id": 508,
        "name": "currency_yuan",
        "difficulty": 2
    },
    {
        "id": 509,
        "name": "curtains",
        "difficulty": 3
    },
    {
        "id": 510,
        "name": "curtains_closed",
        "difficulty": 5
    },
    {
        "id": 511,
        "name": "cyclone",
        "difficulty": 2
    },
    {
        "id": 512,
        "name": "dangerous",
        "difficulty": 2
    },
    {
        "id": 513,
        "name": "dark_mode",
        "difficulty": 1
    },
    {
        "id": 514,
        "name": "dashboard",
        "difficulty": 4
    },
    {
        "id": 515,
        "name": "dashboard_customize",
        "difficulty": 3
    },
    {
        "id": 516,
        "name": "data_array",
        "difficulty": 4
    },
    {
        "id": 517,
        "name": "data_exploration",
        "difficulty": 3
    },
    {
        "id": 518,
        "name": "data_object",
        "difficulty": 4
    },
    {
        "id": 519,
        "name": "data_saver_off",
        "difficulty": 7
    },
    {
        "id": 520,
        "name": "data_saver_on",
        "difficulty": 6
    },
    {
        "id": 521,
        "name": "data_thresholding",
        "difficulty": 5
    },
    {
        "id": 522,
        "name": "data_usage",
        "difficulty": 5
    },
    {
        "id": 523,
        "name": "dataset",
        "difficulty": 7
    },
    {
        "id": 524,
        "name": "dataset_linked",
        "difficulty": 4
    },
    {
        "id": 525,
        "name": "date_range",
        "difficulty": 4
    },
    {
        "id": 526,
        "name": "deblur",
        "difficulty": 4
    },
    {
        "id": 527,
        "name": "deck",
        "difficulty": 2
    },
    {
        "id": 528,
        "name": "dehaze",
        "difficulty": 8
    },
    {
        "id": 529,
        "name": "delete",
        "difficulty": 1
    },
    {
        "id": 530,
        "name": "delete_forever",
        "difficulty": 1
    },
    {
        "id": 531,
        "name": "delete_outline",
        "difficulty": 1
    },
    {
        "id": 532,
        "name": "delete_sweep",
        "difficulty": 1
    },
    {
        "id": 533,
        "name": "delivery_dining",
        "difficulty": 2
    },
    {
        "id": 534,
        "name": "density_large",
        "difficulty": 4
    },
    {
        "id": 535,
        "name": "density_medium",
        "difficulty": 4
    },
    {
        "id": 536,
        "name": "density_small",
        "difficulty": 4
    },
    {
        "id": 537,
        "name": "departure_board",
        "difficulty": 3
    },
    {
        "id": 538,
        "name": "description",
        "difficulty": 5
    },
    {
        "id": 539,
        "name": "deselect",
        "difficulty": 5
    },
    {
        "id": 540,
        "name": "design_services",
        "difficulty": 3
    },
    {
        "id": 541,
        "name": "desk",
        "difficulty": 2
    },
    {
        "id": 542,
        "name": "desktop_access_disabled",
        "difficulty": 2
    },
    {
        "id": 543,
        "name": "desktop_mac",
        "difficulty": 2
    },
    {
        "id": 544,
        "name": "desktop_windows",
        "difficulty": 2
    },
    {
        "id": 545,
        "name": "details",
        "difficulty": 9
    },
    {
        "id": 546,
        "name": "developer_board",
        "difficulty": 5
    },
    {
        "id": 547,
        "name": "developer_board_off",
        "difficulty": 4
    },
    {
        "id": 548,
        "name": "developer_mode",
        "difficulty": 4
    },
    {
        "id": 549,
        "name": "device_hub",
        "difficulty": 6
    },
    {
        "id": 550,
        "name": "device_thermostat",
        "difficulty": 3
    },
    {
        "id": 551,
        "name": "device_unknown",
        "difficulty": 2
    },
    {
        "id": 552,
        "name": "devices",
        "difficulty": 3
    },
    {
        "id": 553,
        "name": "devices_fold",
        "difficulty": 3
    },
    {
        "id": 554,
        "name": "devices_other",
        "difficulty": 2
    },
    {
        "id": 555,
        "name": "dew_point",
        "difficulty": 3
    },
    {
        "id": 556,
        "name": "dialer_sip",
        "difficulty": 1
    },
    {
        "id": 557,
        "name": "dialpad",
        "difficulty": 1
    },
    {
        "id": 558,
        "name": "diamond",
        "difficulty": 1
    },
    {
        "id": 559,
        "name": "difference",
        "difficulty": 3
    },
    {
        "id": 560,
        "name": "dining",
        "difficulty": 2
    },
    {
        "id": 561,
        "name": "dinner_dining",
        "difficulty": 1
    },
    {
        "id": 562,
        "name": "directions",
        "difficulty": 2
    },
    {
        "id": 563,
        "name": "directions_bike",
        "difficulty": 2
    },
    {
        "id": 564,
        "name": "directions_boat",
        "difficulty": 2
    },
    {
        "id": 565,
        "name": "directions_boat_filled",
        "difficulty": 2
    },
    {
        "id": 566,
        "name": "directions_bus",
        "difficulty": 2
    },
    {
        "id": 567,
        "name": "directions_bus_filled",
        "difficulty": 2
    },
    {
        "id": 568,
        "name": "directions_car",
        "difficulty": 2
    },
    {
        "id": 569,
        "name": "directions_car_filled",
        "difficulty": 2
    },
    {
        "id": 570,
        "name": "directions_ferry",
        "difficulty": 2
    },
    {
        "id": 571,
        "name": "directions_off",
        "difficulty": 3
    },
    {
        "id": 572,
        "name": "directions_railway",
        "difficulty": 2
    },
    {
        "id": 573,
        "name": "directions_railway_filled",
        "difficulty": 2
    },
    {
        "id": 574,
        "name": "directions_run",
        "difficulty": 2
    },
    {
        "id": 575,
        "name": "directions_subway",
        "difficulty": 2
    },
    {
        "id": 576,
        "name": "directions_subway_filled",
        "difficulty": 2
    },
    {
        "id": 577,
        "name": "directions_train",
        "difficulty": 2
    },
    {
        "id": 578,
        "name": "directions_transit",
        "difficulty": 2
    },
    {
        "id": 579,
        "name": "directions_transit_filled",
        "difficulty": 2
    },
    {
        "id": 580,
        "name": "directions_walk",
        "difficulty": 3
    },
    {
        "id": 581,
        "name": "dirty_lens",
        "difficulty": 2
    },
    {
        "id": 582,
        "name": "disabled_by_default",
        "difficulty": 3
    },
    {
        "id": 583,
        "name": "disabled_visible",
        "difficulty": 1
    },
    {
        "id": 584,
        "name": "disc_full",
        "difficulty": 3
    },
    {
        "id": 585,
        "name": "discord",
        "difficulty": 1
    },
    {
        "id": 586,
        "name": "discount",
        "difficulty": 2
    },
    {
        "id": 587,
        "name": "display_settings",
        "difficulty": 2
    },
    {
        "id": 588,
        "name": "diversity_1",
        "difficulty": 3
    },
    {
        "id": 589,
        "name": "diversity_2",
        "difficulty": 4
    },
    {
        "id": 590,
        "name": "diversity_3",
        "difficulty": 3
    },
    {
        "id": 591,
        "name": "dnd_forwardslash",
        "difficulty": 4
    },
    {
        "id": 592,
        "name": "dns",
        "difficulty": 5
    },
    {
        "id": 593,
        "name": "do_disturb",
        "difficulty": 4
    },
    {
        "id": 594,
        "name": "do_disturb_alt",
        "difficulty": 4
    },
    {
        "id": 595,
        "name": "do_disturb_off",
        "difficulty": 4
    },
    {
        "id": 596,
        "name": "do_disturb_on",
        "difficulty": 4
    },
    {
        "id": 597,
        "name": "do_not_disturb",
        "difficulty": 2
    },
    {
        "id": 598,
        "name": "do_not_disturb_alt",
        "difficulty": 2
    },
    {
        "id": 599,
        "name": "do_not_disturb_off",
        "difficulty": 2
    },
    {
        "id": 600,
        "name": "do_not_disturb_on",
        "difficulty": 2
    },
    {
        "id": 601,
        "name": "do_not_disturb_on_total_silence",
        "difficulty": 5
    },
    {
        "id": 602,
        "name": "do_not_step",
        "difficulty": 1
    },
    {
        "id": 603,
        "name": "do_not_touch",
        "difficulty": 1
    },
    {
        "id": 604,
        "name": "dock",
        "difficulty": 3
    },
    {
        "id": 605,
        "name": "document_scanner",
        "difficulty": 4
    },
    {
        "id": 606,
        "name": "domain",
        "difficulty": 7
    },
    {
        "id": 607,
        "name": "domain_add",
        "difficulty": 4
    },
    {
        "id": 608,
        "name": "domain_disabled",
        "difficulty": 4
    },
    {
        "id": 609,
        "name": "domain_verification",
        "difficulty": 6
    },
    {
        "id": 610,
        "name": "done",
        "difficulty": 1
    },
    {
        "id": 611,
        "name": "done_all",
        "difficulty": 1
    },
    {
        "id": 612,
        "name": "done_outline",
        "difficulty": 1
    },
    {
        "id": 613,
        "name": "donut_large",
        "difficulty": 5
    },
    {
        "id": 614,
        "name": "donut_small",
        "difficulty": 7
    },
    {
        "id": 615,
        "name": "door_back",
        "difficulty": 3
    },
    {
        "id": 616,
        "name": "door_front",
        "difficulty": 3
    },
    {
        "id": 617,
        "name": "door_sliding",
        "difficulty": 3
    },
    {
        "id": 618,
        "name": "doorbell",
        "difficulty": 3
    },
    {
        "id": 619,
        "name": "double_arrow",
        "difficulty": 1
    },
    {
        "id": 620,
        "name": "downhill_skiing",
        "difficulty": 1
    },
    {
        "id": 621,
        "name": "download",
        "difficulty": 1
    },
    {
        "id": 622,
        "name": "download_done",
        "difficulty": 2
    },
    {
        "id": 623,
        "name": "download_for_offline",
        "difficulty": 2
    },
    {
        "id": 624,
        "name": "downloading",
        "difficulty": 1
    },
    {
        "id": 625,
        "name": "drafts",
        "difficulty": 3
    },
    {
        "id": 626,
        "name": "drag_handle",
        "difficulty": 4
    },
    {
        "id": 627,
        "name": "drag_indicator",
        "difficulty": 6
    },
    {
        "id": 628,
        "name": "draw",
        "difficulty": 1
    },
    {
        "id": 629,
        "name": "drive_eta",
        "difficulty": 2
    },
    {
        "id": 630,
        "name": "drive_file_move",
        "difficulty": 2
    },
    {
        "id": 631,
        "name": "drive_file_move_outline",
        "difficulty": 2
    },
    {
        "id": 632,
        "name": "drive_file_move_rtl",
        "difficulty": 2
    },
    {
        "id": 633,
        "name": "drive_file_rename_outline",
        "difficulty": 3
    },
    {
        "id": 634,
        "name": "drive_folder_upload",
        "difficulty": 2
    },
    {
        "id": 635,
        "name": "dry",
        "difficulty": 3
    },
    {
        "id": 636,
        "name": "dry_cleaning",
        "difficulty": 2
    },
    {
        "id": 637,
        "name": "duo",
        "difficulty": 7
    },
    {
        "id": 638,
        "name": "dvr",
        "difficulty": 8
    },
    {
        "id": 639,
        "name": "dynamic_feed",
        "difficulty": 5
    },
    {
        "id": 640,
        "name": "dynamic_form",
        "difficulty": 7
    },
    {
        "id": 641,
        "name": "e_mobiledata",
        "difficulty": 3
    },
    {
        "id": 642,
        "name": "earbuds",
        "difficulty": 5
    },
    {
        "id": 643,
        "name": "earbuds_battery",
        "difficulty": 4
    },
    {
        "id": 644,
        "name": "east",
        "difficulty": 2
    },
    {
        "id": 645,
        "name": "eco",
        "difficulty": 2
    },
    {
        "id": 646,
        "name": "edgesensor_high",
        "difficulty": 4
    },
    {
        "id": 647,
        "name": "edgesensor_low",
        "difficulty": 5
    },
    {
        "id": 648,
        "name": "edit",
        "difficulty": 2
    },
    {
        "id": 649,
        "name": "edit_attributes",
        "difficulty": 4
    },
    {
        "id": 650,
        "name": "edit_calendar",
        "difficulty": 3
    },
    {
        "id": 651,
        "name": "edit_document",
        "difficulty": 2
    },
    {
        "id": 652,
        "name": "edit_location",
        "difficulty": 2
    },
    {
        "id": 653,
        "name": "edit_location_alt",
        "difficulty": 2
    },
    {
        "id": 654,
        "name": "edit_note",
        "difficulty": 3
    },
    {
        "id": 655,
        "name": "edit_notifications",
        "difficulty": 2
    },
    {
        "id": 656,
        "name": "edit_off",
        "difficulty": 2
    },
    {
        "id": 657,
        "name": "edit_road",
        "difficulty": 4
    },
    {
        "id": 658,
        "name": "edit_square",
        "difficulty": 2
    },
    {
        "id": 659,
        "name": "egg",
        "difficulty": 1
    },
    {
        "id": 660,
        "name": "egg_alt",
        "difficulty": 4
    },
    {
        "id": 661,
        "name": "eject",
        "difficulty": 6
    },
    {
        "id": 662,
        "name": "elderly",
        "difficulty": 2
    },
    {
        "id": 663,
        "name": "elderly_woman",
        "difficulty": 2
    },
    {
        "id": 664,
        "name": "electric_bike",
        "difficulty": 1
    },
    {
        "id": 665,
        "name": "electric_bolt",
        "difficulty": 2
    },
    {
        "id": 666,
        "name": "electric_car",
        "difficulty": 1
    },
    {
        "id": 667,
        "name": "electric_meter",
        "difficulty": 4
    },
    {
        "id": 668,
        "name": "electric_moped",
        "difficulty": 2
    },
    {
        "id": 669,
        "name": "electric_rickshaw",
        "difficulty": 3
    },
    {
        "id": 670,
        "name": "electric_scooter",
        "difficulty": 2
    },
    {
        "id": 671,
        "name": "electrical_services",
        "difficulty": 5
    },
    {
        "id": 672,
        "name": "elevator",
        "difficulty": 2
    },
    {
        "id": 673,
        "name": "email",
        "difficulty": 1
    },
    {
        "id": 674,
        "name": "emergency",
        "difficulty": 5
    },
    {
        "id": 675,
        "name": "emergency_recording",
        "difficulty": 5
    },
    {
        "id": 676,
        "name": "emergency_share",
        "difficulty": 7
    },
    {
        "id": 677,
        "name": "emoji_emotions",
        "difficulty": 2
    },
    {
        "id": 678,
        "name": "emoji_events",
        "difficulty": 8
    },
    {
        "id": 679,
        "name": "emoji_flags",
        "difficulty": 2
    },
    {
        "id": 680,
        "name": "emoji_food_beverage",
        "difficulty": 2
    },
    {
        "id": 681,
        "name": "emoji_nature",
        "difficulty": 3
    },
    {
        "id": 682,
        "name": "emoji_objects",
        "difficulty": 6
    },
    {
        "id": 683,
        "name": "emoji_people",
        "difficulty": 2
    },
    {
        "id": 684,
        "name": "emoji_symbols",
        "difficulty": 1
    },
    {
        "id": 685,
        "name": "emoji_transportation",
        "difficulty": 3
    },
    {
        "id": 686,
        "name": "energy_savings_leaf",
        "difficulty": 2
    },
    {
        "id": 687,
        "name": "engineering",
        "difficulty": 2
    },
    {
        "id": 688,
        "name": "enhance_photo_translate",
        "difficulty": 3
    },
    {
        "id": 689,
        "name": "enhanced_encryption",
        "difficulty": 3
    },
    {
        "id": 690,
        "name": "equalizer",
        "difficulty": 4
    },
    {
        "id": 691,
        "name": "error",
        "difficulty": 2
    },
    {
        "id": 692,
        "name": "error_outline",
        "difficulty": 2
    },
    {
        "id": 693,
        "name": "escalator",
        "difficulty": 1
    },
    {
        "id": 694,
        "name": "escalator_warning",
        "difficulty": 9
    },
    {
        "id": 695,
        "name": "euro",
        "difficulty": 1
    },
    {
        "id": 696,
        "name": "euro_symbol",
        "difficulty": 1
    },
    {
        "id": 697,
        "name": "ev_station",
        "difficulty": 2
    },
    {
        "id": 698,
        "name": "event",
        "difficulty": 4
    },
    {
        "id": 699,
        "name": "event_available",
        "difficulty": 4
    },
    {
        "id": 700,
        "name": "event_busy",
        "difficulty": 4
    },
    {
        "id": 701,
        "name": "event_note",
        "difficulty": 6
    },
    {
        "id": 702,
        "name": "event_repeat",
        "difficulty": 4
    },
    {
        "id": 703,
        "name": "event_seat",
        "difficulty": 4
    },
    {
        "id": 704,
        "name": "exit_to_app",
        "difficulty": 4
    },
    {
        "id": 705,
        "name": "expand",
        "difficulty": 3
    },
    {
        "id": 706,
        "name": "expand_circle_down",
        "difficulty": 3
    },
    {
        "id": 707,
        "name": "expand_less",
        "difficulty": 3
    },
    {
        "id": 708,
        "name": "expand_more",
        "difficulty": 3
    },
    {
        "id": 709,
        "name": "explicit",
        "difficulty": 5
    },
    {
        "id": 710,
        "name": "explore",
        "difficulty": 4
    },
    {
        "id": 711,
        "name": "explore_off",
        "difficulty": 3
    },
    {
        "id": 712,
        "name": "exposure",
        "difficulty": 3
    },
    {
        "id": 713,
        "name": "exposure_minus_1",
        "difficulty": 1
    },
    {
        "id": 714,
        "name": "exposure_minus_2",
        "difficulty": 1
    },
    {
        "id": 715,
        "name": "exposure_neg_1",
        "difficulty": 1
    },
    {
        "id": 716,
        "name": "exposure_neg_2",
        "difficulty": 1
    },
    {
        "id": 717,
        "name": "exposure_plus_1",
        "difficulty": 1
    },
    {
        "id": 718,
        "name": "exposure_plus_2",
        "difficulty": 1
    },
    {
        "id": 719,
        "name": "exposure_zero",
        "difficulty": 2
    },
    {
        "id": 720,
        "name": "extension",
        "difficulty": 3
    },
    {
        "id": 721,
        "name": "extension_off",
        "difficulty": 3
    },
    {
        "id": 722,
        "name": "face",
        "difficulty": 1
    },
    {
        "id": 723,
        "name": "face_2",
        "difficulty": 1
    },
    {
        "id": 724,
        "name": "face_3",
        "difficulty": 1
    },
    {
        "id": 725,
        "name": "face_4",
        "difficulty": 1
    },
    {
        "id": 726,
        "name": "face_5",
        "difficulty": 1
    },
    {
        "id": 727,
        "name": "face_6",
        "difficulty": 1
    },
    {
        "id": 728,
        "name": "face_retouching_natural",
        "difficulty": 1
    },
    {
        "id": 729,
        "name": "face_retouching_off",
        "difficulty": 1
    },
    {
        "id": 730,
        "name": "facebook",
        "difficulty": 1
    },
    {
        "id": 731,
        "name": "fact_check",
        "difficulty": 4
    },
    {
        "id": 732,
        "name": "factory",
        "difficulty": 1
    },
    {
        "id": 733,
        "name": "family_restroom",
        "difficulty": 3
    },
    {
        "id": 734,
        "name": "fast_forward",
        "difficulty": 2
    },
    {
        "id": 735,
        "name": "fast_rewind",
        "difficulty": 2
    },
    {
        "id": 736,
        "name": "fastfood",
        "difficulty": 2
    },
    {
        "id": 737,
        "name": "favorite",
        "difficulty": 3
    },
    {
        "id": 738,
        "name": "favorite_border",
        "difficulty": 3
    },
    {
        "id": 739,
        "name": "favorite_outline",
        "difficulty": 3
    },
    {
        "id": 740,
        "name": "fax",
        "difficulty": 4
    },
    {
        "id": 741,
        "name": "featured_play_list",
        "difficulty": 6
    },
    {
        "id": 742,
        "name": "featured_video",
        "difficulty": 6
    },
    {
        "id": 743,
        "name": "feed",
        "difficulty": 9
    },
    {
        "id": 744,
        "name": "feedback",
        "difficulty": 3
    },
    {
        "id": 745,
        "name": "female",
        "difficulty": 1
    },
    {
        "id": 746,
        "name": "fence",
        "difficulty": 3
    },
    {
        "id": 747,
        "name": "festival",
        "difficulty": 3
    },
    {
        "id": 748,
        "name": "fiber_dvr",
        "difficulty": 1
    },
    {
        "id": 749,
        "name": "fiber_manual_record",
        "difficulty": 9
    },
    {
        "id": 750,
        "name": "fiber_new",
        "difficulty": 1
    },
    {
        "id": 751,
        "name": "fiber_pin",
        "difficulty": 1
    },
    {
        "id": 752,
        "name": "fiber_smart_record",
        "difficulty": 8
    },
    {
        "id": 753,
        "name": "file_copy",
        "difficulty": 1
    },
    {
        "id": 754,
        "name": "file_download",
        "difficulty": 1
    },
    {
        "id": 755,
        "name": "file_download_done",
        "difficulty": 1
    },
    {
        "id": 756,
        "name": "file_download_off",
        "difficulty": 1
    },
    {
        "id": 757,
        "name": "file_open",
        "difficulty": 2
    },
    {
        "id": 758,
        "name": "file_present",
        "difficulty": 5
    },
    {
        "id": 759,
        "name": "file_upload",
        "difficulty": 1
    },
    {
        "id": 760,
        "name": "file_upload_off",
        "difficulty": 1
    },
    {
        "id": 761,
        "name": "filter",
        "difficulty": 3
    },
    {
        "id": 762,
        "name": "filter_1",
        "difficulty": 2
    },
    {
        "id": 763,
        "name": "filter_2",
        "difficulty": 2
    },
    {
        "id": 764,
        "name": "filter_3",
        "difficulty": 2
    },
    {
        "id": 765,
        "name": "filter_4",
        "difficulty": 2
    },
    {
        "id": 766,
        "name": "filter_5",
        "difficulty": 2
    },
    {
        "id": 767,
        "name": "filter_6",
        "difficulty": 2
    },
    {
        "id": 768,
        "name": "filter_7",
        "difficulty": 2
    },
    {
        "id": 769,
        "name": "filter_8",
        "difficulty": 2
    },
    {
        "id": 770,
        "name": "filter_9",
        "difficulty": 2
    },
    {
        "id": 771,
        "name": "filter_9_plus",
        "difficulty": 1
    },
    {
        "id": 772,
        "name": "filter_alt",
        "difficulty": 1
    },
    {
        "id": 773,
        "name": "filter_alt_off",
        "difficulty": 1
    },
    {
        "id": 774,
        "name": "filter_b_and_w",
        "difficulty": 4
    },
    {
        "id": 775,
        "name": "filter_center_focus",
        "difficulty": 3
    },
    {
        "id": 776,
        "name": "filter_drama",
        "difficulty": 8
    },
    {
        "id": 777,
        "name": "filter_frames",
        "difficulty": 7
    },
    {
        "id": 778,
        "name": "filter_hdr",
        "difficulty": 7
    },
    {
        "id": 779,
        "name": "filter_list",
        "difficulty": 5
    },
    {
        "id": 780,
        "name": "filter_list_alt",
        "difficulty": 3
    },
    {
        "id": 781,
        "name": "filter_list_off",
        "difficulty": 4
    },
    {
        "id": 782,
        "name": "filter_none",
        "difficulty": 5
    },
    {
        "id": 783,
        "name": "filter_tilt_shift",
        "difficulty": 6
    },
    {
        "id": 784,
        "name": "filter_vintage",
        "difficulty": 7
    },
    {
        "id": 785,
        "name": "find_in_page",
        "difficulty": 2
    },
    {
        "id": 786,
        "name": "find_replace",
        "difficulty": 3
    },
    {
        "id": 787,
        "name": "fingerprint",
        "difficulty": 1
    },
    {
        "id": 788,
        "name": "fire_extinguisher",
        "difficulty": 3
    },
    {
        "id": 789,
        "name": "fire_hydrant",
        "difficulty": 7
    },
    {
        "id": 790,
        "name": "fire_hydrant_alt",
        "difficulty": 1
    },
    {
        "id": 791,
        "name": "fire_truck",
        "difficulty": 4
    },
    {
        "id": 792,
        "name": "fireplace",
        "difficulty": 3
    },
    {
        "id": 793,
        "name": "first_page",
        "difficulty": 3
    },
    {
        "id": 794,
        "name": "fit_screen",
        "difficulty": 3
    },
    {
        "id": 795,
        "name": "fitbit",
        "difficulty": 4
    },
    {
        "id": 796,
        "name": "fitness_center",
        "difficulty": 2
    },
    {
        "id": 797,
        "name": "flag",
        "difficulty": 1
    },
    {
        "id": 798,
        "name": "flag_circle",
        "difficulty": 1
    },
    {
        "id": 799,
        "name": "flaky",
        "difficulty": 8
    },
    {
        "id": 800,
        "name": "flare",
        "difficulty": 4
    },
    {
        "id": 801,
        "name": "flash_auto",
        "difficulty": 3
    },
    {
        "id": 802,
        "name": "flash_off",
        "difficulty": 2
    },
    {
        "id": 803,
        "name": "flash_on",
        "difficulty": 1
    },
    {
        "id": 804,
        "name": "flashlight_off",
        "difficulty": 3
    },
    {
        "id": 805,
        "name": "flashlight_on",
        "difficulty": 2
    },
    {
        "id": 806,
        "name": "flatware",
        "difficulty": 2
    },
    {
        "id": 807,
        "name": "flight",
        "difficulty": 2
    },
    {
        "id": 808,
        "name": "flight_class",
        "difficulty": 4
    },
    {
        "id": 809,
        "name": "flight_land",
        "difficulty": 1
    },
    {
        "id": 810,
        "name": "flight_takeoff",
        "difficulty": 1
    },
    {
        "id": 811,
        "name": "flip",
        "difficulty": 3
    },
    {
        "id": 812,
        "name": "flip_camera_android",
        "difficulty": 5
    },
    {
        "id": 813,
        "name": "flip_camera_ios",
        "difficulty": 3
    },
    {
        "id": 814,
        "name": "flip_to_back",
        "difficulty": 6
    },
    {
        "id": 815,
        "name": "flip_to_front",
        "difficulty": 6
    },
    {
        "id": 816,
        "name": "flood",
        "difficulty": 1
    },
    {
        "id": 817,
        "name": "flourescent",
        "difficulty": 6
    },
    {
        "id": 818,
        "name": "flourescent",
        "difficulty": 6
    },
    {
        "id": 819,
        "name": "fluorescent",
        "difficulty": 6
    },
    {
        "id": 820,
        "name": "flutter_dash",
        "difficulty": 9
    },
    {
        "id": 821,
        "name": "fmd_bad",
        "difficulty": 6
    },
    {
        "id": 822,
        "name": "fmd_good",
        "difficulty": 9
    },
    {
        "id": 823,
        "name": "foggy",
        "difficulty": 2
    },
    {
        "id": 824,
        "name": "folder",
        "difficulty": 1
    },
    {
        "id": 825,
        "name": "folder_copy",
        "difficulty": 2
    },
    {
        "id": 826,
        "name": "folder_delete",
        "difficulty": 1
    },
    {
        "id": 827,
        "name": "folder_off",
        "difficulty": 1
    },
    {
        "id": 828,
        "name": "folder_open",
        "difficulty": 1
    },
    {
        "id": 829,
        "name": "folder_shared",
        "difficulty": 1
    },
    {
        "id": 830,
        "name": "folder_special",
        "difficulty": 1
    },
    {
        "id": 831,
        "name": "folder_zip",
        "difficulty": 1
    },
    {
        "id": 832,
        "name": "follow_the_signs",
        "difficulty": 1
    },
    {
        "id": 833,
        "name": "font_download",
        "difficulty": 3
    },
    {
        "id": 834,
        "name": "font_download_off",
        "difficulty": 2
    },
    {
        "id": 835,
        "name": "food_bank",
        "difficulty": 2
    },
    {
        "id": 836,
        "name": "forest",
        "difficulty": 2
    },
    {
        "id": 837,
        "name": "fork_left",
        "difficulty": 3
    },
    {
        "id": 838,
        "name": "fork_right",
        "difficulty": 3
    },
    {
        "id": 839,
        "name": "forklift",
        "difficulty": 1
    },
    {
        "id": 840,
        "name": "format_align_center",
        "difficulty": 2
    },
    {
        "id": 841,
        "name": "format_align_justify",
        "difficulty": 4
    },
    {
        "id": 842,
        "name": "format_align_left",
        "difficulty": 2
    },
    {
        "id": 843,
        "name": "format_align_right",
        "difficulty": 2
    },
    {
        "id": 844,
        "name": "format_bold",
        "difficulty": 3
    },
    {
        "id": 845,
        "name": "format_clear",
        "difficulty": 4
    },
    {
        "id": 846,
        "name": "format_color_fill",
        "difficulty": 3
    },
    {
        "id": 847,
        "name": "format_color_reset",
        "difficulty": 5
    },
    {
        "id": 848,
        "name": "format_color_text",
        "difficulty": 3
    },
    {
        "id": 849,
        "name": "format_indent_decrease",
        "difficulty": 3
    },
    {
        "id": 850,
        "name": "format_indent_increase",
        "difficulty": 3
    },
    {
        "id": 851,
        "name": "format_italic",
        "difficulty": 2
    },
    {
        "id": 852,
        "name": "format_line_spacing",
        "difficulty": 1
    },
    {
        "id": 853,
        "name": "format_list_bulleted",
        "difficulty": 2
    },
    {
        "id": 854,
        "name": "format_list_bulleted_add",
        "difficulty": 2
    },
    {
        "id": 855,
        "name": "format_list_numbered",
        "difficulty": 2
    },
    {
        "id": 856,
        "name": "format_list_numbered_rtl",
        "difficulty": 2
    },
    {
        "id": 857,
        "name": "format_overline",
        "difficulty": 5
    },
    {
        "id": 858,
        "name": "format_paint",
        "difficulty": 2
    },
    {
        "id": 859,
        "name": "format_quote",
        "difficulty": 2
    },
    {
        "id": 860,
        "name": "format_shapes",
        "difficulty": 4
    },
    {
        "id": 861,
        "name": "format_size",
        "difficulty": 2
    },
    {
        "id": 862,
        "name": "format_strikethrough",
        "difficulty": 2
    },
    {
        "id": 863,
        "name": "format_textdirection_l_to_r",
        "difficulty": 3
    },
    {
        "id": 864,
        "name": "format_textdirection_r_to_l",
        "difficulty": 3
    },
    {
        "id": 865,
        "name": "format_underline",
        "difficulty": 2
    },
    {
        "id": 866,
        "name": "format_underlined",
        "difficulty": 2
    },
    {
        "id": 867,
        "name": "fort",
        "difficulty": 1
    },
    {
        "id": 868,
        "name": "forum",
        "difficulty": 2
    },
    {
        "id": 869,
        "name": "forward",
        "difficulty": 2
    },
    {
        "id": 870,
        "name": "forward_10",
        "difficulty": 1
    },
    {
        "id": 871,
        "name": "forward_30",
        "difficulty": 1
    },
    {
        "id": 872,
        "name": "forward_5",
        "difficulty": 1
    },
    {
        "id": 873,
        "name": "forward_to_inbox",
        "difficulty": 2
    },
    {
        "id": 874,
        "name": "foundation",
        "difficulty": 5
    },
    {
        "id": 875,
        "name": "free_breakfast",
        "difficulty": 5
    },
    {
        "id": 876,
        "name": "free_cancellation",
        "difficulty": 4
    },
    {
        "id": 877,
        "name": "front_hand",
        "difficulty": 1
    },
    {
        "id": 878,
        "name": "front_loader",
        "difficulty": 2
    },
    {
        "id": 879,
        "name": "fullscreen",
        "difficulty": 2
    },
    {
        "id": 880,
        "name": "fullscreen_exit",
        "difficulty": 1
    },
    {
        "id": 881,
        "name": "functions",
        "difficulty": 3
    },
    {
        "id": 882,
        "name": "g_mobiledata",
        "difficulty": 3
    },
    {
        "id": 883,
        "name": "g_translate",
        "difficulty": 2
    },
    {
        "id": 884,
        "name": "gamepad",
        "difficulty": 2
    },
    {
        "id": 885,
        "name": "games",
        "difficulty": 5
    },
    {
        "id": 886,
        "name": "garage",
        "difficulty": 2
    },
    {
        "id": 887,
        "name": "gas_meter",
        "difficulty": 4
    },
    {
        "id": 888,
        "name": "gavel",
        "difficulty": 3
    },
    {
        "id": 889,
        "name": "generating_tokens",
        "difficulty": 5
    },
    {
        "id": 890,
        "name": "gesture",
        "difficulty": 5
    },
    {
        "id": 891,
        "name": "get_app",
        "difficulty": 2
    },
    {
        "id": 892,
        "name": "gif",
        "difficulty": 0
    },
    {
        "id": 893,
        "name": "gif_box",
        "difficulty": 0
    },
    {
        "id": 894,
        "name": "girl",
        "difficulty": 1
    },
    {
        "id": 895,
        "name": "gite",
        "difficulty": 7
    },
    {
        "id": 896,
        "name": "goat",
        "difficulty": 1
    },
    {
        "id": 897,
        "name": "golf_course",
        "difficulty": 1
    },
    {
        "id": 898,
        "name": "gpp_bad",
        "difficulty": 8
    },
    {
        "id": 899,
        "name": "gpp_good",
        "difficulty": 7
    },
    {
        "id": 900,
        "name": "gpp_maybe",
        "difficulty": 8
    },
    {
        "id": 901,
        "name": "gps_fixed",
        "difficulty": 5
    },
    {
        "id": 902,
        "name": "gps_not_fixed",
        "difficulty": 6
    },
    {
        "id": 903,
        "name": "gps_off",
        "difficulty": 4
    },
    {
        "id": 904,
        "name": "grade",
        "difficulty": 5
    },
    {
        "id": 905,
        "name": "gradient",
        "difficulty": 3
    },
    {
        "id": 906,
        "name": "grading",
        "difficulty": 3
    },
    {
        "id": 907,
        "name": "grain",
        "difficulty": 5
    },
    {
        "id": 908,
        "name": "graphic_eq",
        "difficulty": 5
    },
    {
        "id": 909,
        "name": "grass",
        "difficulty": 2
    },
    {
        "id": 910,
        "name": "grid_3x3",
        "difficulty": 2
    },
    {
        "id": 911,
        "name": "grid_4x4",
        "difficulty": 1
    },
    {
        "id": 912,
        "name": "grid_goldenratio",
        "difficulty": 5
    },
    {
        "id": 913,
        "name": "grid_off",
        "difficulty": 2
    },
    {
        "id": 914,
        "name": "grid_on",
        "difficulty": 3
    },
    {
        "id": 915,
        "name": "grid_view",
        "difficulty": 2
    },
    {
        "id": 916,
        "name": "group",
        "difficulty": 2
    },
    {
        "id": 917,
        "name": "group_add",
        "difficulty": 1
    },
    {
        "id": 918,
        "name": "group_off",
        "difficulty": 1
    },
    {
        "id": 919,
        "name": "group_remove",
        "difficulty": 1
    },
    {
        "id": 920,
        "name": "group_work",
        "difficulty": 7
    },
    {
        "id": 921,
        "name": "groups",
        "difficulty": 2
    },
    {
        "id": 922,
        "name": "groups_2",
        "difficulty": 2
    },
    {
        "id": 923,
        "name": "groups_3",
        "difficulty": 2
    },
    {
        "id": 924,
        "name": "h_mobiledata",
        "difficulty": 3
    },
    {
        "id": 925,
        "name": "h_plus_mobiledata",
        "difficulty": 2
    },
    {
        "id": 926,
        "name": "hail",
        "difficulty": 3
    },
    {
        "id": 927,
        "name": "handshake",
        "difficulty": 2
    },
    {
        "id": 928,
        "name": "handyman",
        "difficulty": 2
    },
    {
        "id": 929,
        "name": "hardware",
        "difficulty": 3
    },
    {
        "id": 930,
        "name": "hd",
        "difficulty": 0
    },
    {
        "id": 931,
        "name": "hdr_auto",
        "difficulty": 3
    },
    {
        "id": 932,
        "name": "hdr_auto_select",
        "difficulty": 1
    },
    {
        "id": 933,
        "name": "hdr_enhanced_select",
        "difficulty": 2
    },
    {
        "id": 934,
        "name": "hdr_off",
        "difficulty": 0
    },
    {
        "id": 935,
        "name": "hdr_off_select",
        "difficulty": 1
    },
    {
        "id": 936,
        "name": "hdr_on",
        "difficulty": 1
    },
    {
        "id": 937,
        "name": "hdr_on_select",
        "difficulty": 1
    },
    {
        "id": 938,
        "name": "hdr_plus",
        "difficulty": 0
    },
    {
        "id": 939,
        "name": "hdr_strong",
        "difficulty": 9
    },
    {
        "id": 940,
        "name": "hdr_weak",
        "difficulty": 9
    },
    {
        "id": 941,
        "name": "headphones",
        "difficulty": 1
    },
    {
        "id": 942,
        "name": "headphones_battery",
        "difficulty": 1
    },
    {
        "id": 943,
        "name": "headset",
        "difficulty": 1
    },
    {
        "id": 944,
        "name": "headset_mic",
        "difficulty": 1
    },
    {
        "id": 945,
        "name": "headset_off",
        "difficulty": 1
    },
    {
        "id": 946,
        "name": "healing",
        "difficulty": 4
    },
    {
        "id": 947,
        "name": "health_and_safety",
        "difficulty": 3
    },
    {
        "id": 948,
        "name": "hearing",
        "difficulty": 3
    },
    {
        "id": 949,
        "name": "hearing_disabled",
        "difficulty": 2
    },
    {
        "id": 950,
        "name": "heart_broken",
        "difficulty": 1
    },
    {
        "id": 951,
        "name": "heat_pump",
        "difficulty": 4
    },
    {
        "id": 952,
        "name": "height",
        "difficulty": 5
    },
    {
        "id": 953,
        "name": "help",
        "difficulty": 3
    },
    {
        "id": 954,
        "name": "help_center",
        "difficulty": 4
    },
    {
        "id": 955,
        "name": "help_outline",
        "difficulty": 3
    },
    {
        "id": 956,
        "name": "hevc",
        "difficulty": 0
    },
    {
        "id": 957,
        "name": "hexagon",
        "difficulty": 0
    },
    {
        "id": 958,
        "name": "hide_image",
        "difficulty": 2
    },
    {
        "id": 959,
        "name": "hide_source",
        "difficulty": 4
    },
    {
        "id": 960,
        "name": "high_quality",
        "difficulty": 1
    },
    {
        "id": 961,
        "name": "highlight",
        "difficulty": 4
    },
    {
        "id": 962,
        "name": "highlight_alt",
        "difficulty": 8
    },
    {
        "id": 963,
        "name": "highlight_off",
        "difficulty": 4
    },
    {
        "id": 964,
        "name": "highlight_remove",
        "difficulty": 4
    },
    {
        "id": 965,
        "name": "hiking",
        "difficulty": 2
    },
    {
        "id": 966,
        "name": "history",
        "difficulty": 2
    },
    {
        "id": 967,
        "name": "history_edu",
        "difficulty": 4
    },
    {
        "id": 968,
        "name": "history_toggle_off",
        "difficulty": 5
    },
    {
        "id": 969,
        "name": "hive",
        "difficulty": 3
    },
    {
        "id": 970,
        "name": "hls",
        "difficulty": 0
    },
    {
        "id": 971,
        "name": "hls_off",
        "difficulty": 0
    },
    {
        "id": 972,
        "name": "holiday_village",
        "difficulty": 4
    },
    {
        "id": 973,
        "name": "home",
        "difficulty": 1
    },
    {
        "id": 974,
        "name": "home_filled",
        "difficulty": 1
    },
    {
        "id": 975,
        "name": "home_max",
        "difficulty": 8
    },
    {
        "id": 976,
        "name": "home_mini",
        "difficulty": 8
    },
    {
        "id": 977,
        "name": "home_repair_service",
        "difficulty": 3
    },
    {
        "id": 978,
        "name": "home_work",
        "difficulty": 3
    },
    {
        "id": 979,
        "name": "horizontal_distribute",
        "difficulty": 5
    },
    {
        "id": 980,
        "name": "horizontal_rule",
        "difficulty": 5
    },
    {
        "id": 981,
        "name": "horizontal_split",
        "difficulty": 4
    },
    {
        "id": 982,
        "name": "hot_tub",
        "difficulty": 2
    },
    {
        "id": 983,
        "name": "hotel",
        "difficulty": 3
    },
    {
        "id": 984,
        "name": "hotel_class",
        "difficulty": 3
    },
    {
        "id": 985,
        "name": "hourglass_bottom",
        "difficulty": 1
    },
    {
        "id": 986,
        "name": "hourglass_disabled",
        "difficulty": 1
    },
    {
        "id": 987,
        "name": "hourglass_empty",
        "difficulty": 1
    },
    {
        "id": 988,
        "name": "hourglass_full",
        "difficulty": 1
    },
    {
        "id": 989,
        "name": "hourglass_top",
        "difficulty": 1
    },
    {
        "id": 990,
        "name": "house",
        "difficulty": 1
    },
    {
        "id": 991,
        "name": "house_siding",
        "difficulty": 3
    },
    {
        "id": 992,
        "name": "houseboat",
        "difficulty": 2
    },
    {
        "id": 993,
        "name": "how_to_reg",
        "difficulty": 6
    },
    {
        "id": 994,
        "name": "how_to_vote",
        "difficulty": 3
    },
    {
        "id": 995,
        "name": "html",
        "difficulty": 0
    },
    {
        "id": 996,
        "name": "http",
        "difficulty": 0
    },
    {
        "id": 997,
        "name": "https",
        "difficulty": 5
    },
    {
        "id": 998,
        "name": "hub",
        "difficulty": 5
    },
    {
        "id": 999,
        "name": "hvac",
        "difficulty": 5
    },
    {
        "id": 1000,
        "name": "ice_skating",
        "difficulty": 2
    },
    {
        "id": 1001,
        "name": "icecream",
        "difficulty": 3
    },
    {
        "id": 1002,
        "name": "image",
        "difficulty": 1
    },
    {
        "id": 1003,
        "name": "image_aspect_ratio",
        "difficulty": 4
    },
    {
        "id": 1004,
        "name": "image_not_supported",
        "difficulty": 3
    },
    {
        "id": 1005,
        "name": "image_search",
        "difficulty": 2
    },
    {
        "id": 1006,
        "name": "imagesearch_roller",
        "difficulty": 4
    },
    {
        "id": 1007,
        "name": "import_contacts",
        "difficulty": 7
    },
    {
        "id": 1008,
        "name": "import_export",
        "difficulty": 3
    },
    {
        "id": 1009,
        "name": "important_devices",
        "difficulty": 3
    },
    {
        "id": 1010,
        "name": "inbox",
        "difficulty": 2
    },
    {
        "id": 1011,
        "name": "incomplete_circle",
        "difficulty": 2
    },
    {
        "id": 1012,
        "name": "indeterminate_check_box",
        "difficulty": 5
    },
    {
        "id": 1013,
        "name": "info",
        "difficulty": 1
    },
    {
        "id": 1014,
        "name": "info_outline",
        "difficulty": 1
    },
    {
        "id": 1015,
        "name": "input",
        "difficulty": 4
    },
    {
        "id": 1016,
        "name": "insert_chart",
        "difficulty": 3
    },
    {
        "id": 1017,
        "name": "insert_chart_outlined",
        "difficulty": 3
    },
    {
        "id": 1018,
        "name": "insert_comment",
        "difficulty": 3
    },
    {
        "id": 1019,
        "name": "insert_drive_file",
        "difficulty": 4
    },
    {
        "id": 1020,
        "name": "insert_emoticon",
        "difficulty": 2
    },
    {
        "id": 1021,
        "name": "insert_invitation",
        "difficulty": 6
    },
    {
        "id": 1022,
        "name": "insert_link",
        "difficulty": 2
    },
    {
        "id": 1023,
        "name": "insert_page_break",
        "difficulty": 3
    },
    {
        "id": 1024,
        "name": "insert_photo",
        "difficulty": 2
    },
    {
        "id": 1025,
        "name": "insights",
        "difficulty": 6
    },
    {
        "id": 1026,
        "name": "install_desktop",
        "difficulty": 3
    },
    {
        "id": 1027,
        "name": "install_mobile",
        "difficulty": 3
    },
    {
        "id": 1028,
        "name": "integration_instructions",
        "difficulty": 8
    },
    {
        "id": 1029,
        "name": "interests",
        "difficulty": 6
    },
    {
        "id": 1030,
        "name": "interpreter_mode",
        "difficulty": 5
    },
    {
        "id": 1031,
        "name": "inventory",
        "difficulty": 5
    },
    {
        "id": 1032,
        "name": "inventory_2",
        "difficulty": 5
    },
    {
        "id": 1033,
        "name": "invert_colors",
        "difficulty": 5
    },
    {
        "id": 1034,
        "name": "invert_colors_off",
        "difficulty": 4
    },
    {
        "id": 1035,
        "name": "invert_colors_on",
        "difficulty": 5
    },
    {
        "id": 1036,
        "name": "ios_share",
        "difficulty": 4
    },
    {
        "id": 1037,
        "name": "iron",
        "difficulty": 2
    },
    {
        "id": 1038,
        "name": "iso",
        "difficulty": 4
    },
    {
        "id": 1039,
        "name": "javascript",
        "difficulty": 1
    },
    {
        "id": 1040,
        "name": "join_full",
        "difficulty": 3
    },
    {
        "id": 1041,
        "name": "join_inner",
        "difficulty": 2
    },
    {
        "id": 1042,
        "name": "join_left",
        "difficulty": 2
    },
    {
        "id": 1043,
        "name": "join_right",
        "difficulty": 2
    },
    {
        "id": 1044,
        "name": "kayaking",
        "difficulty": 1
    },
    {
        "id": 1045,
        "name": "kebab_dining",
        "difficulty": 3
    },
    {
        "id": 1046,
        "name": "key",
        "difficulty": 1
    },
    {
        "id": 1047,
        "name": "key_off",
        "difficulty": 1
    },
    {
        "id": 1048,
        "name": "keyboard",
        "difficulty": 1
    },
    {
        "id": 1049,
        "name": "keyboard_alt",
        "difficulty": 1
    },
    {
        "id": 1050,
        "name": "keyboard_arrow_down",
        "difficulty": 1
    },
    {
        "id": 1051,
        "name": "keyboard_arrow_left",
        "difficulty": 1
    },
    {
        "id": 1052,
        "name": "keyboard_arrow_right",
        "difficulty": 1
    },
    {
        "id": 1053,
        "name": "keyboard_arrow_up",
        "difficulty": 1
    },
    {
        "id": 1054,
        "name": "keyboard_backspace",
        "difficulty": 1
    },
    {
        "id": 1055,
        "name": "keyboard_capslock",
        "difficulty": 3
    },
    {
        "id": 1056,
        "name": "keyboard_command",
        "difficulty": 5
    },
    {
        "id": 1057,
        "name": "keyboard_command_key",
        "difficulty": 5
    },
    {
        "id": 1058,
        "name": "keyboard_control",
        "difficulty": 7
    },
    {
        "id": 1059,
        "name": "keyboard_control_key",
        "difficulty": 7
    },
    {
        "id": 1060,
        "name": "keyboard_double_arrow_down",
        "difficulty": 2
    },
    {
        "id": 1061,
        "name": "keyboard_double_arrow_left",
        "difficulty": 2
    },
    {
        "id": 1062,
        "name": "keyboard_double_arrow_right",
        "difficulty": 2
    },
    {
        "id": 1063,
        "name": "keyboard_double_arrow_up",
        "difficulty": 2
    },
    {
        "id": 1064,
        "name": "keyboard_hide",
        "difficulty": 4
    },
    {
        "id": 1065,
        "name": "keyboard_option",
        "difficulty": 5
    },
    {
        "id": 1066,
        "name": "keyboard_option_key",
        "difficulty": 5
    },
    {
        "id": 1067,
        "name": "keyboard_return",
        "difficulty": 3
    },
    {
        "id": 1068,
        "name": "keyboard_tab",
        "difficulty": 3
    },
    {
        "id": 1069,
        "name": "keyboard_voice",
        "difficulty": 5
    },
    {
        "id": 1070,
        "name": "king_bed",
        "difficulty": 4
    },
    {
        "id": 1071,
        "name": "kitchen",
        "difficulty": 3
    },
    {
        "id": 1072,
        "name": "kitesurfing",
        "difficulty": 1
    },
    {
        "id": 1073,
        "name": "label",
        "difficulty": 4
    },
    {
        "id": 1074,
        "name": "label_important",
        "difficulty": 5
    },
    {
        "id": 1075,
        "name": "label_important_outline",
        "difficulty": 5
    },
    {
        "id": 1076,
        "name": "label_off",
        "difficulty": 3
    },
    {
        "id": 1077,
        "name": "label_outline",
        "difficulty": 4
    },
    {
        "id": 1078,
        "name": "lan",
        "difficulty": 5
    },
    {
        "id": 1079,
        "name": "landscape",
        "difficulty": 2
    },
    {
        "id": 1080,
        "name": "landslide",
        "difficulty": 6
    },
    {
        "id": 1081,
        "name": "language",
        "difficulty": 3
    },
    {
        "id": 1082,
        "name": "laptop",
        "difficulty": 1
    },
    {
        "id": 1083,
        "name": "laptop_chromebook",
        "difficulty": 1
    },
    {
        "id": 1084,
        "name": "laptop_mac",
        "difficulty": 1
    },
    {
        "id": 1085,
        "name": "laptop_windows",
        "difficulty": 1
    },
    {
        "id": 1086,
        "name": "last_page",
        "difficulty": 3
    },
    {
        "id": 1087,
        "name": "launch",
        "difficulty": 4
    },
    {
        "id": 1088,
        "name": "layers",
        "difficulty": 2
    },
    {
        "id": 1089,
        "name": "layers_clear",
        "difficulty": 2
    },
    {
        "id": 1090,
        "name": "leaderboard",
        "difficulty": 3
    },
    {
        "id": 1091,
        "name": "leak_add",
        "difficulty": 8
    },
    {
        "id": 1092,
        "name": "leak_remove",
        "difficulty": 7
    },
    {
        "id": 1093,
        "name": "leave_bags_at_home",
        "difficulty": 3
    },
    {
        "id": 1094,
        "name": "legend_toggle",
        "difficulty": 6
    },
    {
        "id": 1095,
        "name": "lens",
        "difficulty": 7
    },
    {
        "id": 1096,
        "name": "lens_blur",
        "difficulty": 5
    },
    {
        "id": 1097,
        "name": "library_add",
        "difficulty": 2
    },
    {
        "id": 1098,
        "name": "library_add_check",
        "difficulty": 2
    },
    {
        "id": 1099,
        "name": "library_books",
        "difficulty": 3
    },
    {
        "id": 1100,
        "name": "library_music",
        "difficulty": 2
    },
    {
        "id": 1101,
        "name": "light",
        "difficulty": 2
    },
    {
        "id": 1102,
        "name": "light_mode",
        "difficulty": 2
    },
    {
        "id": 1103,
        "name": "lightbulb",
        "difficulty": 1
    },
    {
        "id": 1104,
        "name": "lightbulb_circle",
        "difficulty": 1
    },
    {
        "id": 1105,
        "name": "lightbulb_outline",
        "difficulty": 1
    },
    {
        "id": 1106,
        "name": "line_axis",
        "difficulty": 3
    },
    {
        "id": 1107,
        "name": "line_style",
        "difficulty": 4
    },
    {
        "id": 1108,
        "name": "line_weight",
        "difficulty": 4
    },
    {
        "id": 1109,
        "name": "linear_scale",
        "difficulty": 6
    },
    {
        "id": 1110,
        "name": "link",
        "difficulty": 1
    },
    {
        "id": 1111,
        "name": "link_off",
        "difficulty": 1
    },
    {
        "id": 1112,
        "name": "linked_camera",
        "difficulty": 3
    },
    {
        "id": 1113,
        "name": "liquor",
        "difficulty": 2
    },
    {
        "id": 1114,
        "name": "list",
        "difficulty": 1
    },
    {
        "id": 1115,
        "name": "list_alt",
        "difficulty": 1
    },
    {
        "id": 1116,
        "name": "live_help",
        "difficulty": 3
    },
    {
        "id": 1117,
        "name": "live_tv",
        "difficulty": 3
    },
    {
        "id": 1118,
        "name": "living",
        "difficulty": 5
    },
    {
        "id": 1119,
        "name": "local_activity",
        "difficulty": 6
    },
    {
        "id": 1120,
        "name": "local_airport",
        "difficulty": 1
    },
    {
        "id": 1121,
        "name": "local_atm",
        "difficulty": 4
    },
    {
        "id": 1122,
        "name": "local_attraction",
        "difficulty": 6
    },
    {
        "id": 1123,
        "name": "local_bar",
        "difficulty": 2
    },
    {
        "id": 1124,
        "name": "local_cafe",
        "difficulty": 2
    },
    {
        "id": 1125,
        "name": "local_car_wash",
        "difficulty": 2
    },
    {
        "id": 1126,
        "name": "local_convenience_store",
        "difficulty": 4
    },
    {
        "id": 1127,
        "name": "local_dining",
        "difficulty": 2
    },
    {
        "id": 1128,
        "name": "local_drink",
        "difficulty": 3
    },
    {
        "id": 1129,
        "name": "local_fire_department",
        "difficulty": 2
    },
    {
        "id": 1130,
        "name": "local_florist",
        "difficulty": 3
    },
    {
        "id": 1131,
        "name": "local_gas_station",
        "difficulty": 2
    },
    {
        "id": 1132,
        "name": "local_grocery_store",
        "difficulty": 2
    },
    {
        "id": 1133,
        "name": "local_hospital",
        "difficulty": 2
    },
    {
        "id": 1134,
        "name": "local_hotel",
        "difficulty": 2
    },
    {
        "id": 1135,
        "name": "local_laundry_service",
        "difficulty": 2
    },
    {
        "id": 1136,
        "name": "local_library",
        "difficulty": 4
    },
    {
        "id": 1137,
        "name": "local_mall",
        "difficulty": 3
    },
    {
        "id": 1138,
        "name": "local_movies",
        "difficulty": 3
    },
    {
        "id": 1139,
        "name": "local_offer",
        "difficulty": 5
    },
    {
        "id": 1140,
        "name": "local_parking",
        "difficulty": 2
    },
    {
        "id": 1141,
        "name": "local_pharmacy",
        "difficulty": 3
    },
    {
        "id": 1142,
        "name": "local_phone",
        "difficulty": 1
    },
    {
        "id": 1143,
        "name": "local_pizza",
        "difficulty": 2
    },
    {
        "id": 1144,
        "name": "local_play",
        "difficulty": 5
    },
    {
        "id": 1145,
        "name": "local_police",
        "difficulty": 3
    },
    {
        "id": 1146,
        "name": "local_post_office",
        "difficulty": 2
    },
    {
        "id": 1147,
        "name": "local_print_shop",
        "difficulty": 2
    },
    {
        "id": 1148,
        "name": "local_printshop",
        "difficulty": 2
    },
    {
        "id": 1149,
        "name": "local_restaurant",
        "difficulty": 2
    },
    {
        "id": 1150,
        "name": "local_see",
        "difficulty": 7
    },
    {
        "id": 1151,
        "name": "local_shipping",
        "difficulty": 3
    },
    {
        "id": 1152,
        "name": "local_taxi",
        "difficulty": 2
    },
    {
        "id": 1153,
        "name": "location_city",
        "difficulty": 3
    },
    {
        "id": 1154,
        "name": "location_disabled",
        "difficulty": 3
    },
    {
        "id": 1155,
        "name": "location_history",
        "difficulty": 5
    },
    {
        "id": 1156,
        "name": "location_off",
        "difficulty": 2
    },
    {
        "id": 1157,
        "name": "location_on",
        "difficulty": 2
    },
    {
        "id": 1158,
        "name": "location_pin",
        "difficulty": 2
    },
    {
        "id": 1159,
        "name": "location_searching",
        "difficulty": 5
    },
    {
        "id": 1160,
        "name": "lock",
        "difficulty": 1
    },
    {
        "id": 1161,
        "name": "lock_clock",
        "difficulty": 0
    },
    {
        "id": 1162,
        "name": "lock_open",
        "difficulty": 0
    },
    {
        "id": 1163,
        "name": "lock_outline",
        "difficulty": 0
    },
    {
        "id": 1164,
        "name": "lock_person",
        "difficulty": 0
    },
    {
        "id": 1165,
        "name": "lock_reset",
        "difficulty": 1
    },
    {
        "id": 1166,
        "name": "login",
        "difficulty": 2
    },
    {
        "id": 1167,
        "name": "logo_dev",
        "difficulty": 1
    },
    {
        "id": 1168,
        "name": "logout",
        "difficulty": 2
    },
    {
        "id": 1169,
        "name": "looks",
        "difficulty": 8
    },
    {
        "id": 1170,
        "name": "looks_3",
        "difficulty": 1
    },
    {
        "id": 1171,
        "name": "looks_4",
        "difficulty": 1
    },
    {
        "id": 1172,
        "name": "looks_5",
        "difficulty": 1
    },
    {
        "id": 1173,
        "name": "looks_6",
        "difficulty": 1
    },
    {
        "id": 1174,
        "name": "looks_one",
        "difficulty": 1
    },
    {
        "id": 1175,
        "name": "looks_two",
        "difficulty": 1
    },
    {
        "id": 1176,
        "name": "loop",
        "difficulty": 3
    },
    {
        "id": 1177,
        "name": "loupe",
        "difficulty": 4
    },
    {
        "id": 1178,
        "name": "low_priority",
        "difficulty": 3
    },
    {
        "id": 1179,
        "name": "loyalty",
        "difficulty": 5
    },
    {
        "id": 1180,
        "name": "lte_mobiledata",
        "difficulty": 1
    },
    {
        "id": 1181,
        "name": "lte_plus_mobiledata",
        "difficulty": 1
    },
    {
        "id": 1182,
        "name": "luggage",
        "difficulty": 2
    },
    {
        "id": 1183,
        "name": "lunch_dining",
        "difficulty": 2
    },
    {
        "id": 1184,
        "name": "lyrics",
        "difficulty": 2
    },
    {
        "id": 1185,
        "name": "macro_off",
        "difficulty": 6
    },
    {
        "id": 1186,
        "name": "mail",
        "difficulty": 1
    },
    {
        "id": 1187,
        "name": "mail_lock",
        "difficulty": 1
    },
    {
        "id": 1188,
        "name": "mail_outline",
        "difficulty": 1
    },
    {
        "id": 1189,
        "name": "male",
        "difficulty": 1
    },
    {
        "id": 1190,
        "name": "man",
        "difficulty": 1
    },
    {
        "id": 1191,
        "name": "man_2",
        "difficulty": 1
    },
    {
        "id": 1192,
        "name": "man_3",
        "difficulty": 1
    },
    {
        "id": 1193,
        "name": "man_4",
        "difficulty": 2
    },
    {
        "id": 1194,
        "name": "manage_accounts",
        "difficulty": 2
    },
    {
        "id": 1195,
        "name": "manage_history",
        "difficulty": 3
    },
    {
        "id": 1196,
        "name": "manage_search",
        "difficulty": 3
    },
    {
        "id": 1197,
        "name": "map",
        "difficulty": 2
    },
    {
        "id": 1198,
        "name": "maps_home_work",
        "difficulty": 4
    },
    {
        "id": 1199,
        "name": "maps_ugc",
        "difficulty": 7
    },
    {
        "id": 1200,
        "name": "margin",
        "difficulty": 6
    },
    {
        "id": 1201,
        "name": "mark_as_unread",
        "difficulty": 4
    },
    {
        "id": 1202,
        "name": "mark_chat_read",
        "difficulty": 2
    },
    {
        "id": 1203,
        "name": "mark_chat_unread",
        "difficulty": 2
    },
    {
        "id": 1204,
        "name": "mark_email_read",
        "difficulty": 1
    },
    {
        "id": 1205,
        "name": "mark_email_unread",
        "difficulty": 1
    },
    {
        "id": 1206,
        "name": "mark_unread_chat_alt",
        "difficulty": 2
    },
    {
        "id": 1207,
        "name": "markunread",
        "difficulty": 4
    },
    {
        "id": 1208,
        "name": "markunread_mailbox",
        "difficulty": 2
    },
    {
        "id": 1209,
        "name": "masks",
        "difficulty": 3
    },
    {
        "id": 1210,
        "name": "maximize",
        "difficulty": 9
    },
    {
        "id": 1211,
        "name": "media_bluetooth_off",
        "difficulty": 1
    },
    {
        "id": 1212,
        "name": "media_bluetooth_on",
        "difficulty": 1
    },
    {
        "id": 1213,
        "name": "mediation",
        "difficulty": 6
    },
    {
        "id": 1214,
        "name": "medical_information",
        "difficulty": 2
    },
    {
        "id": 1215,
        "name": "medical_services",
        "difficulty": 2
    },
    {
        "id": 1216,
        "name": "medication",
        "difficulty": 3
    },
    {
        "id": 1217,
        "name": "medication_liquid",
        "difficulty": 3
    },
    {
        "id": 1218,
        "name": "meeting_room",
        "difficulty": 6
    },
    {
        "id": 1219,
        "name": "memory",
        "difficulty": 5
    },
    {
        "id": 1220,
        "name": "menu",
        "difficulty": 2
    },
    {
        "id": 1221,
        "name": "menu_book",
        "difficulty": 4
    },
    {
        "id": 1222,
        "name": "menu_open",
        "difficulty": 3
    },
    {
        "id": 1223,
        "name": "merge",
        "difficulty": 3
    },
    {
        "id": 1224,
        "name": "merge_type",
        "difficulty": 3
    },
    {
        "id": 1225,
        "name": "message",
        "difficulty": 1
    },
    {
        "id": 1226,
        "name": "messenger",
        "difficulty": 2
    },
    {
        "id": 1227,
        "name": "messenger_outline",
        "difficulty": 2
    },
    {
        "id": 1228,
        "name": "mic",
        "difficulty": 1
    },
    {
        "id": 1229,
        "name": "mic_external_off",
        "difficulty": 1
    },
    {
        "id": 1230,
        "name": "mic_external_on",
        "difficulty": 2
    },
    {
        "id": 1231,
        "name": "mic_none",
        "difficulty": 2
    },
    {
        "id": 1232,
        "name": "mic_off",
        "difficulty": 2
    },
    {
        "id": 1233,
        "name": "microwave",
        "difficulty": 3
    },
    {
        "id": 1234,
        "name": "military_tech",
        "difficulty": 4
    },
    {
        "id": 1235,
        "name": "minimize",
        "difficulty": 3
    },
    {
        "id": 1236,
        "name": "minor_crash",
        "difficulty": 3
    },
    {
        "id": 1237,
        "name": "miscellaneous_services",
        "difficulty": 7
    },
    {
        "id": 1238,
        "name": "missed_video_call",
        "difficulty": 4
    },
    {
        "id": 1239,
        "name": "mms",
        "difficulty": 4
    },
    {
        "id": 1240,
        "name": "mobile_friendly",
        "difficulty": 3
    },
    {
        "id": 1241,
        "name": "mobile_off",
        "difficulty": 1
    },
    {
        "id": 1242,
        "name": "mobile_screen_share",
        "difficulty": 2
    },
    {
        "id": 1243,
        "name": "mobiledata_off",
        "difficulty": 5
    },
    {
        "id": 1244,
        "name": "mode",
        "difficulty": 8
    },
    {
        "id": 1245,
        "name": "mode_comment",
        "difficulty": 2
    },
    {
        "id": 1246,
        "name": "mode_edit",
        "difficulty": 2
    },
    {
        "id": 1247,
        "name": "mode_edit_outline",
        "difficulty": 2
    },
    {
        "id": 1248,
        "name": "mode_fan_off",
        "difficulty": 4
    },
    {
        "id": 1249,
        "name": "mode_night",
        "difficulty": 3
    },
    {
        "id": 1250,
        "name": "mode_of_travel",
        "difficulty": 5
    },
    {
        "id": 1251,
        "name": "mode_standby",
        "difficulty": 8
    },
    {
        "id": 1252,
        "name": "model_training",
        "difficulty": 6
    },
    {
        "id": 1253,
        "name": "monetization_on",
        "difficulty": 3
    },
    {
        "id": 1254,
        "name": "money",
        "difficulty": 3
    },
    {
        "id": 1255,
        "name": "money_off",
        "difficulty": 1
    },
    {
        "id": 1256,
        "name": "money_off_csred",
        "difficulty": 2
    },
    {
        "id": 1257,
        "name": "monitor",
        "difficulty": 1
    },
    {
        "id": 1258,
        "name": "monitor_heart",
        "difficulty": 3
    },
    {
        "id": 1259,
        "name": "monitor_weight",
        "difficulty": 5
    },
    {
        "id": 1260,
        "name": "monochrome_photos",
        "difficulty": 3
    },
    {
        "id": 1261,
        "name": "mood",
        "difficulty": 2
    },
    {
        "id": 1262,
        "name": "mood_bad",
        "difficulty": 1
    },
    {
        "id": 1263,
        "name": "moped",
        "difficulty": 1
    },
    {
        "id": 1264,
        "name": "more",
        "difficulty": 4
    },
    {
        "id": 1265,
        "name": "more_horiz",
        "difficulty": 3
    },
    {
        "id": 1266,
        "name": "more_time",
        "difficulty": 1
    },
    {
        "id": 1267,
        "name": "more_vert",
        "difficulty": 3
    },
    {
        "id": 1268,
        "name": "mosque",
        "difficulty": 1
    },
    {
        "id": 1269,
        "name": "motion_photos_auto",
        "difficulty": 6
    },
    {
        "id": 1270,
        "name": "motion_photos_off",
        "difficulty": 7
    },
    {
        "id": 1271,
        "name": "motion_photos_on",
        "difficulty": 6
    },
    {
        "id": 1272,
        "name": "motion_photos_pause",
        "difficulty": 4
    },
    {
        "id": 1273,
        "name": "motion_photos_paused",
        "difficulty": 4
    },
    {
        "id": 1274,
        "name": "motorcycle",
        "difficulty": 2
    },
    {
        "id": 1275,
        "name": "mouse",
        "difficulty": 1
    },
    {
        "id": 1276,
        "name": "move_down",
        "difficulty": 3
    },
    {
        "id": 1277,
        "name": "move_to_inbox",
        "difficulty": 2
    },
    {
        "id": 1278,
        "name": "move_up",
        "difficulty": 2
    },
    {
        "id": 1279,
        "name": "movie",
        "difficulty": 1
    },
    {
        "id": 1280,
        "name": "movie_creation",
        "difficulty": 1
    },
    {
        "id": 1281,
        "name": "movie_edit",
        "difficulty": 2
    },
    {
        "id": 1282,
        "name": "movie_filter",
        "difficulty": 3
    },
    {
        "id": 1283,
        "name": "moving",
        "difficulty": 8
    },
    {
        "id": 1284,
        "name": "mp",
        "difficulty": 0
    },
    {
        "id": 1285,
        "name": "multiline_chart",
        "difficulty": 4
    },
    {
        "id": 1286,
        "name": "multiple_stop",
        "difficulty": 5
    },
    {
        "id": 1287,
        "name": "multitrack_audio",
        "difficulty": 6
    },
    {
        "id": 1288,
        "name": "museum",
        "difficulty": 3
    },
    {
        "id": 1289,
        "name": "music_note",
        "difficulty": 1
    },
    {
        "id": 1290,
        "name": "music_off",
        "difficulty": 1
    },
    {
        "id": 1291,
        "name": "music_video",
        "difficulty": 2
    },
    {
        "id": 1292,
        "name": "my_library_add",
        "difficulty": 2
    },
    {
        "id": 1293,
        "name": "my_library_books",
        "difficulty": 6
    },
    {
        "id": 1294,
        "name": "my_library_music",
        "difficulty": 2
    },
    {
        "id": 1295,
        "name": "my_location",
        "difficulty": 4
    },
    {
        "id": 1296,
        "name": "nat",
        "difficulty": 7
    },
    {
        "id": 1297,
        "name": "nature",
        "difficulty": 8
    },
    {
        "id": 1298,
        "name": "nature_people",
        "difficulty": 4
    },
    {
        "id": 1299,
        "name": "navigate_before",
        "difficulty": 3
    },
    {
        "id": 1300,
        "name": "navigate_next",
        "difficulty": 3
    },
    {
        "id": 1301,
        "name": "navigation",
        "difficulty": 4
    },
    {
        "id": 1302,
        "name": "near_me",
        "difficulty": 6
    },
    {
        "id": 1303,
        "name": "near_me_disabled",
        "difficulty": 5
    },
    {
        "id": 1304,
        "name": "nearby_error",
        "difficulty": 4
    },
    {
        "id": 1305,
        "name": "nearby_off",
        "difficulty": 5
    },
    {
        "id": 1306,
        "name": "nest_cam_wired_stand",
        "difficulty": 7
    },
    {
        "id": 1307,
        "name": "network_cell",
        "difficulty": 6
    },
    {
        "id": 1308,
        "name": "network_check",
        "difficulty": 5
    },
    {
        "id": 1309,
        "name": "network_locked",
        "difficulty": 3
    },
    {
        "id": 1310,
        "name": "network_ping",
        "difficulty": 5
    },
    {
        "id": 1311,
        "name": "network_wifi",
        "difficulty": 3
    },
    {
        "id": 1312,
        "name": "network_wifi_1_bar",
        "difficulty": 2
    },
    {
        "id": 1313,
        "name": "network_wifi_2_bar",
        "difficulty": 2
    },
    {
        "id": 1314,
        "name": "network_wifi_3_bar",
        "difficulty": 2
    },
    {
        "id": 1315,
        "name": "new_label",
        "difficulty": 2
    },
    {
        "id": 1316,
        "name": "new_releases",
        "difficulty": 5
    },
    {
        "id": 1317,
        "name": "newspaper",
        "difficulty": 3
    },
    {
        "id": 1318,
        "name": "next_plan",
        "difficulty": 6
    },
    {
        "id": 1319,
        "name": "next_week",
        "difficulty": 6
    },
    {
        "id": 1320,
        "name": "nfc",
        "difficulty": 7
    },
    {
        "id": 1321,
        "name": "night_shelter",
        "difficulty": 2
    },
    {
        "id": 1322,
        "name": "nightlife",
        "difficulty": 3
    },
    {
        "id": 1323,
        "name": "nightlight",
        "difficulty": 3
    },
    {
        "id": 1324,
        "name": "nightlight_round",
        "difficulty": 4
    },
    {
        "id": 1325,
        "name": "nights_stay",
        "difficulty": 3
    },
    {
        "id": 1326,
        "name": "no_accounts",
        "difficulty": 2
    },
    {
        "id": 1327,
        "name": "no_adult_content",
        "difficulty": 2
    },
    {
        "id": 1328,
        "name": "no_backpack",
        "difficulty": 2
    },
    {
        "id": 1329,
        "name": "no_cell",
        "difficulty": 3
    },
    {
        "id": 1330,
        "name": "no_crash",
        "difficulty": 4
    },
    {
        "id": 1331,
        "name": "no_drinks",
        "difficulty": 2
    },
    {
        "id": 1332,
        "name": "no_encryption",
        "difficulty": 3
    },
    {
        "id": 1333,
        "name": "no_encryption_gmailerrorred",
        "difficulty": 4
    },
    {
        "id": 1334,
        "name": "no_flash",
        "difficulty": 2
    },
    {
        "id": 1335,
        "name": "no_food",
        "difficulty": 1
    },
    {
        "id": 1336,
        "name": "no_luggage",
        "difficulty": 2
    },
    {
        "id": 1337,
        "name": "no_meals",
        "difficulty": 2
    },
    {
        "id": 1338,
        "name": "no_meals_ouline",
        "difficulty": 2
    },
    {
        "id": 1339,
        "name": "no_meeting_room",
        "difficulty": 5
    },
    {
        "id": 1340,
        "name": "no_photography",
        "difficulty": 1
    },
    {
        "id": 1341,
        "name": "no_sim",
        "difficulty": 2
    },
    {
        "id": 1342,
        "name": "no_stroller",
        "difficulty": 2
    },
    {
        "id": 1343,
        "name": "no_transfer",
        "difficulty": 3
    },
    {
        "id": 1344,
        "name": "noise_aware",
        "difficulty": 7
    },
    {
        "id": 1345,
        "name": "noise_control_off",
        "difficulty": 9
    },
    {
        "id": 1346,
        "name": "nordic_walking",
        "difficulty": 3
    },
    {
        "id": 1347,
        "name": "north",
        "difficulty": 2
    },
    {
        "id": 1348,
        "name": "north_east",
        "difficulty": 2
    },
    {
        "id": 1349,
        "name": "north_west",
        "difficulty": 2
    },
    {
        "id": 1350,
        "name": "not_accessible",
        "difficulty": 1
    },
    {
        "id": 1351,
        "name": "not_interested",
        "difficulty": 2
    },
    {
        "id": 1352,
        "name": "not_listed_location",
        "difficulty": 2
    },
    {
        "id": 1353,
        "name": "not_started",
        "difficulty": 4
    },
    {
        "id": 1354,
        "name": "note",
        "difficulty": 2
    },
    {
        "id": 1355,
        "name": "note_add",
        "difficulty": 2
    },
    {
        "id": 1356,
        "name": "note_alt",
        "difficulty": 2
    },
    {
        "id": 1357,
        "name": "notes",
        "difficulty": 3
    },
    {
        "id": 1358,
        "name": "notification_add",
        "difficulty": 1
    },
    {
        "id": 1359,
        "name": "notification_important",
        "difficulty": 1
    },
    {
        "id": 1360,
        "name": "notifications",
        "difficulty": 1
    },
    {
        "id": 1361,
        "name": "notifications_active",
        "difficulty": 1
    },
    {
        "id": 1362,
        "name": "notifications_none",
        "difficulty": 1
    },
    {
        "id": 1363,
        "name": "notifications_off",
        "difficulty": 1
    },
    {
        "id": 1364,
        "name": "notifications_on",
        "difficulty": 1
    },
    {
        "id": 1365,
        "name": "notifications_paused",
        "difficulty": 2
    },
    {
        "id": 1366,
        "name": "now_wallpaper",
        "difficulty": 3
    },
    {
        "id": 1367,
        "name": "now_widgets",
        "difficulty": 7
    },
    {
        "id": 1368,
        "name": "numbers",
        "difficulty": 4
    },
    {
        "id": 1369,
        "name": "offline_bolt",
        "difficulty": 3
    },
    {
        "id": 1370,
        "name": "offline_pin",
        "difficulty": 8
    },
    {
        "id": 1371,
        "name": "offline_share",
        "difficulty": 2
    },
    {
        "id": 1372,
        "name": "oil_barrel",
        "difficulty": 1
    },
    {
        "id": 1373,
        "name": "on_device_training",
        "difficulty": 3
    },
    {
        "id": 1374,
        "name": "ondemand_video",
        "difficulty": 2
    },
    {
        "id": 1375,
        "name": "online_prediction",
        "difficulty": 7
    },
    {
        "id": 1376,
        "name": "opacity",
        "difficulty": 4
    },
    {
        "id": 1377,
        "name": "open_in_browser",
        "difficulty": 4
    },
    {
        "id": 1378,
        "name": "open_in_full",
        "difficulty": 4
    },
    {
        "id": 1379,
        "name": "open_in_new",
        "difficulty": 5
    },
    {
        "id": 1380,
        "name": "open_in_new_off",
        "difficulty": 5
    },
    {
        "id": 1381,
        "name": "open_with",
        "difficulty": 7
    },
    {
        "id": 1382,
        "name": "other_houses",
        "difficulty": 3
    },
    {
        "id": 1383,
        "name": "outbond",
        "difficulty": 4
    },
    {
        "id": 1384,
        "name": "outbound",
        "difficulty": 4
    },
    {
        "id": 1385,
        "name": "outbox",
        "difficulty": 2
    },
    {
        "id": 1386,
        "name": "outdoor_grill",
        "difficulty": 1
    },
    {
        "id": 1387,
        "name": "outgoing_mail",
        "difficulty": 1
    },
    {
        "id": 1388,
        "name": "outlet",
        "difficulty": 3
    },
    {
        "id": 1389,
        "name": "outlined_flag",
        "difficulty": 1
    },
    {
        "id": 1390,
        "name": "output",
        "difficulty": 4
    },
    {
        "id": 1391,
        "name": "padding",
        "difficulty": 6
    },
    {
        "id": 1392,
        "name": "pages",
        "difficulty": 8
    },
    {
        "id": 1393,
        "name": "pageview",
        "difficulty": 6
    },
    {
        "id": 1394,
        "name": "paid",
        "difficulty": 3
    },
    {
        "id": 1395,
        "name": "palette",
        "difficulty": 2
    },
    {
        "id": 1396,
        "name": "pallet",
        "difficulty": 3
    },
    {
        "id": 1397,
        "name": "pan_tool",
        "difficulty": 3
    },
    {
        "id": 1398,
        "name": "pan_tool_alt",
        "difficulty": 5
    },
    {
        "id": 1399,
        "name": "panorama",
        "difficulty": 2
    },
    {
        "id": 1400,
        "name": "panorama_fish_eye",
        "difficulty": 8
    },
    {
        "id": 1401,
        "name": "panorama_fisheye",
        "difficulty": 8
    },
    {
        "id": 1402,
        "name": "panorama_horizontal",
        "difficulty": 2
    },
    {
        "id": 1403,
        "name": "panorama_horizontal_select",
        "difficulty": 2
    },
    {
        "id": 1404,
        "name": "panorama_photosphere",
        "difficulty": 2
    },
    {
        "id": 1405,
        "name": "panorama_photosphere_select",
        "difficulty": 2
    },
    {
        "id": 1406,
        "name": "panorama_vertical",
        "difficulty": 2
    },
    {
        "id": 1407,
        "name": "panorama_vertical_select",
        "difficulty": 2
    },
    {
        "id": 1408,
        "name": "panorama_wide_angle",
        "difficulty": 3
    },
    {
        "id": 1409,
        "name": "panorama_wide_angle_select",
        "difficulty": 3
    },
    {
        "id": 1410,
        "name": "paragliding",
        "difficulty": 1
    },
    {
        "id": 1411,
        "name": "park",
        "difficulty": 2
    },
    {
        "id": 1412,
        "name": "party_mode",
        "difficulty": 6
    },
    {
        "id": 1413,
        "name": "password",
        "difficulty": 2
    },
    {
        "id": 1414,
        "name": "pattern",
        "difficulty": 2
    },
    {
        "id": 1415,
        "name": "pause",
        "difficulty": 1
    },
    {
        "id": 1416,
        "name": "pause_circle",
        "difficulty": 1
    },
    {
        "id": 1417,
        "name": "pause_circle_filled",
        "difficulty": 1
    },
    {
        "id": 1418,
        "name": "pause_circle_outline",
        "difficulty": 1
    },
    {
        "id": 1419,
        "name": "pause_presentation",
        "difficulty": 1
    },
    {
        "id": 1420,
        "name": "payment",
        "difficulty": 3
    },
    {
        "id": 1421,
        "name": "payments",
        "difficulty": 5
    },
    {
        "id": 1422,
        "name": "paypal",
        "difficulty": 1
    },
    {
        "id": 1423,
        "name": "pedal_bike",
        "difficulty": 1
    },
    {
        "id": 1424,
        "name": "pending",
        "difficulty": 4
    },
    {
        "id": 1425,
        "name": "pending_actions",
        "difficulty": 4
    },
    {
        "id": 1426,
        "name": "pentagon",
        "difficulty": 1
    },
    {
        "id": 1427,
        "name": "people",
        "difficulty": 3
    },
    {
        "id": 1428,
        "name": "people_alt",
        "difficulty": 3
    },
    {
        "id": 1429,
        "name": "people_outline",
        "difficulty": 3
    },
    {
        "id": 1430,
        "name": "percent",
        "difficulty": 0
    },
    {
        "id": 1431,
        "name": "perm_camera_mic",
        "difficulty": 2
    },
    {
        "id": 1432,
        "name": "perm_contact_cal",
        "difficulty": 3
    },
    {
        "id": 1433,
        "name": "perm_contact_calendar",
        "difficulty": 4
    },
    {
        "id": 1434,
        "name": "perm_data_setting",
        "difficulty": 3
    },
    {
        "id": 1435,
        "name": "perm_device_info",
        "difficulty": 3
    },
    {
        "id": 1436,
        "name": "perm_device_information",
        "difficulty": 4
    },
    {
        "id": 1437,
        "name": "perm_identity",
        "difficulty": 4
    },
    {
        "id": 1438,
        "name": "perm_media",
        "difficulty": 4
    },
    {
        "id": 1439,
        "name": "perm_phone_msg",
        "difficulty": 2
    },
    {
        "id": 1440,
        "name": "perm_scan_wifi",
        "difficulty": 3
    },
    {
        "id": 1441,
        "name": "person",
        "difficulty": 1
    },
    {
        "id": 1442,
        "name": "person_2",
        "difficulty": 1
    },
    {
        "id": 1443,
        "name": "person_3",
        "difficulty": 1
    },
    {
        "id": 1444,
        "name": "person_4",
        "difficulty": 1
    },
    {
        "id": 1445,
        "name": "person_add",
        "difficulty": 1
    },
    {
        "id": 1446,
        "name": "person_add_alt",
        "difficulty": 1
    },
    {
        "id": 1447,
        "name": "person_add_alt_1",
        "difficulty": 1
    },
    {
        "id": 1448,
        "name": "person_add_disabled",
        "difficulty": 1
    },
    {
        "id": 1449,
        "name": "person_off",
        "difficulty": 1
    },
    {
        "id": 1450,
        "name": "person_outline",
        "difficulty": 1
    },
    {
        "id": 1451,
        "name": "person_pin",
        "difficulty": 1
    },
    {
        "id": 1452,
        "name": "person_pin_circle",
        "difficulty": 1
    },
    {
        "id": 1453,
        "name": "person_remove",
        "difficulty": 1
    },
    {
        "id": 1454,
        "name": "person_remove_alt_1",
        "difficulty": 1
    },
    {
        "id": 1455,
        "name": "person_search",
        "difficulty": 1
    },
    {
        "id": 1456,
        "name": "personal_injury",
        "difficulty": 3
    },
    {
        "id": 1457,
        "name": "personal_video",
        "difficulty": 6
    },
    {
        "id": 1458,
        "name": "pest_control",
        "difficulty": 3
    },
    {
        "id": 1459,
        "name": "pest_control_rodent",
        "difficulty": 2
    },
    {
        "id": 1460,
        "name": "pets",
        "difficulty": 2
    },
    {
        "id": 1461,
        "name": "phishing",
        "difficulty": 2
    },
    {
        "id": 1462,
        "name": "phone",
        "difficulty": 1
    },
    {
        "id": 1463,
        "name": "phone_android",
        "difficulty": 1
    },
    {
        "id": 1464,
        "name": "phone_bluetooth_speaker",
        "difficulty": 1
    },
    {
        "id": 1465,
        "name": "phone_callback",
        "difficulty": 2
    },
    {
        "id": 1466,
        "name": "phone_disabled",
        "difficulty": 1
    },
    {
        "id": 1467,
        "name": "phone_enabled",
        "difficulty": 1
    },
    {
        "id": 1468,
        "name": "phone_forwarded",
        "difficulty": 1
    },
    {
        "id": 1469,
        "name": "phone_in_talk",
        "difficulty": 1
    },
    {
        "id": 1470,
        "name": "phone_iphone",
        "difficulty": 1
    },
    {
        "id": 1471,
        "name": "phone_locked",
        "difficulty": 1
    },
    {
        "id": 1472,
        "name": "phone_missed",
        "difficulty": 2
    },
    {
        "id": 1473,
        "name": "phone_paused",
        "difficulty": 1
    },
    {
        "id": 1474,
        "name": "phonelink",
        "difficulty": 4
    },
    {
        "id": 1475,
        "name": "phonelink_erase",
        "difficulty": 4
    },
    {
        "id": 1476,
        "name": "phonelink_lock",
        "difficulty": 3
    },
    {
        "id": 1477,
        "name": "phonelink_off",
        "difficulty": 2
    },
    {
        "id": 1478,
        "name": "phonelink_ring",
        "difficulty": 3
    },
    {
        "id": 1479,
        "name": "phonelink_setup",
        "difficulty": 2
    },
    {
        "id": 1480,
        "name": "photo",
        "difficulty": 1
    },
    {
        "id": 1481,
        "name": "photo_album",
        "difficulty": 2
    },
    {
        "id": 1482,
        "name": "photo_camera",
        "difficulty": 1
    },
    {
        "id": 1483,
        "name": "photo_camera_back",
        "difficulty": 4
    },
    {
        "id": 1484,
        "name": "photo_camera_front",
        "difficulty": 4
    },
    {
        "id": 1485,
        "name": "photo_filter",
        "difficulty": 4
    },
    {
        "id": 1486,
        "name": "photo_library",
        "difficulty": 2
    },
    {
        "id": 1487,
        "name": "photo_size_select_actual",
        "difficulty": 3
    },
    {
        "id": 1488,
        "name": "photo_size_select_large",
        "difficulty": 3
    },
    {
        "id": 1489,
        "name": "photo_size_select_small",
        "difficulty": 3
    },
    {
        "id": 1490,
        "name": "php",
        "difficulty": 0
    },
    {
        "id": 1491,
        "name": "piano",
        "difficulty": 1
    },
    {
        "id": 1492,
        "name": "piano_off",
        "difficulty": 1
    },
    {
        "id": 1493,
        "name": "picture_as_pdf",
        "difficulty": 1
    },
    {
        "id": 1494,
        "name": "picture_in_picture",
        "difficulty": 2
    },
    {
        "id": 1495,
        "name": "picture_in_picture_alt",
        "difficulty": 2
    },
    {
        "id": 1496,
        "name": "pie_chart",
        "difficulty": 1
    },
    {
        "id": 1497,
        "name": "pie_chart_outline",
        "difficulty": 1
    },
    {
        "id": 1498,
        "name": "pie_chart_outlined",
        "difficulty": 1
    },
    {
        "id": 1499,
        "name": "pin",
        "difficulty": 3
    },
    {
        "id": 1500,
        "name": "pin_drop",
        "difficulty": 4
    },
    {
        "id": 1501,
        "name": "pin_end",
        "difficulty": 7
    },
    {
        "id": 1502,
        "name": "pin_invoke",
        "difficulty": 7
    },
    {
        "id": 1503,
        "name": "pinch",
        "difficulty": 4
    },
    {
        "id": 1504,
        "name": "pivot_table_chart",
        "difficulty": 3
    },
    {
        "id": 1505,
        "name": "pix",
        "difficulty": 6
    },
    {
        "id": 1506,
        "name": "place",
        "difficulty": 3
    },
    {
        "id": 1507,
        "name": "plagiarism",
        "difficulty": 4
    },
    {
        "id": 1508,
        "name": "play_arrow",
        "difficulty": 1
    },
    {
        "id": 1509,
        "name": "play_circle",
        "difficulty": 1
    },
    {
        "id": 1510,
        "name": "play_circle_fill",
        "difficulty": 1
    },
    {
        "id": 1511,
        "name": "play_circle_filled",
        "difficulty": 1
    },
    {
        "id": 1512,
        "name": "play_circle_outline",
        "difficulty": 1
    },
    {
        "id": 1513,
        "name": "play_disabled",
        "difficulty": 1
    },
    {
        "id": 1514,
        "name": "play_for_work",
        "difficulty": 7
    },
    {
        "id": 1515,
        "name": "play_lesson",
        "difficulty": 2
    },
    {
        "id": 1516,
        "name": "playlist_add",
        "difficulty": 1
    },
    {
        "id": 1517,
        "name": "playlist_add_check",
        "difficulty": 1
    },
    {
        "id": 1518,
        "name": "playlist_add_check_circle",
        "difficulty": 1
    },
    {
        "id": 1519,
        "name": "playlist_add_circle",
        "difficulty": 1
    },
    {
        "id": 1520,
        "name": "playlist_play",
        "difficulty": 1
    },
    {
        "id": 1521,
        "name": "playlist_remove",
        "difficulty": 1
    },
    {
        "id": 1522,
        "name": "plumbing",
        "difficulty": 2
    },
    {
        "id": 1523,
        "name": "plus_one",
        "difficulty": 0
    },
    {
        "id": 1524,
        "name": "podcasts",
        "difficulty": 2
    },
    {
        "id": 1525,
        "name": "point_of_sale",
        "difficulty": 6
    },
    {
        "id": 1526,
        "name": "policy",
        "difficulty": 5
    },
    {
        "id": 1527,
        "name": "poll",
        "difficulty": 2
    },
    {
        "id": 1528,
        "name": "polyline",
        "difficulty": 6
    },
    {
        "id": 1529,
        "name": "polymer",
        "difficulty": 8
    },
    {
        "id": 1530,
        "name": "pool",
        "difficulty": 2
    },
    {
        "id": 1531,
        "name": "portable_wifi_off",
        "difficulty": 4
    },
    {
        "id": 1532,
        "name": "portrait",
        "difficulty": 2
    },
    {
        "id": 1533,
        "name": "post_add",
        "difficulty": 2
    },
    {
        "id": 1534,
        "name": "power",
        "difficulty": 3
    },
    {
        "id": 1535,
        "name": "power_input",
        "difficulty": 6
    },
    {
        "id": 1536,
        "name": "power_off",
        "difficulty": 2
    },
    {
        "id": 1537,
        "name": "power_settings_new",
        "difficulty": 2
    },
    {
        "id": 1538,
        "name": "precision_manufacturing",
        "difficulty": 4
    },
    {
        "id": 1539,
        "name": "pregnant_woman",
        "difficulty": 1
    },
    {
        "id": 1540,
        "name": "present_to_all",
        "difficulty": 3
    },
    {
        "id": 1541,
        "name": "preview",
        "difficulty": 4
    },
    {
        "id": 1542,
        "name": "price_change",
        "difficulty": 1
    },
    {
        "id": 1543,
        "name": "price_check",
        "difficulty": 1
    },
    {
        "id": 1544,
        "name": "print",
        "difficulty": 1
    },
    {
        "id": 1545,
        "name": "print_disabled",
        "difficulty": 1
    },
    {
        "id": 1546,
        "name": "priority_high",
        "difficulty": 4
    },
    {
        "id": 1547,
        "name": "privacy_tip",
        "difficulty": 3
    },
    {
        "id": 1548,
        "name": "private_connectivity",
        "difficulty": 3
    },
    {
        "id": 1549,
        "name": "production_quantity_limits",
        "difficulty": 6
    },
    {
        "id": 1550,
        "name": "propane",
        "difficulty": 5
    },
    {
        "id": 1551,
        "name": "propane_tank",
        "difficulty": 3
    },
    {
        "id": 1552,
        "name": "psychology",
        "difficulty": 2
    },
    {
        "id": 1553,
        "name": "psychology_alt",
        "difficulty": 2
    },
    {
        "id": 1554,
        "name": "public",
        "difficulty": 4
    },
    {
        "id": 1555,
        "name": "public_off",
        "difficulty": 3
    },
    {
        "id": 1556,
        "name": "publish",
        "difficulty": 3
    },
    {
        "id": 1557,
        "name": "published_with_changes",
        "difficulty": 7
    },
    {
        "id": 1558,
        "name": "punch_clock",
        "difficulty": 4
    },
    {
        "id": 1559,
        "name": "push_pin",
        "difficulty": 3
    },
    {
        "id": 1560,
        "name": "qr_code",
        "difficulty": 2
    },
    {
        "id": 1561,
        "name": "qr_code_2",
        "difficulty": 1
    },
    {
        "id": 1562,
        "name": "qr_code_scanner",
        "difficulty": 1
    },
    {
        "id": 1563,
        "name": "query_builder",
        "difficulty": 6
    },
    {
        "id": 1564,
        "name": "query_stats",
        "difficulty": 3
    },
    {
        "id": 1565,
        "name": "question_answer",
        "difficulty": 2
    },
    {
        "id": 1566,
        "name": "question_mark",
        "difficulty": 0
    },
    {
        "id": 1567,
        "name": "queue",
        "difficulty": 3
    },
    {
        "id": 1568,
        "name": "queue_music",
        "difficulty": 1
    },
    {
        "id": 1569,
        "name": "queue_play_next",
        "difficulty": 3
    },
    {
        "id": 1570,
        "name": "quick_contacts_dialer",
        "difficulty": 3
    },
    {
        "id": 1571,
        "name": "quick_contacts_mail",
        "difficulty": 2
    },
    {
        "id": 1572,
        "name": "quickreply",
        "difficulty": 4
    },
    {
        "id": 1573,
        "name": "quiz",
        "difficulty": 3
    },
    {
        "id": 1574,
        "name": "quora",
        "difficulty": 2
    },
    {
        "id": 1575,
        "name": "r_mobiledata",
        "difficulty": 2
    },
    {
        "id": 1576,
        "name": "radar",
        "difficulty": 2
    },
    {
        "id": 1577,
        "name": "radio",
        "difficulty": 1
    },
    {
        "id": 1578,
        "name": "radio_button_checked",
        "difficulty": 2
    },
    {
        "id": 1579,
        "name": "radio_button_off",
        "difficulty": 4
    },
    {
        "id": 1580,
        "name": "radio_button_on",
        "difficulty": 2
    },
    {
        "id": 1581,
        "name": "radio_button_unchecked",
        "difficulty": 4
    },
    {
        "id": 1582,
        "name": "railway_alert",
        "difficulty": 2
    },
    {
        "id": 1583,
        "name": "ramen_dining",
        "difficulty": 2
    },
    {
        "id": 1584,
        "name": "ramp_left",
        "difficulty": 4
    },
    {
        "id": 1585,
        "name": "ramp_right",
        "difficulty": 4
    },
    {
        "id": 1586,
        "name": "rate_review",
        "difficulty": 3
    },
    {
        "id": 1587,
        "name": "raw_off",
        "difficulty": 1
    },
    {
        "id": 1588,
        "name": "raw_on",
        "difficulty": 1
    },
    {
        "id": 1589,
        "name": "read_more",
        "difficulty": 5
    },
    {
        "id": 1590,
        "name": "real_estate_agent",
        "difficulty": 4
    },
    {
        "id": 1591,
        "name": "rebase_edit",
        "difficulty": 5
    },
    {
        "id": 1592,
        "name": "receipt",
        "difficulty": 3
    },
    {
        "id": 1593,
        "name": "receipt_long",
        "difficulty": 2
    },
    {
        "id": 1594,
        "name": "recent_actors",
        "difficulty": 5
    },
    {
        "id": 1595,
        "name": "recommend",
        "difficulty": 4
    },
    {
        "id": 1596,
        "name": "record_voice_over",
        "difficulty": 5
    },
    {
        "id": 1597,
        "name": "rectangle",
        "difficulty": 1
    },
    {
        "id": 1598,
        "name": "recycling",
        "difficulty": 1
    },
    {
        "id": 1599,
        "name": "reddit",
        "difficulty": 1
    },
    {
        "id": 1600,
        "name": "redeem",
        "difficulty": 4
    },
    {
        "id": 1601,
        "name": "redo",
        "difficulty": 2
    },
    {
        "id": 1602,
        "name": "reduce_capacity",
        "difficulty": 2
    },
    {
        "id": 1603,
        "name": "refresh",
        "difficulty": 1
    },
    {
        "id": 1604,
        "name": "remember_me",
        "difficulty": 3
    },
    {
        "id": 1605,
        "name": "remove",
        "difficulty": 3
    },
    {
        "id": 1606,
        "name": "remove_circle",
        "difficulty": 2
    },
    {
        "id": 1607,
        "name": "remove_circle_outline",
        "difficulty": 1
    },
    {
        "id": 1608,
        "name": "remove_done",
        "difficulty": 2
    },
    {
        "id": 1609,
        "name": "remove_from_queue",
        "difficulty": 5
    },
    {
        "id": 1610,
        "name": "remove_moderator",
        "difficulty": 3
    },
    {
        "id": 1611,
        "name": "remove_red_eye",
        "difficulty": 3
    },
    {
        "id": 1612,
        "name": "remove_road",
        "difficulty": 4
    },
    {
        "id": 1613,
        "name": "remove_shopping_cart",
        "difficulty": 1
    },
    {
        "id": 1614,
        "name": "reorder",
        "difficulty": 8
    },
    {
        "id": 1615,
        "name": "repartition",
        "difficulty": 7
    },
    {
        "id": 1616,
        "name": "repeat",
        "difficulty": 3
    },
    {
        "id": 1617,
        "name": "repeat_on",
        "difficulty": 3
    },
    {
        "id": 1618,
        "name": "repeat_one",
        "difficulty": 2
    },
    {
        "id": 1619,
        "name": "repeat_one_on",
        "difficulty": 2
    },
    {
        "id": 1620,
        "name": "replay",
        "difficulty": 2
    },
    {
        "id": 1621,
        "name": "replay_10",
        "difficulty": 1
    },
    {
        "id": 1622,
        "name": "replay_30",
        "difficulty": 1
    },
    {
        "id": 1623,
        "name": "replay_5",
        "difficulty": 1
    },
    {
        "id": 1624,
        "name": "replay_circle_filled",
        "difficulty": 1
    },
    {
        "id": 1625,
        "name": "reply",
        "difficulty": 2
    },
    {
        "id": 1626,
        "name": "reply_all",
        "difficulty": 2
    },
    {
        "id": 1627,
        "name": "report",
        "difficulty": 3
    },
    {
        "id": 1628,
        "name": "report_gmailerrorred",
        "difficulty": 4
    },
    {
        "id": 1629,
        "name": "report_off",
        "difficulty": 3
    },
    {
        "id": 1630,
        "name": "report_problem",
        "difficulty": 3
    },
    {
        "id": 1631,
        "name": "request_page",
        "difficulty": 6
    },
    {
        "id": 1632,
        "name": "request_quote",
        "difficulty": 6
    },
    {
        "id": 1633,
        "name": "reset_tv",
        "difficulty": 3
    },
    {
        "id": 1634,
        "name": "restart_alt",
        "difficulty": 3
    },
    {
        "id": 1635,
        "name": "restaurant",
        "difficulty": 1
    },
    {
        "id": 1636,
        "name": "restaurant_menu",
        "difficulty": 2
    },
    {
        "id": 1637,
        "name": "restore",
        "difficulty": 3
    },
    {
        "id": 1638,
        "name": "restore_from_trash",
        "difficulty": 3
    },
    {
        "id": 1639,
        "name": "restore_page",
        "difficulty": 4
    },
    {
        "id": 1640,
        "name": "reviews",
        "difficulty": 4
    },
    {
        "id": 1641,
        "name": "rice_bowl",
        "difficulty": 4
    },
    {
        "id": 1642,
        "name": "ring_volume",
        "difficulty": 3
    },
    {
        "id": 1643,
        "name": "rocket",
        "difficulty": 1
    },
    {
        "id": 1644,
        "name": "rocket_launch",
        "difficulty": 1
    },
    {
        "id": 1645,
        "name": "roller_shades",
        "difficulty": 4
    },
    {
        "id": 1646,
        "name": "roller_shades_closed",
        "difficulty": 4
    },
    {
        "id": 1647,
        "name": "roller_skating",
        "difficulty": 1
    },
    {
        "id": 1648,
        "name": "roofing",
        "difficulty": 3
    },
    {
        "id": 1649,
        "name": "room",
        "difficulty": 8
    },
    {
        "id": 1650,
        "name": "room_preferences",
        "difficulty": 3
    },
    {
        "id": 1651,
        "name": "room_service",
        "difficulty": 3
    },
    {
        "id": 1652,
        "name": "rotate_90_degrees_ccw",
        "difficulty": 2
    },
    {
        "id": 1653,
        "name": "rotate_90_degrees_cw",
        "difficulty": 2
    },
    {
        "id": 1654,
        "name": "rotate_left",
        "difficulty": 3
    },
    {
        "id": 1655,
        "name": "rotate_right",
        "difficulty": 3
    },
    {
        "id": 1656,
        "name": "roundabout_left",
        "difficulty": 1
    },
    {
        "id": 1657,
        "name": "roundabout_right",
        "difficulty": 1
    },
    {
        "id": 1658,
        "name": "rounded_corner",
        "difficulty": 2
    },
    {
        "id": 1659,
        "name": "route",
        "difficulty": 5
    },
    {
        "id": 1660,
        "name": "router",
        "difficulty": 2
    },
    {
        "id": 1661,
        "name": "rowing",
        "difficulty": 2
    },
    {
        "id": 1662,
        "name": "rss_feed",
        "difficulty": 3
    },
    {
        "id": 1663,
        "name": "rsvp",
        "difficulty": 0
    },
    {
        "id": 1664,
        "name": "rtt",
        "difficulty": 6
    },
    {
        "id": 1665,
        "name": "rule",
        "difficulty": 4
    },
    {
        "id": 1666,
        "name": "rule_folder",
        "difficulty": 3
    },
    {
        "id": 1667,
        "name": "run_circle",
        "difficulty": 1
    },
    {
        "id": 1668,
        "name": "running_with_errors",
        "difficulty": 5
    },
    {
        "id": 1669,
        "name": "rv_hookup",
        "difficulty": 4
    },
    {
        "id": 1670,
        "name": "safety_check",
        "difficulty": 5
    },
    {
        "id": 1671,
        "name": "safety_divider",
        "difficulty": 3
    },
    {
        "id": 1672,
        "name": "sailing",
        "difficulty": 1
    },
    {
        "id": 1673,
        "name": "sanitizer",
        "difficulty": 2
    },
    {
        "id": 1674,
        "name": "satellite",
        "difficulty": 7
    },
    {
        "id": 1675,
        "name": "satellite_alt",
        "difficulty": 1
    },
    {
        "id": 1676,
        "name": "save",
        "difficulty": 1
    },
    {
        "id": 1677,
        "name": "save_alt",
        "difficulty": 2
    },
    {
        "id": 1678,
        "name": "save_as",
        "difficulty": 2
    },
    {
        "id": 1679,
        "name": "saved_search",
        "difficulty": 2
    },
    {
        "id": 1680,
        "name": "savings",
        "difficulty": 2
    },
    {
        "id": 1681,
        "name": "scale",
        "difficulty": 2
    },
    {
        "id": 1682,
        "name": "scanner",
        "difficulty": 4
    },
    {
        "id": 1683,
        "name": "scatter_plot",
        "difficulty": 4
    },
    {
        "id": 1684,
        "name": "schedule",
        "difficulty": 3
    },
    {
        "id": 1685,
        "name": "schedule_send",
        "difficulty": 3
    },
    {
        "id": 1686,
        "name": "schema",
        "difficulty": 5
    },
    {
        "id": 1687,
        "name": "school",
        "difficulty": 1
    },
    {
        "id": 1688,
        "name": "science",
        "difficulty": 1
    },
    {
        "id": 1689,
        "name": "score",
        "difficulty": 5
    },
    {
        "id": 1690,
        "name": "scoreboard",
        "difficulty": 1
    },
    {
        "id": 1691,
        "name": "screen_lock_landscape",
        "difficulty": 2
    },
    {
        "id": 1692,
        "name": "screen_lock_portrait",
        "difficulty": 2
    },
    {
        "id": 1693,
        "name": "screen_lock_rotation",
        "difficulty": 2
    },
    {
        "id": 1694,
        "name": "screen_rotation",
        "difficulty": 2
    },
    {
        "id": 1695,
        "name": "screen_rotation_alt",
        "difficulty": 4
    },
    {
        "id": 1696,
        "name": "screen_search_desktop",
        "difficulty": 2
    },
    {
        "id": 1697,
        "name": "screen_share",
        "difficulty": 1
    },
    {
        "id": 1698,
        "name": "screenshot",
        "difficulty": 3
    },
    {
        "id": 1699,
        "name": "screenshot_monitor",
        "difficulty": 3
    },
    {
        "id": 1700,
        "name": "scuba_diving",
        "difficulty": 1
    },
    {
        "id": 1701,
        "name": "sd",
        "difficulty": 0
    },
    {
        "id": 1702,
        "name": "sd_card",
        "difficulty": 2
    },
    {
        "id": 1703,
        "name": "sd_card_alert",
        "difficulty": 2
    },
    {
        "id": 1704,
        "name": "sd_storage",
        "difficulty": 2
    },
    {
        "id": 1705,
        "name": "search",
        "difficulty": 1
    },
    {
        "id": 1706,
        "name": "search_off",
        "difficulty": 1
    },
    {
        "id": 1707,
        "name": "security",
        "difficulty": 2
    },
    {
        "id": 1708,
        "name": "security_update",
        "difficulty": 5
    },
    {
        "id": 1709,
        "name": "security_update_good",
        "difficulty": 6
    },
    {
        "id": 1710,
        "name": "security_update_warning",
        "difficulty": 4
    },
    {
        "id": 1711,
        "name": "segment",
        "difficulty": 7
    },
    {
        "id": 1712,
        "name": "select_all",
        "difficulty": 5
    },
    {
        "id": 1713,
        "name": "self_improvement",
        "difficulty": 4
    },
    {
        "id": 1714,
        "name": "sell",
        "difficulty": 3
    },
    {
        "id": 1715,
        "name": "send",
        "difficulty": 2
    },
    {
        "id": 1716,
        "name": "send_and_archive",
        "difficulty": 2
    },
    {
        "id": 1717,
        "name": "send_time_extension",
        "difficulty": 5
    },
    {
        "id": 1718,
        "name": "send_to_mobile",
        "difficulty": 3
    },
    {
        "id": 1719,
        "name": "sensor_door",
        "difficulty": 4
    },
    {
        "id": 1720,
        "name": "sensor_occupied",
        "difficulty": 7
    },
    {
        "id": 1721,
        "name": "sensor_window",
        "difficulty": 7
    },
    {
        "id": 1722,
        "name": "sensors",
        "difficulty": 3
    },
    {
        "id": 1723,
        "name": "sensors_off",
        "difficulty": 2
    },
    {
        "id": 1724,
        "name": "sentiment_dissatisfied",
        "difficulty": 1
    },
    {
        "id": 1725,
        "name": "sentiment_neutral",
        "difficulty": 1
    },
    {
        "id": 1726,
        "name": "sentiment_satisfied",
        "difficulty": 1
    },
    {
        "id": 1727,
        "name": "sentiment_satisfied_alt",
        "difficulty": 1
    },
    {
        "id": 1728,
        "name": "sentiment_very_dissatisfied",
        "difficulty": 1
    },
    {
        "id": 1729,
        "name": "sentiment_very_satisfied",
        "difficulty": 1
    },
    {
        "id": 1730,
        "name": "set_meal",
        "difficulty": 3
    },
    {
        "id": 1731,
        "name": "settings",
        "difficulty": 1
    },
    {
        "id": 1732,
        "name": "settings_accessibility",
        "difficulty": 3
    },
    {
        "id": 1733,
        "name": "settings_applications",
        "difficulty": 4
    },
    {
        "id": 1734,
        "name": "settings_backup_restore",
        "difficulty": 4
    },
    {
        "id": 1735,
        "name": "settings_bluetooth",
        "difficulty": 3
    },
    {
        "id": 1736,
        "name": "settings_brightness",
        "difficulty": 3
    },
    {
        "id": 1737,
        "name": "settings_cell",
        "difficulty": 6
    },
    {
        "id": 1738,
        "name": "settings_display",
        "difficulty": 5
    },
    {
        "id": 1739,
        "name": "settings_ethernet",
        "difficulty": 8
    },
    {
        "id": 1740,
        "name": "settings_input_antenna",
        "difficulty": 6
    },
    {
        "id": 1741,
        "name": "settings_input_component",
        "difficulty": 9
    },
    {
        "id": 1742,
        "name": "settings_input_composite",
        "difficulty": 9
    },
    {
        "id": 1743,
        "name": "settings_input_hdmi",
        "difficulty": 5
    },
    {
        "id": 1744,
        "name": "settings_input_svideo",
        "difficulty": 6
    },
    {
        "id": 1745,
        "name": "settings_overscan",
        "difficulty": 6
    },
    {
        "id": 1746,
        "name": "settings_phone",
        "difficulty": 2
    },
    {
        "id": 1747,
        "name": "settings_power",
        "difficulty": 2
    },
    {
        "id": 1748,
        "name": "settings_remote",
        "difficulty": 2
    },
    {
        "id": 1749,
        "name": "settings_suggest",
        "difficulty": 2
    },
    {
        "id": 1750,
        "name": "settings_system_daydream",
        "difficulty": 7
    },
    {
        "id": 1751,
        "name": "settings_voice",
        "difficulty": 2
    },
    {
        "id": 1752,
        "name": "severe_cold",
        "difficulty": 2
    },
    {
        "id": 1753,
        "name": "shape_line",
        "difficulty": 2
    },
    {
        "id": 1754,
        "name": "share",
        "difficulty": 2
    },
    {
        "id": 1755,
        "name": "share_arrival_time",
        "difficulty": 4
    },
    {
        "id": 1756,
        "name": "share_location",
        "difficulty": 4
    },
    {
        "id": 1757,
        "name": "shelves",
        "difficulty": 2
    },
    {
        "id": 1758,
        "name": "shield",
        "difficulty": 1
    },
    {
        "id": 1759,
        "name": "shield_moon",
        "difficulty": 1
    },
    {
        "id": 1760,
        "name": "shop",
        "difficulty": 3
    },
    {
        "id": 1761,
        "name": "shop_2",
        "difficulty": 3
    },
    {
        "id": 1762,
        "name": "shop_two",
        "difficulty": 3
    },
    {
        "id": 1763,
        "name": "shopify",
        "difficulty": 1
    },
    {
        "id": 1764,
        "name": "shopping_bag",
        "difficulty": 2
    },
    {
        "id": 1765,
        "name": "shopping_basket",
        "difficulty": 1
    },
    {
        "id": 1766,
        "name": "shopping_cart",
        "difficulty": 1
    },
    {
        "id": 1767,
        "name": "shopping_cart_checkout",
        "difficulty": 2
    },
    {
        "id": 1768,
        "name": "short_text",
        "difficulty": 2
    },
    {
        "id": 1769,
        "name": "shortcut",
        "difficulty": 4
    },
    {
        "id": 1770,
        "name": "show_chart",
        "difficulty": 3
    },
    {
        "id": 1771,
        "name": "shower",
        "difficulty": 2
    },
    {
        "id": 1772,
        "name": "shuffle",
        "difficulty": 2
    },
    {
        "id": 1773,
        "name": "shuffle_on",
        "difficulty": 2
    },
    {
        "id": 1774,
        "name": "shutter_speed",
        "difficulty": 4
    },
    {
        "id": 1775,
        "name": "sick",
        "difficulty": 2
    },
    {
        "id": 1776,
        "name": "sign_language",
        "difficulty": 2
    },
    {
        "id": 1777,
        "name": "signal_cellular_0_bar",
        "difficulty": 3
    },
    {
        "id": 1778,
        "name": "signal_cellular_4_bar",
        "difficulty": 3
    },
    {
        "id": 1779,
        "name": "signal_cellular_alt",
        "difficulty": 2
    },
    {
        "id": 1780,
        "name": "signal_cellular_alt_1_bar",
        "difficulty": 6
    },
    {
        "id": 1781,
        "name": "signal_cellular_alt_2_bar",
        "difficulty": 3
    },
    {
        "id": 1782,
        "name": "signal_cellular_connected_no_internet_0_bar",
        "difficulty": 5
    },
    {
        "id": 1783,
        "name": "signal_cellular_connected_no_internet_4_bar",
        "difficulty": 4
    },
    {
        "id": 1784,
        "name": "signal_cellular_no_sim",
        "difficulty": 3
    },
    {
        "id": 1785,
        "name": "signal_cellular_nodata",
        "difficulty": 4
    },
    {
        "id": 1786,
        "name": "signal_cellular_null",
        "difficulty": 5
    },
    {
        "id": 1787,
        "name": "signal_cellular_off",
        "difficulty": 2
    },
    {
        "id": 1788,
        "name": "signal_wifi_0_bar",
        "difficulty": 2
    },
    {
        "id": 1789,
        "name": "signal_wifi_4_bar",
        "difficulty": 2
    },
    {
        "id": 1790,
        "name": "signal_wifi_4_bar_lock",
        "difficulty": 2
    },
    {
        "id": 1791,
        "name": "signal_wifi_bad",
        "difficulty": 2
    },
    {
        "id": 1792,
        "name": "signal_wifi_connected_no_internet_4",
        "difficulty": 2
    },
    {
        "id": 1793,
        "name": "signal_wifi_off",
        "difficulty": 2
    },
    {
        "id": 1794,
        "name": "signal_wifi_statusbar_4_bar",
        "difficulty": 2
    },
    {
        "id": 1795,
        "name": "signal_wifi_statusbar_connected_no_internet_4",
        "difficulty": 2
    },
    {
        "id": 1796,
        "name": "signal_wifi_statusbar_null",
        "difficulty": 4
    },
    {
        "id": 1797,
        "name": "signpost",
        "difficulty": 1
    },
    {
        "id": 1798,
        "name": "sim_card",
        "difficulty": 2
    },
    {
        "id": 1799,
        "name": "sim_card_alert",
        "difficulty": 2
    },
    {
        "id": 1800,
        "name": "sim_card_download",
        "difficulty": 2
    },
    {
        "id": 1801,
        "name": "single_bed",
        "difficulty": 2
    },
    {
        "id": 1802,
        "name": "sip",
        "difficulty": 0
    },
    {
        "id": 1803,
        "name": "skateboarding",
        "difficulty": 1
    },
    {
        "id": 1804,
        "name": "skip_next",
        "difficulty": 3
    },
    {
        "id": 1805,
        "name": "skip_previous",
        "difficulty": 3
    },
    {
        "id": 1806,
        "name": "sledding",
        "difficulty": 2
    },
    {
        "id": 1807,
        "name": "slideshow",
        "difficulty": 4
    },
    {
        "id": 1808,
        "name": "slow_motion_video",
        "difficulty": 4
    },
    {
        "id": 1809,
        "name": "smart_button",
        "difficulty": 5
    },
    {
        "id": 1810,
        "name": "smart_display",
        "difficulty": 5
    },
    {
        "id": 1811,
        "name": "smart_screen",
        "difficulty": 5
    },
    {
        "id": 1812,
        "name": "smart_toy",
        "difficulty": 5
    },
    {
        "id": 1813,
        "name": "smartphone",
        "difficulty": 1
    },
    {
        "id": 1814,
        "name": "smoke_free",
        "difficulty": 1
    },
    {
        "id": 1815,
        "name": "smoking_rooms",
        "difficulty": 1
    },
    {
        "id": 1816,
        "name": "sms",
        "difficulty": 2
    },
    {
        "id": 1817,
        "name": "sms_failed",
        "difficulty": 2
    },
    {
        "id": 1818,
        "name": "snapchat",
        "difficulty": 1
    },
    {
        "id": 1819,
        "name": "snippet_folder",
        "difficulty": 2
    },
    {
        "id": 1820,
        "name": "snooze",
        "difficulty": 2
    },
    {
        "id": 1821,
        "name": "snowboarding",
        "difficulty": 1
    },
    {
        "id": 1822,
        "name": "snowing",
        "difficulty": 4
    },
    {
        "id": 1823,
        "name": "snowmobile",
        "difficulty": 2
    },
    {
        "id": 1824,
        "name": "snowshoeing",
        "difficulty": 2
    },
    {
        "id": 1825,
        "name": "soap",
        "difficulty": 2
    },
    {
        "id": 1826,
        "name": "social_distance",
        "difficulty": 2
    },
    {
        "id": 1827,
        "name": "solar_power",
        "difficulty": 3
    },
    {
        "id": 1828,
        "name": "sort",
        "difficulty": 4
    },
    {
        "id": 1829,
        "name": "sort_by_alpha",
        "difficulty": 1
    },
    {
        "id": 1830,
        "name": "sos",
        "difficulty": 0
    },
    {
        "id": 1831,
        "name": "soup_kitchen",
        "difficulty": 2
    },
    {
        "id": 1832,
        "name": "source",
        "difficulty": 6
    },
    {
        "id": 1833,
        "name": "south",
        "difficulty": 2
    },
    {
        "id": 1834,
        "name": "south_america",
        "difficulty": 1
    },
    {
        "id": 1835,
        "name": "south_east",
        "difficulty": 2
    },
    {
        "id": 1836,
        "name": "south_west",
        "difficulty": 2
    },
    {
        "id": 1837,
        "name": "spa",
        "difficulty": 5
    },
    {
        "id": 1838,
        "name": "space_bar",
        "difficulty": 3
    },
    {
        "id": 1839,
        "name": "space_dashboard",
        "difficulty": 4
    },
    {
        "id": 1840,
        "name": "spatial_audio",
        "difficulty": 4
    },
    {
        "id": 1841,
        "name": "spatial_audio_off",
        "difficulty": 5
    },
    {
        "id": 1842,
        "name": "spatial_tracking",
        "difficulty": 6
    },
    {
        "id": 1843,
        "name": "speaker",
        "difficulty": 3
    },
    {
        "id": 1844,
        "name": "speaker_group",
        "difficulty": 3
    },
    {
        "id": 1845,
        "name": "speaker_notes",
        "difficulty": 4
    },
    {
        "id": 1846,
        "name": "speaker_notes_off",
        "difficulty": 3
    },
    {
        "id": 1847,
        "name": "speaker_phone",
        "difficulty": 4
    },
    {
        "id": 1848,
        "name": "speed",
        "difficulty": 3
    },
    {
        "id": 1849,
        "name": "spellcheck",
        "difficulty": 2
    },
    {
        "id": 1850,
        "name": "splitscreen",
        "difficulty": 3
    },
    {
        "id": 1851,
        "name": "spoke",
        "difficulty": 7
    },
    {
        "id": 1852,
        "name": "sports",
        "difficulty": 5
    },
    {
        "id": 1853,
        "name": "sports_bar",
        "difficulty": 4
    },
    {
        "id": 1854,
        "name": "sports_baseball",
        "difficulty": 2
    },
    {
        "id": 1855,
        "name": "sports_basketball",
        "difficulty": 2
    },
    {
        "id": 1856,
        "name": "sports_cricket",
        "difficulty": 2
    },
    {
        "id": 1857,
        "name": "sports_esports",
        "difficulty": 3
    },
    {
        "id": 1858,
        "name": "sports_football",
        "difficulty": 1
    },
    {
        "id": 1859,
        "name": "sports_golf",
        "difficulty": 2
    },
    {
        "id": 1860,
        "name": "sports_gymnastics",
        "difficulty": 2
    },
    {
        "id": 1861,
        "name": "sports_handball",
        "difficulty": 3
    },
    {
        "id": 1862,
        "name": "sports_hockey",
        "difficulty": 3
    },
    {
        "id": 1863,
        "name": "sports_kabaddi",
        "difficulty": 3
    },
    {
        "id": 1864,
        "name": "sports_martial_arts",
        "difficulty": 2
    },
    {
        "id": 1865,
        "name": "sports_mma",
        "difficulty": 3
    },
    {
        "id": 1866,
        "name": "sports_motorsports",
        "difficulty": 3
    },
    {
        "id": 1867,
        "name": "sports_rugby",
        "difficulty": 3
    },
    {
        "id": 1868,
        "name": "sports_score",
        "difficulty": 5
    },
    {
        "id": 1869,
        "name": "sports_soccer",
        "difficulty": 2
    },
    {
        "id": 1870,
        "name": "sports_tennis",
        "difficulty": 1
    },
    {
        "id": 1871,
        "name": "sports_volleyball",
        "difficulty": 2
    },
    {
        "id": 1872,
        "name": "square",
        "difficulty": 1
    },
    {
        "id": 1873,
        "name": "square_foot",
        "difficulty": 5
    },
    {
        "id": 1874,
        "name": "ssid_chart",
        "difficulty": 4
    },
    {
        "id": 1875,
        "name": "stacked_bar_chart",
        "difficulty": 2
    },
    {
        "id": 1876,
        "name": "stacked_line_chart",
        "difficulty": 2
    },
    {
        "id": 1877,
        "name": "stadium",
        "difficulty": 2
    },
    {
        "id": 1878,
        "name": "stairs",
        "difficulty": 1
    },
    {
        "id": 1879,
        "name": "star",
        "difficulty": 1
    },
    {
        "id": 1880,
        "name": "star_border",
        "difficulty": 1
    },
    {
        "id": 1881,
        "name": "star_border_purple500",
        "difficulty": 3
    },
    {
        "id": 1882,
        "name": "star_half",
        "difficulty": 1
    },
    {
        "id": 1883,
        "name": "star_outline",
        "difficulty": 1
    },
    {
        "id": 1884,
        "name": "star_purple500",
        "difficulty": 3
    },
    {
        "id": 1885,
        "name": "star_rate",
        "difficulty": 2
    },
    {
        "id": 1886,
        "name": "stars",
        "difficulty": 3
    },
    {
        "id": 1887,
        "name": "start",
        "difficulty": 3
    },
    {
        "id": 1888,
        "name": "stay_current_landscape",
        "difficulty": 3
    },
    {
        "id": 1889,
        "name": "stay_current_portrait",
        "difficulty": 3
    },
    {
        "id": 1890,
        "name": "stay_primary_landscape",
        "difficulty": 3
    },
    {
        "id": 1891,
        "name": "stay_primary_portrait",
        "difficulty": 3
    },
    {
        "id": 1892,
        "name": "sticky_note_2",
        "difficulty": 2
    },
    {
        "id": 1893,
        "name": "stop",
        "difficulty": 5
    },
    {
        "id": 1894,
        "name": "stop_circle",
        "difficulty": 3
    },
    {
        "id": 1895,
        "name": "stop_screen_share",
        "difficulty": 2
    },
    {
        "id": 1896,
        "name": "storage",
        "difficulty": 3
    },
    {
        "id": 1897,
        "name": "store",
        "difficulty": 2
    },
    {
        "id": 1898,
        "name": "store_mall_directory",
        "difficulty": 4
    },
    {
        "id": 1899,
        "name": "storefront",
        "difficulty": 2
    },
    {
        "id": 1900,
        "name": "storm",
        "difficulty": 3
    },
    {
        "id": 1901,
        "name": "straight",
        "difficulty": 3
    },
    {
        "id": 1902,
        "name": "straighten",
        "difficulty": 4
    },
    {
        "id": 1903,
        "name": "stream",
        "difficulty": 9
    },
    {
        "id": 1904,
        "name": "streetview",
        "difficulty": 6
    },
    {
        "id": 1905,
        "name": "strikethrough_s",
        "difficulty": 3
    },
    {
        "id": 1906,
        "name": "stroller",
        "difficulty": 2
    },
    {
        "id": 1907,
        "name": "style",
        "difficulty": 7
    },
    {
        "id": 1908,
        "name": "subdirectory_arrow_left",
        "difficulty": 3
    },
    {
        "id": 1909,
        "name": "subdirectory_arrow_right",
        "difficulty": 3
    },
    {
        "id": 1910,
        "name": "subject",
        "difficulty": 5
    },
    {
        "id": 1911,
        "name": "subscript",
        "difficulty": 3
    },
    {
        "id": 1912,
        "name": "subscriptions",
        "difficulty": 3
    },
    {
        "id": 1913,
        "name": "subtitles",
        "difficulty": 2
    },
    {
        "id": 1914,
        "name": "subtitles_off",
        "difficulty": 2
    },
    {
        "id": 1915,
        "name": "subway",
        "difficulty": 1
    },
    {
        "id": 1916,
        "name": "summarize",
        "difficulty": 4
    },
    {
        "id": 1917,
        "name": "sunny",
        "difficulty": 1
    },
    {
        "id": 1918,
        "name": "sunny_snowing",
        "difficulty": 1
    },
    {
        "id": 1919,
        "name": "superscript",
        "difficulty": 3
    },
    {
        "id": 1920,
        "name": "supervised_user_circle",
        "difficulty": 3
    },
    {
        "id": 1921,
        "name": "supervisor_account",
        "difficulty": 4
    },
    {
        "id": 1922,
        "name": "support",
        "difficulty": 6
    },
    {
        "id": 1923,
        "name": "support_agent",
        "difficulty": 2
    },
    {
        "id": 1924,
        "name": "surfing",
        "difficulty": 1
    },
    {
        "id": 1925,
        "name": "surround_sound",
        "difficulty": 6
    },
    {
        "id": 1926,
        "name": "swap_calls",
        "difficulty": 6
    },
    {
        "id": 1927,
        "name": "swap_horiz",
        "difficulty": 3
    },
    {
        "id": 1928,
        "name": "swap_horizontal_circle",
        "difficulty": 3
    },
    {
        "id": 1929,
        "name": "swap_vert",
        "difficulty": 3
    },
    {
        "id": 1930,
        "name": "swap_vert_circle",
        "difficulty": 3
    },
    {
        "id": 1931,
        "name": "swap_vertical_circle",
        "difficulty": 3
    },
    {
        "id": 1932,
        "name": "swipe",
        "difficulty": 3
    },
    {
        "id": 1933,
        "name": "swipe_down",
        "difficulty": 2
    },
    {
        "id": 1934,
        "name": "swipe_down_alt",
        "difficulty": 3
    },
    {
        "id": 1935,
        "name": "swipe_left",
        "difficulty": 2
    },
    {
        "id": 1936,
        "name": "swipe_left_alt",
        "difficulty": 3
    },
    {
        "id": 1937,
        "name": "swipe_right",
        "difficulty": 2
    },
    {
        "id": 1938,
        "name": "swipe_right_alt",
        "difficulty": 3
    },
    {
        "id": 1939,
        "name": "swipe_up",
        "difficulty": 2
    },
    {
        "id": 1940,
        "name": "swipe_up_alt",
        "difficulty": 3
    },
    {
        "id": 1941,
        "name": "swipe_vertical",
        "difficulty": 3
    },
    {
        "id": 1942,
        "name": "switch_access_shortcut",
        "difficulty": 8
    },
    {
        "id": 1943,
        "name": "switch_access_shortcut_add",
        "difficulty": 6
    },
    {
        "id": 1944,
        "name": "switch_account",
        "difficulty": 5
    },
    {
        "id": 1945,
        "name": "switch_camera",
        "difficulty": 3
    },
    {
        "id": 1946,
        "name": "switch_left",
        "difficulty": 5
    },
    {
        "id": 1947,
        "name": "switch_right",
        "difficulty": 5
    },
    {
        "id": 1948,
        "name": "switch_video",
        "difficulty": 3
    },
    {
        "id": 1949,
        "name": "synagogue",
        "difficulty": 1
    },
    {
        "id": 1950,
        "name": "sync",
        "difficulty": 3
    },
    {
        "id": 1951,
        "name": "sync_alt",
        "difficulty": 5
    },
    {
        "id": 1952,
        "name": "sync_disabled",
        "difficulty": 2
    },
    {
        "id": 1953,
        "name": "sync_lock",
        "difficulty": 2
    },
    {
        "id": 1954,
        "name": "sync_problem",
        "difficulty": 2
    },
    {
        "id": 1955,
        "name": "system_security_update",
        "difficulty": 6
    },
    {
        "id": 1956,
        "name": "system_security_update_good",
        "difficulty": 4
    },
    {
        "id": 1957,
        "name": "system_security_update_warning",
        "difficulty": 3
    },
    {
        "id": 1958,
        "name": "system_update",
        "difficulty": 4
    },
    {
        "id": 1959,
        "name": "system_update_alt",
        "difficulty": 5
    },
    {
        "id": 1960,
        "name": "system_update_tv",
        "difficulty": 5
    },
    {
        "id": 1961,
        "name": "tab",
        "difficulty": 3
    },
    {
        "id": 1962,
        "name": "tab_unselected",
        "difficulty": 5
    },
    {
        "id": 1963,
        "name": "table_bar",
        "difficulty": 2
    },
    {
        "id": 1964,
        "name": "table_chart",
        "difficulty": 4
    },
    {
        "id": 1965,
        "name": "table_restaurant",
        "difficulty": 2
    },
    {
        "id": 1966,
        "name": "table_rows",
        "difficulty": 5
    },
    {
        "id": 1967,
        "name": "table_view",
        "difficulty": 5
    },
    {
        "id": 1968,
        "name": "tablet",
        "difficulty": 3
    },
    {
        "id": 1969,
        "name": "tablet_android",
        "difficulty": 2
    },
    {
        "id": 1970,
        "name": "tablet_mac",
        "difficulty": 3
    },
    {
        "id": 1971,
        "name": "tag",
        "difficulty": 3
    },
    {
        "id": 1972,
        "name": "tag_faces",
        "difficulty": 2
    },
    {
        "id": 1973,
        "name": "takeout_dining",
        "difficulty": 4
    },
    {
        "id": 1974,
        "name": "tap_and_play",
        "difficulty": 6
    },
    {
        "id": 1975,
        "name": "tapas",
        "difficulty": 3
    },
    {
        "id": 1976,
        "name": "task",
        "difficulty": 2
    },
    {
        "id": 1977,
        "name": "task_alt",
        "difficulty": 2
    },
    {
        "id": 1978,
        "name": "taxi_alert",
        "difficulty": 1
    },
    {
        "id": 1979,
        "name": "telegram",
        "difficulty": 2
    },
    {
        "id": 1980,
        "name": "temple_buddhist",
        "difficulty": 1
    },
    {
        "id": 1981,
        "name": "temple_hindu",
        "difficulty": 1
    },
    {
        "id": 1982,
        "name": "terminal",
        "difficulty": 2
    },
    {
        "id": 1983,
        "name": "terrain",
        "difficulty": 2
    },
    {
        "id": 1984,
        "name": "text_decrease",
        "difficulty": 2
    },
    {
        "id": 1985,
        "name": "text_fields",
        "difficulty": 4
    },
    {
        "id": 1986,
        "name": "text_format",
        "difficulty": 3
    },
    {
        "id": 1987,
        "name": "text_increase",
        "difficulty": 2
    },
    {
        "id": 1988,
        "name": "text_rotate_up",
        "difficulty": 2
    },
    {
        "id": 1989,
        "name": "text_rotate_vertical",
        "difficulty": 3
    },
    {
        "id": 1990,
        "name": "text_rotation_angledown",
        "difficulty": 2
    },
    {
        "id": 1991,
        "name": "text_rotation_angleup",
        "difficulty": 2
    },
    {
        "id": 1992,
        "name": "text_rotation_down",
        "difficulty": 2
    },
    {
        "id": 1993,
        "name": "text_rotation_none",
        "difficulty": 3
    },
    {
        "id": 1994,
        "name": "text_snippet",
        "difficulty": 4
    },
    {
        "id": 1995,
        "name": "textsms",
        "difficulty": 2
    },
    {
        "id": 1996,
        "name": "texture",
        "difficulty": 6
    },
    {
        "id": 1997,
        "name": "theater_comedy",
        "difficulty": 2
    },
    {
        "id": 1998,
        "name": "theaters",
        "difficulty": 5
    },
    {
        "id": 1999,
        "name": "thermostat",
        "difficulty": 2
    },
    {
        "id": 2000,
        "name": "thermostat_auto",
        "difficulty": 2
    },
    {
        "id": 2001,
        "name": "thumb_down",
        "difficulty": 1
    },
    {
        "id": 2002,
        "name": "thumb_down_alt",
        "difficulty": 1
    },
    {
        "id": 2003,
        "name": "thumb_down_off_alt",
        "difficulty": 1
    },
    {
        "id": 2004,
        "name": "thumb_up",
        "difficulty": 1
    },
    {
        "id": 2005,
        "name": "thumb_up_alt",
        "difficulty": 1
    },
    {
        "id": 2006,
        "name": "thumb_up_off_alt",
        "difficulty": 1
    },
    {
        "id": 2007,
        "name": "thumbs_up_down",
        "difficulty": 1
    },
    {
        "id": 2008,
        "name": "thunderstorm",
        "difficulty": 1
    },
    {
        "id": 2009,
        "name": "tiktok",
        "difficulty": 1
    },
    {
        "id": 2010,
        "name": "time_to_leave",
        "difficulty": 8
    },
    {
        "id": 2011,
        "name": "timelapse",
        "difficulty": 4
    },
    {
        "id": 2012,
        "name": "timeline",
        "difficulty": 6
    },
    {
        "id": 2013,
        "name": "timer",
        "difficulty": 2
    },
    {
        "id": 2014,
        "name": "timer_10",
        "difficulty": 1
    },
    {
        "id": 2015,
        "name": "timer_10_select",
        "difficulty": 1
    },
    {
        "id": 2016,
        "name": "timer_3",
        "difficulty": 1
    },
    {
        "id": 2017,
        "name": "timer_3_select",
        "difficulty": 1
    },
    {
        "id": 2018,
        "name": "timer_off",
        "difficulty": 2
    },
    {
        "id": 2019,
        "name": "tips_and_updates",
        "difficulty": 4
    },
    {
        "id": 2020,
        "name": "tire_repair",
        "difficulty": 3
    },
    {
        "id": 2021,
        "name": "title",
        "difficulty": 2
    },
    {
        "id": 2022,
        "name": "toc",
        "difficulty": 3
    },
    {
        "id": 2023,
        "name": "today",
        "difficulty": 3
    },
    {
        "id": 2024,
        "name": "toggle_off",
        "difficulty": 2
    },
    {
        "id": 2025,
        "name": "toggle_on",
        "difficulty": 2
    },
    {
        "id": 2026,
        "name": "token",
        "difficulty": 8
    },
    {
        "id": 2027,
        "name": "toll",
        "difficulty": 9
    },
    {
        "id": 2028,
        "name": "tonality",
        "difficulty": 7
    },
    {
        "id": 2029,
        "name": "topic",
        "difficulty": 8
    },
    {
        "id": 2030,
        "name": "tornado",
        "difficulty": 5
    },
    {
        "id": 2031,
        "name": "touch_app",
        "difficulty": 4
    },
    {
        "id": 2032,
        "name": "tour",
        "difficulty": 5
    },
    {
        "id": 2033,
        "name": "toys",
        "difficulty": 3
    },
    {
        "id": 2034,
        "name": "track_changes",
        "difficulty": 7
    },
    {
        "id": 2035,
        "name": "traffic",
        "difficulty": 2
    },
    {
        "id": 2036,
        "name": "train",
        "difficulty": 1
    },
    {
        "id": 2037,
        "name": "tram",
        "difficulty": 1
    },
    {
        "id": 2038,
        "name": "transcribe",
        "difficulty": 4
    },
    {
        "id": 2039,
        "name": "transfer_within_a_station",
        "difficulty": 5
    },
    {
        "id": 2040,
        "name": "transform",
        "difficulty": 5
    },
    {
        "id": 2041,
        "name": "transgender",
        "difficulty": 1
    },
    {
        "id": 2042,
        "name": "transit_enterexit",
        "difficulty": 9
    },
    {
        "id": 2043,
        "name": "translate",
        "difficulty": 1
    },
    {
        "id": 2044,
        "name": "travel_explore",
        "difficulty": 2
    },
    {
        "id": 2045,
        "name": "trending_down",
        "difficulty": 2
    },
    {
        "id": 2046,
        "name": "trending_flat",
        "difficulty": 4
    },
    {
        "id": 2047,
        "name": "trending_neutral",
        "difficulty": 4
    },
    {
        "id": 2048,
        "name": "trending_up",
        "difficulty": 2
    },
    {
        "id": 2049,
        "name": "trip_origin",
        "difficulty": 7
    },
    {
        "id": 2050,
        "name": "trolley",
        "difficulty": 2
    },
    {
        "id": 2051,
        "name": "troubleshoot",
        "difficulty": 3
    },
    {
        "id": 2052,
        "name": "try",
        "difficulty": 8
    },
    {
        "id": 2053,
        "name": "tsunami",
        "difficulty": 2
    },
    {
        "id": 2054,
        "name": "tty",
        "difficulty": 4
    },
    {
        "id": 2055,
        "name": "tune",
        "difficulty": 4
    },
    {
        "id": 2056,
        "name": "tungsten",
        "difficulty": 6
    },
    {
        "id": 2057,
        "name": "turn_left",
        "difficulty": 2
    },
    {
        "id": 2058,
        "name": "turn_right",
        "difficulty": 2
    },
    {
        "id": 2059,
        "name": "turn_sharp_left",
        "difficulty": 2
    },
    {
        "id": 2060,
        "name": "turn_sharp_right",
        "difficulty": 2
    },
    {
        "id": 2061,
        "name": "turn_slight_left",
        "difficulty": 2
    },
    {
        "id": 2062,
        "name": "turn_slight_right",
        "difficulty": 2
    },
    {
        "id": 2063,
        "name": "turned_in",
        "difficulty": 7
    },
    {
        "id": 2064,
        "name": "turned_in_not",
        "difficulty": 7
    },
    {
        "id": 2065,
        "name": "tv",
        "difficulty": 2
    },
    {
        "id": 2066,
        "name": "tv_off",
        "difficulty": 1
    },
    {
        "id": 2067,
        "name": "two_wheeler",
        "difficulty": 2
    },
    {
        "id": 2068,
        "name": "type_specimen",
        "difficulty": 9
    },
    {
        "id": 2069,
        "name": "u_turn_left",
        "difficulty": 1
    },
    {
        "id": 2070,
        "name": "u_turn_right",
        "difficulty": 1
    },
    {
        "id": 2071,
        "name": "umbrella",
        "difficulty": 2
    },
    {
        "id": 2072,
        "name": "unarchive",
        "difficulty": 3
    },
    {
        "id": 2073,
        "name": "undo",
        "difficulty": 1
    },
    {
        "id": 2074,
        "name": "unfold_less",
        "difficulty": 5
    },
    {
        "id": 2075,
        "name": "unfold_less_double",
        "difficulty": 5
    },
    {
        "id": 2076,
        "name": "unfold_more",
        "difficulty": 5
    },
    {
        "id": 2077,
        "name": "unfold_more_double",
        "difficulty": 5
    },
    {
        "id": 2078,
        "name": "unpublished",
        "difficulty": 5
    },
    {
        "id": 2079,
        "name": "unsubscribe",
        "difficulty": 4
    },
    {
        "id": 2080,
        "name": "upcoming",
        "difficulty": 8
    },
    {
        "id": 2081,
        "name": "update",
        "difficulty": 3
    },
    {
        "id": 2082,
        "name": "update_disabled",
        "difficulty": 3
    },
    {
        "id": 2083,
        "name": "upgrade",
        "difficulty": 3
    },
    {
        "id": 2084,
        "name": "upload",
        "difficulty": 2
    },
    {
        "id": 2085,
        "name": "upload_file",
        "difficulty": 1
    },
    {
        "id": 2086,
        "name": "usb",
        "difficulty": 2
    },
    {
        "id": 2087,
        "name": "usb_off",
        "difficulty": 2
    },
    {
        "id": 2088,
        "name": "vaccines",
        "difficulty": 2
    },
    {
        "id": 2089,
        "name": "vape_free",
        "difficulty": 1
    },
    {
        "id": 2090,
        "name": "vaping_rooms",
        "difficulty": 2
    },
    {
        "id": 2091,
        "name": "verified",
        "difficulty": 1
    },
    {
        "id": 2092,
        "name": "verified_user",
        "difficulty": 2
    },
    {
        "id": 2093,
        "name": "vertical_align_bottom",
        "difficulty": 2
    },
    {
        "id": 2094,
        "name": "vertical_align_center",
        "difficulty": 2
    },
    {
        "id": 2095,
        "name": "vertical_align_top",
        "difficulty": 2
    },
    {
        "id": 2096,
        "name": "vertical_distribute",
        "difficulty": 4
    },
    {
        "id": 2097,
        "name": "vertical_shades",
        "difficulty": 3
    },
    {
        "id": 2098,
        "name": "vertical_shades_closed",
        "difficulty": 4
    },
    {
        "id": 2099,
        "name": "vertical_split",
        "difficulty": 3
    },
    {
        "id": 2100,
        "name": "vibration",
        "difficulty": 5
    },
    {
        "id": 2101,
        "name": "video_call",
        "difficulty": 2
    },
    {
        "id": 2102,
        "name": "video_camera_back",
        "difficulty": 4
    },
    {
        "id": 2103,
        "name": "video_camera_front",
        "difficulty": 4
    },
    {
        "id": 2104,
        "name": "video_chat",
        "difficulty": 3
    },
    {
        "id": 2105,
        "name": "video_collection",
        "difficulty": 3
    },
    {
        "id": 2106,
        "name": "video_file",
        "difficulty": 1
    },
    {
        "id": 2107,
        "name": "video_label",
        "difficulty": 5
    },
    {
        "id": 2108,
        "name": "video_library",
        "difficulty": 2
    },
    {
        "id": 2109,
        "name": "video_settings",
        "difficulty": 2
    },
    {
        "id": 2110,
        "name": "video_stable",
        "difficulty": 3
    },
    {
        "id": 2111,
        "name": "videocam",
        "difficulty": 1
    },
    {
        "id": 2112,
        "name": "videocam_off",
        "difficulty": 1
    },
    {
        "id": 2113,
        "name": "videogame_asset",
        "difficulty": 2
    },
    {
        "id": 2114,
        "name": "videogame_asset_off",
        "difficulty": 2
    },
    {
        "id": 2115,
        "name": "view_agenda",
        "difficulty": 5
    },
    {
        "id": 2116,
        "name": "view_array",
        "difficulty": 4
    },
    {
        "id": 2117,
        "name": "view_carousel",
        "difficulty": 3
    },
    {
        "id": 2118,
        "name": "view_column",
        "difficulty": 3
    },
    {
        "id": 2119,
        "name": "view_comfortable",
        "difficulty": 6
    },
    {
        "id": 2120,
        "name": "view_comfy",
        "difficulty": 6
    },
    {
        "id": 2121,
        "name": "view_comfy_alt",
        "difficulty": 7
    },
    {
        "id": 2122,
        "name": "view_compact",
        "difficulty": 4
    },
    {
        "id": 2123,
        "name": "view_compact_alt",
        "difficulty": 4
    },
    {
        "id": 2124,
        "name": "view_cozy",
        "difficulty": 6
    },
    {
        "id": 2125,
        "name": "view_day",
        "difficulty": 6
    },
    {
        "id": 2126,
        "name": "view_headline",
        "difficulty": 7
    },
    {
        "id": 2127,
        "name": "view_in_ar",
        "difficulty": 2
    },
    {
        "id": 2128,
        "name": "view_kanban",
        "difficulty": 2
    },
    {
        "id": 2129,
        "name": "view_list",
        "difficulty": 2
    },
    {
        "id": 2130,
        "name": "view_module",
        "difficulty": 4
    },
    {
        "id": 2131,
        "name": "view_quilt",
        "difficulty": 5
    },
    {
        "id": 2132,
        "name": "view_sidebar",
        "difficulty": 3
    },
    {
        "id": 2133,
        "name": "view_stream",
        "difficulty": 6
    },
    {
        "id": 2134,
        "name": "view_timeline",
        "difficulty": 6
    },
    {
        "id": 2135,
        "name": "view_week",
        "difficulty": 5
    },
    {
        "id": 2136,
        "name": "vignette",
        "difficulty": 5
    },
    {
        "id": 2137,
        "name": "villa",
        "difficulty": 5
    },
    {
        "id": 2138,
        "name": "visibility",
        "difficulty": 3
    },
    {
        "id": 2139,
        "name": "visibility_off",
        "difficulty": 2
    },
    {
        "id": 2140,
        "name": "voice_chat",
        "difficulty": 2
    },
    {
        "id": 2141,
        "name": "voice_over_off",
        "difficulty": 4
    },
    {
        "id": 2142,
        "name": "voicemail",
        "difficulty": 2
    },
    {
        "id": 2143,
        "name": "volcano",
        "difficulty": 2
    },
    {
        "id": 2144,
        "name": "volume_down",
        "difficulty": 1
    },
    {
        "id": 2145,
        "name": "volume_down_alt",
        "difficulty": 1
    },
    {
        "id": 2146,
        "name": "volume_mute",
        "difficulty": 1
    },
    {
        "id": 2147,
        "name": "volume_off",
        "difficulty": 1
    },
    {
        "id": 2148,
        "name": "volume_up",
        "difficulty": 1
    },
    {
        "id": 2149,
        "name": "volunteer_activism",
        "difficulty": 3
    },
    {
        "id": 2150,
        "name": "vpn_key",
        "difficulty": 3
    },
    {
        "id": 2151,
        "name": "vpn_key_off",
        "difficulty": 3
    },
    {
        "id": 2152,
        "name": "vpn_lock",
        "difficulty": 3
    },
    {
        "id": 2153,
        "name": "vrpano",
        "difficulty": 3
    },
    {
        "id": 2154,
        "name": "wallet",
        "difficulty": 3
    },
    {
        "id": 2155,
        "name": "wallet_giftcard",
        "difficulty": 2
    },
    {
        "id": 2156,
        "name": "wallet_membership",
        "difficulty": 4
    },
    {
        "id": 2157,
        "name": "wallet_travel",
        "difficulty": 3
    },
    {
        "id": 2158,
        "name": "wallpaper",
        "difficulty": 3
    },
    {
        "id": 2159,
        "name": "warehouse",
        "difficulty": 2
    },
    {
        "id": 2160,
        "name": "warning",
        "difficulty": 1
    },
    {
        "id": 2161,
        "name": "warning_amber",
        "difficulty": 2
    },
    {
        "id": 2162,
        "name": "wash",
        "difficulty": 2
    },
    {
        "id": 2163,
        "name": "watch",
        "difficulty": 1
    },
    {
        "id": 2164,
        "name": "watch_later",
        "difficulty": 5
    },
    {
        "id": 2165,
        "name": "watch_off",
        "difficulty": 1
    },
    {
        "id": 2166,
        "name": "water",
        "difficulty": 2
    },
    {
        "id": 2167,
        "name": "water_damage",
        "difficulty": 3
    },
    {
        "id": 2168,
        "name": "water_drop",
        "difficulty": 1
    },
    {
        "id": 2169,
        "name": "waterfall_chart",
        "difficulty": 2
    },
    {
        "id": 2170,
        "name": "waves",
        "difficulty": 2
    },
    {
        "id": 2171,
        "name": "waving_hand",
        "difficulty": 1
    },
    {
        "id": 2172,
        "name": "wb_auto",
        "difficulty": 5
    },
    {
        "id": 2173,
        "name": "wb_cloudy",
        "difficulty": 2
    },
    {
        "id": 2174,
        "name": "wb_incandescent",
        "difficulty": 5
    },
    {
        "id": 2175,
        "name": "wb_iridescent",
        "difficulty": 6
    },
    {
        "id": 2176,
        "name": "wb_shade",
        "difficulty": 6
    },
    {
        "id": 2177,
        "name": "wb_sunny",
        "difficulty": 2
    },
    {
        "id": 2178,
        "name": "wb_twighlight",
        "difficulty": 2
    },
    {
        "id": 2179,
        "name": "wb_twilight",
        "difficulty": 2
    },
    {
        "id": 2180,
        "name": "wc",
        "difficulty": 1
    },
    {
        "id": 2181,
        "name": "web",
        "difficulty": 4
    },
    {
        "id": 2182,
        "name": "web_asset",
        "difficulty": 6
    },
    {
        "id": 2183,
        "name": "web_asset_off",
        "difficulty": 5
    },
    {
        "id": 2184,
        "name": "web_stories",
        "difficulty": 5
    },
    {
        "id": 2185,
        "name": "webhook",
        "difficulty": 6
    },
    {
        "id": 2186,
        "name": "wechat",
        "difficulty": 2
    },
    {
        "id": 2187,
        "name": "weekend",
        "difficulty": 6
    },
    {
        "id": 2188,
        "name": "west",
        "difficulty": 2
    },
    {
        "id": 2189,
        "name": "whatshot",
        "difficulty": 4
    },
    {
        "id": 2190,
        "name": "wheelchair_pickup",
        "difficulty": 2
    },
    {
        "id": 2191,
        "name": "where_to_vote",
        "difficulty": 5
    },
    {
        "id": 2192,
        "name": "widgets",
        "difficulty": 4
    },
    {
        "id": 2193,
        "name": "width_full",
        "difficulty": 4
    },
    {
        "id": 2194,
        "name": "width_normal",
        "difficulty": 5
    },
    {
        "id": 2195,
        "name": "width_wide",
        "difficulty": 4
    },
    {
        "id": 2196,
        "name": "wifi",
        "difficulty": 1
    },
    {
        "id": 2197,
        "name": "wifi_1_bar",
        "difficulty": 2
    },
    {
        "id": 2198,
        "name": "wifi_2_bar",
        "difficulty": 1
    },
    {
        "id": 2199,
        "name": "wifi_calling",
        "difficulty": 2
    },
    {
        "id": 2200,
        "name": "wifi_calling_3",
        "difficulty": 1
    },
    {
        "id": 2201,
        "name": "wifi_channel",
        "difficulty": 9
    },
    {
        "id": 2202,
        "name": "wifi_find",
        "difficulty": 2
    },
    {
        "id": 2203,
        "name": "wifi_lock",
        "difficulty": 2
    },
    {
        "id": 2204,
        "name": "wifi_off",
        "difficulty": 1
    },
    {
        "id": 2205,
        "name": "wifi_password",
        "difficulty": 1
    },
    {
        "id": 2206,
        "name": "wifi_protected_setup",
        "difficulty": 7
    },
    {
        "id": 2207,
        "name": "wifi_tethering",
        "difficulty": 5
    },
    {
        "id": 2208,
        "name": "wifi_tethering_error",
        "difficulty": 5
    },
    {
        "id": 2209,
        "name": "wifi_tethering_error_rounded",
        "difficulty": 5
    },
    {
        "id": 2210,
        "name": "wifi_tethering_off",
        "difficulty": 5
    },
    {
        "id": 2211,
        "name": "wind_power",
        "difficulty": 2
    },
    {
        "id": 2212,
        "name": "window",
        "difficulty": 3
    },
    {
        "id": 2213,
        "name": "wine_bar",
        "difficulty": 3
    },
    {
        "id": 2214,
        "name": "woman",
        "difficulty": 1
    },
    {
        "id": 2215,
        "name": "woman_2",
        "difficulty": 1
    },
    {
        "id": 2216,
        "name": "woo_commerce",
        "difficulty": 5
    },
    {
        "id": 2217,
        "name": "wordpress",
        "difficulty": 2
    },
    {
        "id": 2218,
        "name": "work",
        "difficulty": 3
    },
    {
        "id": 2219,
        "name": "work_history",
        "difficulty": 3
    },
    {
        "id": 2220,
        "name": "work_off",
        "difficulty": 3
    },
    {
        "id": 2221,
        "name": "work_outline",
        "difficulty": 3
    },
    {
        "id": 2222,
        "name": "workspace_premium",
        "difficulty": 5
    },
    {
        "id": 2223,
        "name": "workspaces",
        "difficulty": 8
    },
    {
        "id": 2224,
        "name": "workspaces_filled",
        "difficulty": 8
    },
    {
        "id": 2225,
        "name": "workspaces_outline",
        "difficulty": 7
    },
    {
        "id": 2226,
        "name": "wrap_text",
        "difficulty": 2
    },
    {
        "id": 2227,
        "name": "wrong_location",
        "difficulty": 2
    },
    {
        "id": 2228,
        "name": "wysiwyg",
        "difficulty": 9
    },
    {
        "id": 2229,
        "name": "yard",
        "difficulty": 4
    },
    {
        "id": 2230,
        "name": "youtube_searched_for",
        "difficulty": 3
    },
    {
        "id": 2231,
        "name": "zoom_in",
        "difficulty": 1
    },
    {
        "id": 2232,
        "name": "zoom_in_map",
        "difficulty": 3
    },
    {
        "id": 2233,
        "name": "zoom_out",
        "difficulty": 1
    },
    {
        "id": 2234,
        "name": "zoom_out_map",
        "difficulty": 3
    }
]

const easyIconList = [
    {
        "id": 0,
        "name": "10k",
        "difficulty": 0
    },
    {
        "id": 1,
        "name": "10mp",
        "difficulty": 0
    },
    {
        "id": 2,
        "name": "11mp",
        "difficulty": 0
    },
    {
        "id": 3,
        "name": "123",
        "difficulty": 0
    },
    {
        "id": 4,
        "name": "12mp",
        "difficulty": 0
    },
    {
        "id": 5,
        "name": "13mp",
        "difficulty": 0
    },
    {
        "id": 6,
        "name": "14mp",
        "difficulty": 0
    },
    {
        "id": 7,
        "name": "15mp",
        "difficulty": 0
    },
    {
        "id": 8,
        "name": "16mp",
        "difficulty": 0
    },
    {
        "id": 9,
        "name": "17mp",
        "difficulty": 0
    },
    {
        "id": 10,
        "name": "18_up_rating",
        "difficulty": 1
    },
    {
        "id": 11,
        "name": "18mp",
        "difficulty": 0
    },
    {
        "id": 12,
        "name": "19mp",
        "difficulty": 0
    },
    {
        "id": 13,
        "name": "1k",
        "difficulty": 0
    },
    {
        "id": 14,
        "name": "1k_plus",
        "difficulty": 0
    },
    {
        "id": 15,
        "name": "1x_mobiledata",
        "difficulty": 1
    },
    {
        "id": 16,
        "name": "20mp",
        "difficulty": 0
    },
    {
        "id": 17,
        "name": "21mp",
        "difficulty": 0
    },
    {
        "id": 18,
        "name": "22mp",
        "difficulty": 0
    },
    {
        "id": 19,
        "name": "23mp",
        "difficulty": 0
    },
    {
        "id": 20,
        "name": "24mp",
        "difficulty": 0
    },
    {
        "id": 21,
        "name": "2k",
        "difficulty": 0
    },
    {
        "id": 22,
        "name": "2k_plus",
        "difficulty": 0
    },
    {
        "id": 23,
        "name": "2mp",
        "difficulty": 0
    },
    {
        "id": 24,
        "name": "30fps",
        "difficulty": 1
    },
    {
        "id": 25,
        "name": "30fps_select",
        "difficulty": 2
    },
    {
        "id": 26,
        "name": "360",
        "difficulty": 3
    },
    {
        "id": 27,
        "name": "3d_rotation",
        "difficulty": 1
    },
    {
        "id": 28,
        "name": "3g_mobiledata",
        "difficulty": 1
    },
    {
        "id": 29,
        "name": "3k",
        "difficulty": 0
    },
    {
        "id": 30,
        "name": "3k_plus",
        "difficulty": 0
    },
    {
        "id": 31,
        "name": "3mp",
        "difficulty": 0
    },
    {
        "id": 33,
        "name": "4g_mobiledata",
        "difficulty": 1
    },
    {
        "id": 34,
        "name": "4g_plus_mobiledata",
        "difficulty": 1
    },
    {
        "id": 35,
        "name": "4k",
        "difficulty": 0
    },
    {
        "id": 36,
        "name": "4k_plus",
        "difficulty": 0
    },
    {
        "id": 37,
        "name": "4mp",
        "difficulty": 0
    },
    {
        "id": 38,
        "name": "5g",
        "difficulty": 0
    },
    {
        "id": 39,
        "name": "5k",
        "difficulty": 0
    },
    {
        "id": 40,
        "name": "5k_plus",
        "difficulty": 0
    },
    {
        "id": 41,
        "name": "5mp",
        "difficulty": 0
    },
    {
        "id": 42,
        "name": "60fps",
        "difficulty": 1
    },
    {
        "id": 43,
        "name": "60fps_select",
        "difficulty": 2
    },
    {
        "id": 44,
        "name": "6_ft_apart",
        "difficulty": 0
    },
    {
        "id": 45,
        "name": "6k",
        "difficulty": 0
    },
    {
        "id": 46,
        "name": "6k_plus",
        "difficulty": 0
    },
    {
        "id": 47,
        "name": "6mp",
        "difficulty": 0
    },
    {
        "id": 48,
        "name": "7k",
        "difficulty": 0
    },
    {
        "id": 49,
        "name": "7k_plus",
        "difficulty": 0
    },
    {
        "id": 50,
        "name": "7mp",
        "difficulty": 0
    },
    {
        "id": 51,
        "name": "8k",
        "difficulty": 0
    },
    {
        "id": 52,
        "name": "8k_plus",
        "difficulty": 0
    },
    {
        "id": 53,
        "name": "8mp",
        "difficulty": 0
    },
    {
        "id": 54,
        "name": "9k",
        "difficulty": 0
    },
    {
        "id": 55,
        "name": "9k_plus",
        "difficulty": 0
    },
    {
        "id": 56,
        "name": "9mp",
        "difficulty": 0
    },
    {
        "id": 57,
        "name": "abc",
        "difficulty": 0
    },
    {
        "id": 59,
        "name": "access_alarm",
        "difficulty": 4
    },
    {
        "id": 60,
        "name": "access_alarms",
        "difficulty": 4
    },
    {
        "id": 61,
        "name": "access_time",
        "difficulty": 3
    },
    {
        "id": 62,
        "name": "access_time_filled",
        "difficulty": 3
    },
    {
        "id": 63,
        "name": "accessibility",
        "difficulty": 3
    },
    {
        "id": 64,
        "name": "accessibility_new",
        "difficulty": 3
    },
    {
        "id": 65,
        "name": "accessible",
        "difficulty": 3
    },
    {
        "id": 66,
        "name": "accessible_forward",
        "difficulty": 3
    },
    {
        "id": 69,
        "name": "account_box",
        "difficulty": 3
    },
    {
        "id": 70,
        "name": "account_circle",
        "difficulty": 2
    },
    {
        "id": 74,
        "name": "add",
        "difficulty": 1
    },
    {
        "id": 75,
        "name": "add_a_photo",
        "difficulty": 1
    },
    {
        "id": 76,
        "name": "add_alarm",
        "difficulty": 1
    },
    {
        "id": 77,
        "name": "add_alert",
        "difficulty": 1
    },
    {
        "id": 78,
        "name": "add_box",
        "difficulty": 1
    },
    {
        "id": 79,
        "name": "add_business",
        "difficulty": 3
    },
    {
        "id": 80,
        "name": "add_call",
        "difficulty": 1
    },
    {
        "id": 81,
        "name": "add_card",
        "difficulty": 1
    },
    {
        "id": 82,
        "name": "add_chart",
        "difficulty": 2
    },
    {
        "id": 83,
        "name": "add_circle",
        "difficulty": 1
    },
    {
        "id": 84,
        "name": "add_circle_outline",
        "difficulty": 1
    },
    {
        "id": 85,
        "name": "add_comment",
        "difficulty": 1
    },
    {
        "id": 86,
        "name": "add_home",
        "difficulty": 1
    },
    {
        "id": 87,
        "name": "add_home_work",
        "difficulty": 3
    },
    {
        "id": 88,
        "name": "add_ic_call",
        "difficulty": 2
    },
    {
        "id": 89,
        "name": "add_link",
        "difficulty": 1
    },
    {
        "id": 90,
        "name": "add_location",
        "difficulty": 1
    },
    {
        "id": 91,
        "name": "add_location_alt",
        "difficulty": 1
    },
    {
        "id": 92,
        "name": "add_moderator",
        "difficulty": 2
    },
    {
        "id": 93,
        "name": "add_photo_alternate",
        "difficulty": 1
    },
    {
        "id": 94,
        "name": "add_reaction",
        "difficulty": 2
    },
    {
        "id": 95,
        "name": "add_road",
        "difficulty": 4
    },
    {
        "id": 96,
        "name": "add_shopping_cart",
        "difficulty": 1
    },
    {
        "id": 97,
        "name": "add_task",
        "difficulty": 2
    },
    {
        "id": 98,
        "name": "add_to_drive",
        "difficulty": 2
    },
    {
        "id": 99,
        "name": "add_to_home_screen",
        "difficulty": 4
    },
    {
        "id": 100,
        "name": "add_to_photos",
        "difficulty": 4
    },
    {
        "id": 102,
        "name": "addchart",
        "difficulty": 2
    },
    {
        "id": 103,
        "name": "adf_scanner",
        "difficulty": 2
    },
    {
        "id": 106,
        "name": "adobe",
        "difficulty": 1
    },
    {
        "id": 107,
        "name": "ads_click",
        "difficulty": 2
    },
    {
        "id": 108,
        "name": "agriculture",
        "difficulty": 2
    },
    {
        "id": 109,
        "name": "air",
        "difficulty": 2
    },
    {
        "id": 110,
        "name": "airline_seat_flat",
        "difficulty": 4
    },
    {
        "id": 111,
        "name": "airline_seat_flat_angled",
        "difficulty": 4
    },
    {
        "id": 113,
        "name": "airline_seat_legroom_extra",
        "difficulty": 3
    },
    {
        "id": 114,
        "name": "airline_seat_legroom_normal",
        "difficulty": 2
    },
    {
        "id": 115,
        "name": "airline_seat_legroom_reduced",
        "difficulty": 2
    },
    {
        "id": 116,
        "name": "airline_seat_recline_extra",
        "difficulty": 3
    },
    {
        "id": 117,
        "name": "airline_seat_recline_normal",
        "difficulty": 2
    },
    {
        "id": 119,
        "name": "airlines",
        "difficulty": 2
    },
    {
        "id": 120,
        "name": "airplane_ticket",
        "difficulty": 1
    },
    {
        "id": 121,
        "name": "airplanemode_active",
        "difficulty": 1
    },
    {
        "id": 122,
        "name": "airplanemode_inactive",
        "difficulty": 1
    },
    {
        "id": 123,
        "name": "airplanemode_off",
        "difficulty": 1
    },
    {
        "id": 124,
        "name": "airplanemode_on",
        "difficulty": 1
    },
    {
        "id": 125,
        "name": "airplay",
        "difficulty": 3
    },
    {
        "id": 127,
        "name": "alarm",
        "difficulty": 1
    },
    {
        "id": 128,
        "name": "alarm_add",
        "difficulty": 1
    },
    {
        "id": 129,
        "name": "alarm_off",
        "difficulty": 1
    },
    {
        "id": 130,
        "name": "alarm_on",
        "difficulty": 1
    },
    {
        "id": 132,
        "name": "align_horizontal_center",
        "difficulty": 4
    },
    {
        "id": 133,
        "name": "align_horizontal_left",
        "difficulty": 3
    },
    {
        "id": 134,
        "name": "align_horizontal_right",
        "difficulty": 3
    },
    {
        "id": 135,
        "name": "align_vertical_bottom",
        "difficulty": 3
    },
    {
        "id": 136,
        "name": "align_vertical_center",
        "difficulty": 4
    },
    {
        "id": 137,
        "name": "align_vertical_top",
        "difficulty": 3
    },
    {
        "id": 138,
        "name": "all_inbox",
        "difficulty": 2
    },
    {
        "id": 141,
        "name": "alt_route",
        "difficulty": 2
    },
    {
        "id": 144,
        "name": "analytics",
        "difficulty": 3
    },
    {
        "id": 145,
        "name": "anchor",
        "difficulty": 1
    },
    {
        "id": 146,
        "name": "android",
        "difficulty": 1
    },
    {
        "id": 147,
        "name": "animation",
        "difficulty": 2
    },
    {
        "id": 148,
        "name": "announcement",
        "difficulty": 3
    },
    {
        "id": 150,
        "name": "apartment",
        "difficulty": 2
    },
    {
        "id": 152,
        "name": "app_blocking",
        "difficulty": 2
    },
    {
        "id": 153,
        "name": "app_registration",
        "difficulty": 3
    },
    {
        "id": 154,
        "name": "app_settings_alt",
        "difficulty": 2
    },
    {
        "id": 155,
        "name": "app_shortcut",
        "difficulty": 4
    },
    {
        "id": 156,
        "name": "apple",
        "difficulty": 1
    },
    {
        "id": 158,
        "name": "apps",
        "difficulty": 2
    },
    {
        "id": 159,
        "name": "apps_outage",
        "difficulty": 2
    },
    {
        "id": 160,
        "name": "architecture",
        "difficulty": 4
    },
    {
        "id": 161,
        "name": "archive",
        "difficulty": 3
    },
    {
        "id": 162,
        "name": "area_chart",
        "difficulty": 2
    },
    {
        "id": 163,
        "name": "arrow_back",
        "difficulty": 1
    },
    {
        "id": 164,
        "name": "arrow_back_ios",
        "difficulty": 2
    },
    {
        "id": 165,
        "name": "arrow_back_ios_new",
        "difficulty": 2
    },
    {
        "id": 166,
        "name": "arrow_circle_down",
        "difficulty": 1
    },
    {
        "id": 167,
        "name": "arrow_circle_left",
        "difficulty": 1
    },
    {
        "id": 168,
        "name": "arrow_circle_right",
        "difficulty": 1
    },
    {
        "id": 169,
        "name": "arrow_circle_up",
        "difficulty": 1
    },
    {
        "id": 170,
        "name": "arrow_downward",
        "difficulty": 2
    },
    {
        "id": 171,
        "name": "arrow_drop_down",
        "difficulty": 3
    },
    {
        "id": 172,
        "name": "arrow_drop_down_circle",
        "difficulty": 2
    },
    {
        "id": 173,
        "name": "arrow_drop_up",
        "difficulty": 3
    },
    {
        "id": 174,
        "name": "arrow_forward",
        "difficulty": 1
    },
    {
        "id": 175,
        "name": "arrow_forward_ios",
        "difficulty": 2
    },
    {
        "id": 176,
        "name": "arrow_left",
        "difficulty": 2
    },
    {
        "id": 177,
        "name": "arrow_outward",
        "difficulty": 2
    },
    {
        "id": 178,
        "name": "arrow_right",
        "difficulty": 2
    },
    {
        "id": 179,
        "name": "arrow_right_alt",
        "difficulty": 1
    },
    {
        "id": 180,
        "name": "arrow_upward",
        "difficulty": 1
    },
    {
        "id": 182,
        "name": "article",
        "difficulty": 3
    },
    {
        "id": 183,
        "name": "aspect_ratio",
        "difficulty": 3
    },
    {
        "id": 184,
        "name": "assessment",
        "difficulty": 4
    },
    {
        "id": 185,
        "name": "assignment",
        "difficulty": 3
    },
    {
        "id": 186,
        "name": "assignment_add",
        "difficulty": 2
    },
    {
        "id": 187,
        "name": "assignment_ind",
        "difficulty": 3
    },
    {
        "id": 188,
        "name": "assignment_late",
        "difficulty": 3
    },
    {
        "id": 189,
        "name": "assignment_return",
        "difficulty": 3
    },
    {
        "id": 190,
        "name": "assignment_returned",
        "difficulty": 3
    },
    {
        "id": 191,
        "name": "assignment_turned_in",
        "difficulty": 3
    },
    {
        "id": 192,
        "name": "assist_walker",
        "difficulty": 3
    },
    {
        "id": 194,
        "name": "assistant_direction",
        "difficulty": 3
    },
    {
        "id": 195,
        "name": "assistant_navigation",
        "difficulty": 4
    },
    {
        "id": 198,
        "name": "atm",
        "difficulty": 0
    },
    {
        "id": 199,
        "name": "attach_email",
        "difficulty": 1
    },
    {
        "id": 200,
        "name": "attach_file",
        "difficulty": 2
    },
    {
        "id": 201,
        "name": "attach_money",
        "difficulty": 2
    },
    {
        "id": 202,
        "name": "attachment",
        "difficulty": 1
    },
    {
        "id": 203,
        "name": "attractions",
        "difficulty": 2
    },
    {
        "id": 205,
        "name": "audio_file",
        "difficulty": 1
    },
    {
        "id": 206,
        "name": "audiotrack",
        "difficulty": 2
    },
    {
        "id": 210,
        "name": "auto_delete",
        "difficulty": 4
    },
    {
        "id": 211,
        "name": "auto_fix_high",
        "difficulty": 3
    },
    {
        "id": 212,
        "name": "auto_fix_normal",
        "difficulty": 3
    },
    {
        "id": 213,
        "name": "auto_fix_off",
        "difficulty": 4
    },
    {
        "id": 214,
        "name": "auto_graph",
        "difficulty": 2
    },
    {
        "id": 215,
        "name": "auto_mode",
        "difficulty": 4
    },
    {
        "id": 216,
        "name": "auto_stories",
        "difficulty": 3
    },
    {
        "id": 217,
        "name": "autofps_select",
        "difficulty": 3
    },
    {
        "id": 218,
        "name": "autorenew",
        "difficulty": 2
    },
    {
        "id": 219,
        "name": "av_timer",
        "difficulty": 2
    },
    {
        "id": 220,
        "name": "baby_changing_station",
        "difficulty": 1
    },
    {
        "id": 221,
        "name": "back_hand",
        "difficulty": 1
    },
    {
        "id": 222,
        "name": "backpack",
        "difficulty": 2
    },
    {
        "id": 223,
        "name": "backspace",
        "difficulty": 1
    },
    {
        "id": 224,
        "name": "backup",
        "difficulty": 2
    },
    {
        "id": 225,
        "name": "backup_table",
        "difficulty": 2
    },
    {
        "id": 226,
        "name": "badge",
        "difficulty": 2
    },
    {
        "id": 227,
        "name": "bakery_dining",
        "difficulty": 2
    },
    {
        "id": 228,
        "name": "balance",
        "difficulty": 1
    },
    {
        "id": 229,
        "name": "balcony",
        "difficulty": 2
    },
    {
        "id": 230,
        "name": "ballot",
        "difficulty": 3
    },
    {
        "id": 231,
        "name": "bar_chart",
        "difficulty": 1
    },
    {
        "id": 232,
        "name": "barcode_reader",
        "difficulty": 2
    },
    {
        "id": 233,
        "name": "batch_prediction",
        "difficulty": 3
    },
    {
        "id": 234,
        "name": "bathroom",
        "difficulty": 3
    },
    {
        "id": 235,
        "name": "bathtub",
        "difficulty": 1
    },
    {
        "id": 236,
        "name": "battery_0_bar",
        "difficulty": 2
    },
    {
        "id": 237,
        "name": "battery_1_bar",
        "difficulty": 1
    },
    {
        "id": 238,
        "name": "battery_2_bar",
        "difficulty": 1
    },
    {
        "id": 239,
        "name": "battery_3_bar",
        "difficulty": 1
    },
    {
        "id": 240,
        "name": "battery_4_bar",
        "difficulty": 1
    },
    {
        "id": 241,
        "name": "battery_5_bar",
        "difficulty": 1
    },
    {
        "id": 242,
        "name": "battery_6_bar",
        "difficulty": 1
    },
    {
        "id": 243,
        "name": "battery_alert",
        "difficulty": 1
    },
    {
        "id": 244,
        "name": "battery_charging_full",
        "difficulty": 1
    },
    {
        "id": 245,
        "name": "battery_full",
        "difficulty": 1
    },
    {
        "id": 246,
        "name": "battery_saver",
        "difficulty": 1
    },
    {
        "id": 247,
        "name": "battery_std",
        "difficulty": 1
    },
    {
        "id": 248,
        "name": "battery_unknown",
        "difficulty": 1
    },
    {
        "id": 249,
        "name": "beach_access",
        "difficulty": 2
    },
    {
        "id": 250,
        "name": "bed",
        "difficulty": 2
    },
    {
        "id": 251,
        "name": "bedroom_baby",
        "difficulty": 4
    },
    {
        "id": 252,
        "name": "bedroom_child",
        "difficulty": 4
    },
    {
        "id": 253,
        "name": "bedroom_parent",
        "difficulty": 4
    },
    {
        "id": 254,
        "name": "bedtime",
        "difficulty": 3
    },
    {
        "id": 255,
        "name": "bedtime_off",
        "difficulty": 3
    },
    {
        "id": 258,
        "name": "bike_scooter",
        "difficulty": 3
    },
    {
        "id": 259,
        "name": "biotech",
        "difficulty": 3
    },
    {
        "id": 260,
        "name": "blender",
        "difficulty": 2
    },
    {
        "id": 261,
        "name": "blind",
        "difficulty": 1
    },
    {
        "id": 262,
        "name": "blinds",
        "difficulty": 1
    },
    {
        "id": 263,
        "name": "blinds_closed",
        "difficulty": 1
    },
    {
        "id": 264,
        "name": "block",
        "difficulty": 2
    },
    {
        "id": 265,
        "name": "block_flipped",
        "difficulty": 2
    },
    {
        "id": 266,
        "name": "bloodtype",
        "difficulty": 2
    },
    {
        "id": 267,
        "name": "bluetooth",
        "difficulty": 0
    },
    {
        "id": 268,
        "name": "bluetooth_audio",
        "difficulty": 1
    },
    {
        "id": 269,
        "name": "bluetooth_connected",
        "difficulty": 2
    },
    {
        "id": 270,
        "name": "bluetooth_disabled",
        "difficulty": 1
    },
    {
        "id": 271,
        "name": "bluetooth_drive",
        "difficulty": 1
    },
    {
        "id": 272,
        "name": "bluetooth_searching",
        "difficulty": 1
    },
    {
        "id": 273,
        "name": "blur_circular",
        "difficulty": 4
    },
    {
        "id": 274,
        "name": "blur_linear",
        "difficulty": 4
    },
    {
        "id": 275,
        "name": "blur_off",
        "difficulty": 4
    },
    {
        "id": 276,
        "name": "blur_on",
        "difficulty": 4
    },
    {
        "id": 277,
        "name": "bolt",
        "difficulty": 2
    },
    {
        "id": 278,
        "name": "book",
        "difficulty": 4
    },
    {
        "id": 280,
        "name": "bookmark",
        "difficulty": 1
    },
    {
        "id": 281,
        "name": "bookmark_add",
        "difficulty": 1
    },
    {
        "id": 282,
        "name": "bookmark_added",
        "difficulty": 1
    },
    {
        "id": 283,
        "name": "bookmark_border",
        "difficulty": 1
    },
    {
        "id": 284,
        "name": "bookmark_outline",
        "difficulty": 1
    },
    {
        "id": 285,
        "name": "bookmark_remove",
        "difficulty": 1
    },
    {
        "id": 286,
        "name": "bookmarks",
        "difficulty": 1
    },
    {
        "id": 287,
        "name": "border_all",
        "difficulty": 4
    },
    {
        "id": 288,
        "name": "border_bottom",
        "difficulty": 3
    },
    {
        "id": 291,
        "name": "border_horizontal",
        "difficulty": 4
    },
    {
        "id": 292,
        "name": "border_inner",
        "difficulty": 4
    },
    {
        "id": 293,
        "name": "border_left",
        "difficulty": 4
    },
    {
        "id": 295,
        "name": "border_right",
        "difficulty": 4
    },
    {
        "id": 296,
        "name": "border_style",
        "difficulty": 4
    },
    {
        "id": 297,
        "name": "border_top",
        "difficulty": 4
    },
    {
        "id": 298,
        "name": "border_vertical",
        "difficulty": 4
    },
    {
        "id": 299,
        "name": "boy",
        "difficulty": 1
    },
    {
        "id": 300,
        "name": "branding_watermark",
        "difficulty": 3
    },
    {
        "id": 305,
        "name": "brightness_4",
        "difficulty": 4
    },
    {
        "id": 306,
        "name": "brightness_5",
        "difficulty": 4
    },
    {
        "id": 307,
        "name": "brightness_6",
        "difficulty": 4
    },
    {
        "id": 308,
        "name": "brightness_7",
        "difficulty": 4
    },
    {
        "id": 309,
        "name": "brightness_auto",
        "difficulty": 4
    },
    {
        "id": 311,
        "name": "brightness_low",
        "difficulty": 4
    },
    {
        "id": 312,
        "name": "brightness_medium",
        "difficulty": 4
    },
    {
        "id": 315,
        "name": "broken_image",
        "difficulty": 4
    },
    {
        "id": 319,
        "name": "brunch_dining",
        "difficulty": 4
    },
    {
        "id": 320,
        "name": "brush",
        "difficulty": 1
    },
    {
        "id": 321,
        "name": "bubble_chart",
        "difficulty": 2
    },
    {
        "id": 322,
        "name": "bug_report",
        "difficulty": 2
    },
    {
        "id": 323,
        "name": "build",
        "difficulty": 2
    },
    {
        "id": 324,
        "name": "build_circle",
        "difficulty": 2
    },
    {
        "id": 325,
        "name": "bungalow",
        "difficulty": 3
    },
    {
        "id": 326,
        "name": "burst_mode",
        "difficulty": 3
    },
    {
        "id": 327,
        "name": "bus_alert",
        "difficulty": 2
    },
    {
        "id": 328,
        "name": "business",
        "difficulty": 4
    },
    {
        "id": 329,
        "name": "business_center",
        "difficulty": 4
    },
    {
        "id": 330,
        "name": "cabin",
        "difficulty": 3
    },
    {
        "id": 331,
        "name": "cable",
        "difficulty": 1
    },
    {
        "id": 332,
        "name": "cached",
        "difficulty": 3
    },
    {
        "id": 333,
        "name": "cake",
        "difficulty": 1
    },
    {
        "id": 334,
        "name": "calculate",
        "difficulty": 2
    },
    {
        "id": 335,
        "name": "calendar_month",
        "difficulty": 2
    },
    {
        "id": 336,
        "name": "calendar_today",
        "difficulty": 2
    },
    {
        "id": 340,
        "name": "call",
        "difficulty": 1
    },
    {
        "id": 341,
        "name": "call_end",
        "difficulty": 1
    },
    {
        "id": 349,
        "name": "camera",
        "difficulty": 2
    },
    {
        "id": 350,
        "name": "camera_alt",
        "difficulty": 1
    },
    {
        "id": 351,
        "name": "camera_enhance",
        "difficulty": 1
    },
    {
        "id": 352,
        "name": "camera_front",
        "difficulty": 3
    },
    {
        "id": 353,
        "name": "camera_indoor",
        "difficulty": 2
    },
    {
        "id": 354,
        "name": "camera_outdoor",
        "difficulty": 3
    },
    {
        "id": 355,
        "name": "camera_rear",
        "difficulty": 2
    },
    {
        "id": 356,
        "name": "camera_roll",
        "difficulty": 2
    },
    {
        "id": 357,
        "name": "cameraswitch",
        "difficulty": 1
    },
    {
        "id": 359,
        "name": "cancel",
        "difficulty": 2
    },
    {
        "id": 360,
        "name": "cancel_presentation",
        "difficulty": 3
    },
    {
        "id": 361,
        "name": "cancel_schedule_send",
        "difficulty": 2
    },
    {
        "id": 362,
        "name": "candlestick_chart",
        "difficulty": 4
    },
    {
        "id": 363,
        "name": "car_crash",
        "difficulty": 3
    },
    {
        "id": 364,
        "name": "car_rental",
        "difficulty": 3
    },
    {
        "id": 365,
        "name": "car_repair",
        "difficulty": 3
    },
    {
        "id": 366,
        "name": "card_giftcard",
        "difficulty": 3
    },
    {
        "id": 367,
        "name": "card_membership",
        "difficulty": 4
    },
    {
        "id": 369,
        "name": "carpenter",
        "difficulty": 4
    },
    {
        "id": 370,
        "name": "cases",
        "difficulty": 3
    },
    {
        "id": 371,
        "name": "casino",
        "difficulty": 4
    },
    {
        "id": 372,
        "name": "cast",
        "difficulty": 2
    },
    {
        "id": 373,
        "name": "cast_connected",
        "difficulty": 2
    },
    {
        "id": 374,
        "name": "cast_for_education",
        "difficulty": 2
    },
    {
        "id": 375,
        "name": "castle",
        "difficulty": 1
    },
    {
        "id": 376,
        "name": "catching_pokemon",
        "difficulty": 2
    },
    {
        "id": 377,
        "name": "category",
        "difficulty": 4
    },
    {
        "id": 378,
        "name": "celebration",
        "difficulty": 2
    },
    {
        "id": 379,
        "name": "cell_tower",
        "difficulty": 2
    },
    {
        "id": 380,
        "name": "cell_wifi",
        "difficulty": 2
    },
    {
        "id": 381,
        "name": "center_focus_strong",
        "difficulty": 3
    },
    {
        "id": 382,
        "name": "center_focus_weak",
        "difficulty": 4
    },
    {
        "id": 383,
        "name": "chair",
        "difficulty": 2
    },
    {
        "id": 384,
        "name": "chair_alt",
        "difficulty": 3
    },
    {
        "id": 385,
        "name": "chalet",
        "difficulty": 3
    },
    {
        "id": 386,
        "name": "change_circle",
        "difficulty": 1
    },
    {
        "id": 388,
        "name": "charging_station",
        "difficulty": 3
    },
    {
        "id": 389,
        "name": "chat",
        "difficulty": 2
    },
    {
        "id": 390,
        "name": "chat_bubble",
        "difficulty": 1
    },
    {
        "id": 391,
        "name": "chat_bubble_outline",
        "difficulty": 1
    },
    {
        "id": 392,
        "name": "check",
        "difficulty": 1
    },
    {
        "id": 393,
        "name": "check_box",
        "difficulty": 1
    },
    {
        "id": 394,
        "name": "check_box_outline_blank",
        "difficulty": 2
    },
    {
        "id": 395,
        "name": "check_circle",
        "difficulty": 1
    },
    {
        "id": 396,
        "name": "check_circle_outline",
        "difficulty": 1
    },
    {
        "id": 397,
        "name": "checklist",
        "difficulty": 1
    },
    {
        "id": 398,
        "name": "checklist_rtl",
        "difficulty": 2
    },
    {
        "id": 399,
        "name": "checkroom",
        "difficulty": 3
    },
    {
        "id": 400,
        "name": "chevron_left",
        "difficulty": 3
    },
    {
        "id": 401,
        "name": "chevron_right",
        "difficulty": 3
    },
    {
        "id": 402,
        "name": "child_care",
        "difficulty": 2
    },
    {
        "id": 403,
        "name": "child_friendly",
        "difficulty": 2
    },
    {
        "id": 405,
        "name": "church",
        "difficulty": 1
    },
    {
        "id": 406,
        "name": "circle",
        "difficulty": 0
    },
    {
        "id": 407,
        "name": "circle_notifications",
        "difficulty": 1
    },
    {
        "id": 408,
        "name": "class",
        "difficulty": 3
    },
    {
        "id": 409,
        "name": "clean_hands",
        "difficulty": 2
    },
    {
        "id": 411,
        "name": "clear",
        "difficulty": 2
    },
    {
        "id": 413,
        "name": "close",
        "difficulty": 1
    },
    {
        "id": 414,
        "name": "close_fullscreen",
        "difficulty": 1
    },
    {
        "id": 415,
        "name": "closed_caption",
        "difficulty": 0
    },
    {
        "id": 416,
        "name": "closed_caption_disabled",
        "difficulty": 0
    },
    {
        "id": 417,
        "name": "closed_caption_off",
        "difficulty": 0
    },
    {
        "id": 418,
        "name": "cloud",
        "difficulty": 0
    },
    {
        "id": 419,
        "name": "cloud_circle",
        "difficulty": 1
    },
    {
        "id": 420,
        "name": "cloud_done",
        "difficulty": 1
    },
    {
        "id": 421,
        "name": "cloud_download",
        "difficulty": 1
    },
    {
        "id": 422,
        "name": "cloud_off",
        "difficulty": 1
    },
    {
        "id": 423,
        "name": "cloud_queue",
        "difficulty": 1
    },
    {
        "id": 424,
        "name": "cloud_sync",
        "difficulty": 2
    },
    {
        "id": 425,
        "name": "cloud_upload",
        "difficulty": 1
    },
    {
        "id": 426,
        "name": "cloudy_snowing",
        "difficulty": 1
    },
    {
        "id": 427,
        "name": "co2",
        "difficulty": 0
    },
    {
        "id": 428,
        "name": "co_present",
        "difficulty": 4
    },
    {
        "id": 429,
        "name": "code",
        "difficulty": 3
    },
    {
        "id": 430,
        "name": "code_off",
        "difficulty": 3
    },
    {
        "id": 431,
        "name": "coffee",
        "difficulty": 1
    },
    {
        "id": 432,
        "name": "coffee_maker",
        "difficulty": 2
    },
    {
        "id": 434,
        "name": "collections_bookmark",
        "difficulty": 4
    },
    {
        "id": 437,
        "name": "comment",
        "difficulty": 3
    },
    {
        "id": 439,
        "name": "comments_disabled",
        "difficulty": 3
    },
    {
        "id": 441,
        "name": "commute",
        "difficulty": 3
    },
    {
        "id": 443,
        "name": "compare_arrows",
        "difficulty": 4
    },
    {
        "id": 445,
        "name": "compost",
        "difficulty": 3
    },
    {
        "id": 446,
        "name": "compress",
        "difficulty": 2
    },
    {
        "id": 447,
        "name": "computer",
        "difficulty": 1
    },
    {
        "id": 450,
        "name": "connect_without_contact",
        "difficulty": 4
    },
    {
        "id": 451,
        "name": "connected_tv",
        "difficulty": 3
    },
    {
        "id": 452,
        "name": "connecting_airports",
        "difficulty": 3
    },
    {
        "id": 453,
        "name": "construction",
        "difficulty": 2
    },
    {
        "id": 454,
        "name": "contact_emergency",
        "difficulty": 2
    },
    {
        "id": 455,
        "name": "contact_mail",
        "difficulty": 2
    },
    {
        "id": 456,
        "name": "contact_page",
        "difficulty": 2
    },
    {
        "id": 457,
        "name": "contact_phone",
        "difficulty": 2
    },
    {
        "id": 458,
        "name": "contact_support",
        "difficulty": 3
    },
    {
        "id": 459,
        "name": "contactless",
        "difficulty": 3
    },
    {
        "id": 460,
        "name": "contacts",
        "difficulty": 2
    },
    {
        "id": 461,
        "name": "content_copy",
        "difficulty": 2
    },
    {
        "id": 462,
        "name": "content_cut",
        "difficulty": 3
    },
    {
        "id": 463,
        "name": "content_paste",
        "difficulty": 3
    },
    {
        "id": 464,
        "name": "content_paste_go",
        "difficulty": 3
    },
    {
        "id": 465,
        "name": "content_paste_off",
        "difficulty": 3
    },
    {
        "id": 466,
        "name": "content_paste_search",
        "difficulty": 3
    },
    {
        "id": 467,
        "name": "contrast",
        "difficulty": 4
    },
    {
        "id": 471,
        "name": "conveyor_belt",
        "difficulty": 3
    },
    {
        "id": 472,
        "name": "cookie",
        "difficulty": 2
    },
    {
        "id": 473,
        "name": "copy_all",
        "difficulty": 3
    },
    {
        "id": 474,
        "name": "copyright",
        "difficulty": 0
    },
    {
        "id": 475,
        "name": "coronavirus",
        "difficulty": 1
    },
    {
        "id": 477,
        "name": "cottage",
        "difficulty": 3
    },
    {
        "id": 478,
        "name": "countertops",
        "difficulty": 3
    },
    {
        "id": 479,
        "name": "create",
        "difficulty": 2
    },
    {
        "id": 480,
        "name": "create_new_folder",
        "difficulty": 1
    },
    {
        "id": 481,
        "name": "credit_card",
        "difficulty": 1
    },
    {
        "id": 482,
        "name": "credit_card_off",
        "difficulty": 1
    },
    {
        "id": 483,
        "name": "credit_score",
        "difficulty": 2
    },
    {
        "id": 484,
        "name": "crib",
        "difficulty": 1
    },
    {
        "id": 485,
        "name": "crisis_alert",
        "difficulty": 4
    },
    {
        "id": 486,
        "name": "crop",
        "difficulty": 3
    },
    {
        "id": 487,
        "name": "crop_16_9",
        "difficulty": 3
    },
    {
        "id": 488,
        "name": "crop_3_2",
        "difficulty": 3
    },
    {
        "id": 489,
        "name": "crop_5_4",
        "difficulty": 3
    },
    {
        "id": 490,
        "name": "crop_7_5",
        "difficulty": 3
    },
    {
        "id": 491,
        "name": "crop_din",
        "difficulty": 3
    },
    {
        "id": 493,
        "name": "crop_landscape",
        "difficulty": 4
    },
    {
        "id": 495,
        "name": "crop_portrait",
        "difficulty": 4
    },
    {
        "id": 496,
        "name": "crop_rotate",
        "difficulty": 3
    },
    {
        "id": 497,
        "name": "crop_square",
        "difficulty": 3
    },
    {
        "id": 498,
        "name": "cruelty_free",
        "difficulty": 4
    },
    {
        "id": 499,
        "name": "css",
        "difficulty": 0
    },
    {
        "id": 500,
        "name": "currency_bitcoin",
        "difficulty": 1
    },
    {
        "id": 501,
        "name": "currency_exchange",
        "difficulty": 2
    },
    {
        "id": 502,
        "name": "currency_franc",
        "difficulty": 2
    },
    {
        "id": 503,
        "name": "currency_lira",
        "difficulty": 2
    },
    {
        "id": 504,
        "name": "currency_pound",
        "difficulty": 1
    },
    {
        "id": 505,
        "name": "currency_ruble",
        "difficulty": 2
    },
    {
        "id": 506,
        "name": "currency_rupee",
        "difficulty": 1
    },
    {
        "id": 507,
        "name": "currency_yen",
        "difficulty": 1
    },
    {
        "id": 508,
        "name": "currency_yuan",
        "difficulty": 2
    },
    {
        "id": 509,
        "name": "curtains",
        "difficulty": 3
    },
    {
        "id": 511,
        "name": "cyclone",
        "difficulty": 2
    },
    {
        "id": 512,
        "name": "dangerous",
        "difficulty": 2
    },
    {
        "id": 513,
        "name": "dark_mode",
        "difficulty": 1
    },
    {
        "id": 514,
        "name": "dashboard",
        "difficulty": 4
    },
    {
        "id": 515,
        "name": "dashboard_customize",
        "difficulty": 3
    },
    {
        "id": 516,
        "name": "data_array",
        "difficulty": 4
    },
    {
        "id": 517,
        "name": "data_exploration",
        "difficulty": 3
    },
    {
        "id": 518,
        "name": "data_object",
        "difficulty": 4
    },
    {
        "id": 524,
        "name": "dataset_linked",
        "difficulty": 4
    },
    {
        "id": 525,
        "name": "date_range",
        "difficulty": 4
    },
    {
        "id": 526,
        "name": "deblur",
        "difficulty": 4
    },
    {
        "id": 527,
        "name": "deck",
        "difficulty": 2
    },
    {
        "id": 529,
        "name": "delete",
        "difficulty": 1
    },
    {
        "id": 530,
        "name": "delete_forever",
        "difficulty": 1
    },
    {
        "id": 531,
        "name": "delete_outline",
        "difficulty": 1
    },
    {
        "id": 532,
        "name": "delete_sweep",
        "difficulty": 1
    },
    {
        "id": 533,
        "name": "delivery_dining",
        "difficulty": 2
    },
    {
        "id": 534,
        "name": "density_large",
        "difficulty": 4
    },
    {
        "id": 535,
        "name": "density_medium",
        "difficulty": 4
    },
    {
        "id": 536,
        "name": "density_small",
        "difficulty": 4
    },
    {
        "id": 537,
        "name": "departure_board",
        "difficulty": 3
    },
    {
        "id": 540,
        "name": "design_services",
        "difficulty": 3
    },
    {
        "id": 541,
        "name": "desk",
        "difficulty": 2
    },
    {
        "id": 542,
        "name": "desktop_access_disabled",
        "difficulty": 2
    },
    {
        "id": 543,
        "name": "desktop_mac",
        "difficulty": 2
    },
    {
        "id": 544,
        "name": "desktop_windows",
        "difficulty": 2
    },
    {
        "id": 547,
        "name": "developer_board_off",
        "difficulty": 4
    },
    {
        "id": 548,
        "name": "developer_mode",
        "difficulty": 4
    },
    {
        "id": 550,
        "name": "device_thermostat",
        "difficulty": 3
    },
    {
        "id": 551,
        "name": "device_unknown",
        "difficulty": 2
    },
    {
        "id": 552,
        "name": "devices",
        "difficulty": 3
    },
    {
        "id": 553,
        "name": "devices_fold",
        "difficulty": 3
    },
    {
        "id": 554,
        "name": "devices_other",
        "difficulty": 2
    },
    {
        "id": 555,
        "name": "dew_point",
        "difficulty": 3
    },
    {
        "id": 556,
        "name": "dialer_sip",
        "difficulty": 1
    },
    {
        "id": 557,
        "name": "dialpad",
        "difficulty": 1
    },
    {
        "id": 558,
        "name": "diamond",
        "difficulty": 1
    },
    {
        "id": 559,
        "name": "difference",
        "difficulty": 3
    },
    {
        "id": 560,
        "name": "dining",
        "difficulty": 2
    },
    {
        "id": 561,
        "name": "dinner_dining",
        "difficulty": 1
    },
    {
        "id": 562,
        "name": "directions",
        "difficulty": 2
    },
    {
        "id": 563,
        "name": "directions_bike",
        "difficulty": 2
    },
    {
        "id": 564,
        "name": "directions_boat",
        "difficulty": 2
    },
    {
        "id": 565,
        "name": "directions_boat_filled",
        "difficulty": 2
    },
    {
        "id": 566,
        "name": "directions_bus",
        "difficulty": 2
    },
    {
        "id": 567,
        "name": "directions_bus_filled",
        "difficulty": 2
    },
    {
        "id": 568,
        "name": "directions_car",
        "difficulty": 2
    },
    {
        "id": 569,
        "name": "directions_car_filled",
        "difficulty": 2
    },
    {
        "id": 570,
        "name": "directions_ferry",
        "difficulty": 2
    },
    {
        "id": 571,
        "name": "directions_off",
        "difficulty": 3
    },
    {
        "id": 572,
        "name": "directions_railway",
        "difficulty": 2
    },
    {
        "id": 573,
        "name": "directions_railway_filled",
        "difficulty": 2
    },
    {
        "id": 574,
        "name": "directions_run",
        "difficulty": 2
    },
    {
        "id": 575,
        "name": "directions_subway",
        "difficulty": 2
    },
    {
        "id": 576,
        "name": "directions_subway_filled",
        "difficulty": 2
    },
    {
        "id": 577,
        "name": "directions_train",
        "difficulty": 2
    },
    {
        "id": 578,
        "name": "directions_transit",
        "difficulty": 2
    },
    {
        "id": 579,
        "name": "directions_transit_filled",
        "difficulty": 2
    },
    {
        "id": 580,
        "name": "directions_walk",
        "difficulty": 3
    },
    {
        "id": 581,
        "name": "dirty_lens",
        "difficulty": 2
    },
    {
        "id": 582,
        "name": "disabled_by_default",
        "difficulty": 3
    },
    {
        "id": 583,
        "name": "disabled_visible",
        "difficulty": 1
    },
    {
        "id": 584,
        "name": "disc_full",
        "difficulty": 3
    },
    {
        "id": 585,
        "name": "discord",
        "difficulty": 1
    },
    {
        "id": 586,
        "name": "discount",
        "difficulty": 2
    },
    {
        "id": 587,
        "name": "display_settings",
        "difficulty": 2
    },
    {
        "id": 588,
        "name": "diversity_1",
        "difficulty": 3
    },
    {
        "id": 589,
        "name": "diversity_2",
        "difficulty": 4
    },
    {
        "id": 590,
        "name": "diversity_3",
        "difficulty": 3
    },
    {
        "id": 591,
        "name": "dnd_forwardslash",
        "difficulty": 4
    },
    {
        "id": 593,
        "name": "do_disturb",
        "difficulty": 4
    },
    {
        "id": 594,
        "name": "do_disturb_alt",
        "difficulty": 4
    },
    {
        "id": 595,
        "name": "do_disturb_off",
        "difficulty": 4
    },
    {
        "id": 596,
        "name": "do_disturb_on",
        "difficulty": 4
    },
    {
        "id": 597,
        "name": "do_not_disturb",
        "difficulty": 2
    },
    {
        "id": 598,
        "name": "do_not_disturb_alt",
        "difficulty": 2
    },
    {
        "id": 599,
        "name": "do_not_disturb_off",
        "difficulty": 2
    },
    {
        "id": 600,
        "name": "do_not_disturb_on",
        "difficulty": 2
    },
    {
        "id": 602,
        "name": "do_not_step",
        "difficulty": 1
    },
    {
        "id": 603,
        "name": "do_not_touch",
        "difficulty": 1
    },
    {
        "id": 604,
        "name": "dock",
        "difficulty": 3
    },
    {
        "id": 605,
        "name": "document_scanner",
        "difficulty": 4
    },
    {
        "id": 607,
        "name": "domain_add",
        "difficulty": 4
    },
    {
        "id": 608,
        "name": "domain_disabled",
        "difficulty": 4
    },
    {
        "id": 610,
        "name": "done",
        "difficulty": 1
    },
    {
        "id": 611,
        "name": "done_all",
        "difficulty": 1
    },
    {
        "id": 612,
        "name": "done_outline",
        "difficulty": 1
    },
    {
        "id": 615,
        "name": "door_back",
        "difficulty": 3
    },
    {
        "id": 616,
        "name": "door_front",
        "difficulty": 3
    },
    {
        "id": 617,
        "name": "door_sliding",
        "difficulty": 3
    },
    {
        "id": 618,
        "name": "doorbell",
        "difficulty": 3
    },
    {
        "id": 619,
        "name": "double_arrow",
        "difficulty": 1
    },
    {
        "id": 620,
        "name": "downhill_skiing",
        "difficulty": 1
    },
    {
        "id": 621,
        "name": "download",
        "difficulty": 1
    },
    {
        "id": 622,
        "name": "download_done",
        "difficulty": 2
    },
    {
        "id": 623,
        "name": "download_for_offline",
        "difficulty": 2
    },
    {
        "id": 624,
        "name": "downloading",
        "difficulty": 1
    },
    {
        "id": 625,
        "name": "drafts",
        "difficulty": 3
    },
    {
        "id": 626,
        "name": "drag_handle",
        "difficulty": 4
    },
    {
        "id": 628,
        "name": "draw",
        "difficulty": 1
    },
    {
        "id": 629,
        "name": "drive_eta",
        "difficulty": 2
    },
    {
        "id": 630,
        "name": "drive_file_move",
        "difficulty": 2
    },
    {
        "id": 631,
        "name": "drive_file_move_outline",
        "difficulty": 2
    },
    {
        "id": 632,
        "name": "drive_file_move_rtl",
        "difficulty": 2
    },
    {
        "id": 633,
        "name": "drive_file_rename_outline",
        "difficulty": 3
    },
    {
        "id": 634,
        "name": "drive_folder_upload",
        "difficulty": 2
    },
    {
        "id": 635,
        "name": "dry",
        "difficulty": 3
    },
    {
        "id": 636,
        "name": "dry_cleaning",
        "difficulty": 2
    },
    {
        "id": 641,
        "name": "e_mobiledata",
        "difficulty": 3
    },
    {
        "id": 643,
        "name": "earbuds_battery",
        "difficulty": 4
    },
    {
        "id": 644,
        "name": "east",
        "difficulty": 2
    },
    {
        "id": 645,
        "name": "eco",
        "difficulty": 2
    },
    {
        "id": 646,
        "name": "edgesensor_high",
        "difficulty": 4
    },
    {
        "id": 648,
        "name": "edit",
        "difficulty": 2
    },
    {
        "id": 649,
        "name": "edit_attributes",
        "difficulty": 4
    },
    {
        "id": 650,
        "name": "edit_calendar",
        "difficulty": 3
    },
    {
        "id": 651,
        "name": "edit_document",
        "difficulty": 2
    },
    {
        "id": 652,
        "name": "edit_location",
        "difficulty": 2
    },
    {
        "id": 653,
        "name": "edit_location_alt",
        "difficulty": 2
    },
    {
        "id": 654,
        "name": "edit_note",
        "difficulty": 3
    },
    {
        "id": 655,
        "name": "edit_notifications",
        "difficulty": 2
    },
    {
        "id": 656,
        "name": "edit_off",
        "difficulty": 2
    },
    {
        "id": 657,
        "name": "edit_road",
        "difficulty": 4
    },
    {
        "id": 658,
        "name": "edit_square",
        "difficulty": 2
    },
    {
        "id": 659,
        "name": "egg",
        "difficulty": 1
    },
    {
        "id": 660,
        "name": "egg_alt",
        "difficulty": 4
    },
    {
        "id": 662,
        "name": "elderly",
        "difficulty": 2
    },
    {
        "id": 663,
        "name": "elderly_woman",
        "difficulty": 2
    },
    {
        "id": 664,
        "name": "electric_bike",
        "difficulty": 1
    },
    {
        "id": 665,
        "name": "electric_bolt",
        "difficulty": 2
    },
    {
        "id": 666,
        "name": "electric_car",
        "difficulty": 1
    },
    {
        "id": 667,
        "name": "electric_meter",
        "difficulty": 4
    },
    {
        "id": 668,
        "name": "electric_moped",
        "difficulty": 2
    },
    {
        "id": 669,
        "name": "electric_rickshaw",
        "difficulty": 3
    },
    {
        "id": 670,
        "name": "electric_scooter",
        "difficulty": 2
    },
    {
        "id": 672,
        "name": "elevator",
        "difficulty": 2
    },
    {
        "id": 673,
        "name": "email",
        "difficulty": 1
    },
    {
        "id": 677,
        "name": "emoji_emotions",
        "difficulty": 2
    },
    {
        "id": 679,
        "name": "emoji_flags",
        "difficulty": 2
    },
    {
        "id": 680,
        "name": "emoji_food_beverage",
        "difficulty": 2
    },
    {
        "id": 681,
        "name": "emoji_nature",
        "difficulty": 3
    },
    {
        "id": 683,
        "name": "emoji_people",
        "difficulty": 2
    },
    {
        "id": 684,
        "name": "emoji_symbols",
        "difficulty": 1
    },
    {
        "id": 685,
        "name": "emoji_transportation",
        "difficulty": 3
    },
    {
        "id": 686,
        "name": "energy_savings_leaf",
        "difficulty": 2
    },
    {
        "id": 687,
        "name": "engineering",
        "difficulty": 2
    },
    {
        "id": 688,
        "name": "enhance_photo_translate",
        "difficulty": 3
    },
    {
        "id": 689,
        "name": "enhanced_encryption",
        "difficulty": 3
    },
    {
        "id": 690,
        "name": "equalizer",
        "difficulty": 4
    },
    {
        "id": 691,
        "name": "error",
        "difficulty": 2
    },
    {
        "id": 692,
        "name": "error_outline",
        "difficulty": 2
    },
    {
        "id": 693,
        "name": "escalator",
        "difficulty": 1
    },
    {
        "id": 695,
        "name": "euro",
        "difficulty": 1
    },
    {
        "id": 696,
        "name": "euro_symbol",
        "difficulty": 1
    },
    {
        "id": 697,
        "name": "ev_station",
        "difficulty": 2
    },
    {
        "id": 698,
        "name": "event",
        "difficulty": 4
    },
    {
        "id": 699,
        "name": "event_available",
        "difficulty": 4
    },
    {
        "id": 700,
        "name": "event_busy",
        "difficulty": 4
    },
    {
        "id": 702,
        "name": "event_repeat",
        "difficulty": 4
    },
    {
        "id": 703,
        "name": "event_seat",
        "difficulty": 4
    },
    {
        "id": 704,
        "name": "exit_to_app",
        "difficulty": 4
    },
    {
        "id": 705,
        "name": "expand",
        "difficulty": 3
    },
    {
        "id": 706,
        "name": "expand_circle_down",
        "difficulty": 3
    },
    {
        "id": 707,
        "name": "expand_less",
        "difficulty": 3
    },
    {
        "id": 708,
        "name": "expand_more",
        "difficulty": 3
    },
    {
        "id": 710,
        "name": "explore",
        "difficulty": 4
    },
    {
        "id": 711,
        "name": "explore_off",
        "difficulty": 3
    },
    {
        "id": 712,
        "name": "exposure",
        "difficulty": 3
    },
    {
        "id": 713,
        "name": "exposure_minus_1",
        "difficulty": 1
    },
    {
        "id": 714,
        "name": "exposure_minus_2",
        "difficulty": 1
    },
    {
        "id": 715,
        "name": "exposure_neg_1",
        "difficulty": 1
    },
    {
        "id": 716,
        "name": "exposure_neg_2",
        "difficulty": 1
    },
    {
        "id": 717,
        "name": "exposure_plus_1",
        "difficulty": 1
    },
    {
        "id": 718,
        "name": "exposure_plus_2",
        "difficulty": 1
    },
    {
        "id": 719,
        "name": "exposure_zero",
        "difficulty": 2
    },
    {
        "id": 720,
        "name": "extension",
        "difficulty": 3
    },
    {
        "id": 721,
        "name": "extension_off",
        "difficulty": 3
    },
    {
        "id": 722,
        "name": "face",
        "difficulty": 1
    },
    {
        "id": 723,
        "name": "face_2",
        "difficulty": 1
    },
    {
        "id": 724,
        "name": "face_3",
        "difficulty": 1
    },
    {
        "id": 725,
        "name": "face_4",
        "difficulty": 1
    },
    {
        "id": 726,
        "name": "face_5",
        "difficulty": 1
    },
    {
        "id": 727,
        "name": "face_6",
        "difficulty": 1
    },
    {
        "id": 728,
        "name": "face_retouching_natural",
        "difficulty": 1
    },
    {
        "id": 729,
        "name": "face_retouching_off",
        "difficulty": 1
    },
    {
        "id": 730,
        "name": "facebook",
        "difficulty": 1
    },
    {
        "id": 731,
        "name": "fact_check",
        "difficulty": 4
    },
    {
        "id": 732,
        "name": "factory",
        "difficulty": 1
    },
    {
        "id": 733,
        "name": "family_restroom",
        "difficulty": 3
    },
    {
        "id": 734,
        "name": "fast_forward",
        "difficulty": 2
    },
    {
        "id": 735,
        "name": "fast_rewind",
        "difficulty": 2
    },
    {
        "id": 736,
        "name": "fastfood",
        "difficulty": 2
    },
    {
        "id": 737,
        "name": "favorite",
        "difficulty": 3
    },
    {
        "id": 738,
        "name": "favorite_border",
        "difficulty": 3
    },
    {
        "id": 739,
        "name": "favorite_outline",
        "difficulty": 3
    },
    {
        "id": 740,
        "name": "fax",
        "difficulty": 4
    },
    {
        "id": 744,
        "name": "feedback",
        "difficulty": 3
    },
    {
        "id": 745,
        "name": "female",
        "difficulty": 1
    },
    {
        "id": 746,
        "name": "fence",
        "difficulty": 3
    },
    {
        "id": 747,
        "name": "festival",
        "difficulty": 3
    },
    {
        "id": 748,
        "name": "fiber_dvr",
        "difficulty": 1
    },
    {
        "id": 750,
        "name": "fiber_new",
        "difficulty": 1
    },
    {
        "id": 751,
        "name": "fiber_pin",
        "difficulty": 1
    },
    {
        "id": 753,
        "name": "file_copy",
        "difficulty": 1
    },
    {
        "id": 754,
        "name": "file_download",
        "difficulty": 1
    },
    {
        "id": 755,
        "name": "file_download_done",
        "difficulty": 1
    },
    {
        "id": 756,
        "name": "file_download_off",
        "difficulty": 1
    },
    {
        "id": 757,
        "name": "file_open",
        "difficulty": 2
    },
    {
        "id": 759,
        "name": "file_upload",
        "difficulty": 1
    },
    {
        "id": 760,
        "name": "file_upload_off",
        "difficulty": 1
    },
    {
        "id": 761,
        "name": "filter",
        "difficulty": 3
    },
    {
        "id": 762,
        "name": "filter_1",
        "difficulty": 2
    },
    {
        "id": 763,
        "name": "filter_2",
        "difficulty": 2
    },
    {
        "id": 764,
        "name": "filter_3",
        "difficulty": 2
    },
    {
        "id": 765,
        "name": "filter_4",
        "difficulty": 2
    },
    {
        "id": 766,
        "name": "filter_5",
        "difficulty": 2
    },
    {
        "id": 767,
        "name": "filter_6",
        "difficulty": 2
    },
    {
        "id": 768,
        "name": "filter_7",
        "difficulty": 2
    },
    {
        "id": 769,
        "name": "filter_8",
        "difficulty": 2
    },
    {
        "id": 770,
        "name": "filter_9",
        "difficulty": 2
    },
    {
        "id": 771,
        "name": "filter_9_plus",
        "difficulty": 1
    },
    {
        "id": 772,
        "name": "filter_alt",
        "difficulty": 1
    },
    {
        "id": 773,
        "name": "filter_alt_off",
        "difficulty": 1
    },
    {
        "id": 774,
        "name": "filter_b_and_w",
        "difficulty": 4
    },
    {
        "id": 775,
        "name": "filter_center_focus",
        "difficulty": 3
    },
    {
        "id": 780,
        "name": "filter_list_alt",
        "difficulty": 3
    },
    {
        "id": 781,
        "name": "filter_list_off",
        "difficulty": 4
    },
    {
        "id": 785,
        "name": "find_in_page",
        "difficulty": 2
    },
    {
        "id": 786,
        "name": "find_replace",
        "difficulty": 3
    },
    {
        "id": 787,
        "name": "fingerprint",
        "difficulty": 1
    },
    {
        "id": 788,
        "name": "fire_extinguisher",
        "difficulty": 3
    },
    {
        "id": 790,
        "name": "fire_hydrant_alt",
        "difficulty": 1
    },
    {
        "id": 791,
        "name": "fire_truck",
        "difficulty": 4
    },
    {
        "id": 792,
        "name": "fireplace",
        "difficulty": 3
    },
    {
        "id": 793,
        "name": "first_page",
        "difficulty": 3
    },
    {
        "id": 794,
        "name": "fit_screen",
        "difficulty": 3
    },
    {
        "id": 795,
        "name": "fitbit",
        "difficulty": 4
    },
    {
        "id": 796,
        "name": "fitness_center",
        "difficulty": 2
    },
    {
        "id": 797,
        "name": "flag",
        "difficulty": 1
    },
    {
        "id": 798,
        "name": "flag_circle",
        "difficulty": 1
    },
    {
        "id": 800,
        "name": "flare",
        "difficulty": 4
    },
    {
        "id": 801,
        "name": "flash_auto",
        "difficulty": 3
    },
    {
        "id": 802,
        "name": "flash_off",
        "difficulty": 2
    },
    {
        "id": 803,
        "name": "flash_on",
        "difficulty": 1
    },
    {
        "id": 804,
        "name": "flashlight_off",
        "difficulty": 3
    },
    {
        "id": 805,
        "name": "flashlight_on",
        "difficulty": 2
    },
    {
        "id": 806,
        "name": "flatware",
        "difficulty": 2
    },
    {
        "id": 807,
        "name": "flight",
        "difficulty": 2
    },
    {
        "id": 808,
        "name": "flight_class",
        "difficulty": 4
    },
    {
        "id": 809,
        "name": "flight_land",
        "difficulty": 1
    },
    {
        "id": 810,
        "name": "flight_takeoff",
        "difficulty": 1
    },
    {
        "id": 811,
        "name": "flip",
        "difficulty": 3
    },
    {
        "id": 813,
        "name": "flip_camera_ios",
        "difficulty": 3
    },
    {
        "id": 816,
        "name": "flood",
        "difficulty": 1
    },
    {
        "id": 823,
        "name": "foggy",
        "difficulty": 2
    },
    {
        "id": 824,
        "name": "folder",
        "difficulty": 1
    },
    {
        "id": 825,
        "name": "folder_copy",
        "difficulty": 2
    },
    {
        "id": 826,
        "name": "folder_delete",
        "difficulty": 1
    },
    {
        "id": 827,
        "name": "folder_off",
        "difficulty": 1
    },
    {
        "id": 828,
        "name": "folder_open",
        "difficulty": 1
    },
    {
        "id": 829,
        "name": "folder_shared",
        "difficulty": 1
    },
    {
        "id": 830,
        "name": "folder_special",
        "difficulty": 1
    },
    {
        "id": 831,
        "name": "folder_zip",
        "difficulty": 1
    },
    {
        "id": 832,
        "name": "follow_the_signs",
        "difficulty": 1
    },
    {
        "id": 833,
        "name": "font_download",
        "difficulty": 3
    },
    {
        "id": 834,
        "name": "font_download_off",
        "difficulty": 2
    },
    {
        "id": 835,
        "name": "food_bank",
        "difficulty": 2
    },
    {
        "id": 836,
        "name": "forest",
        "difficulty": 2
    },
    {
        "id": 837,
        "name": "fork_left",
        "difficulty": 3
    },
    {
        "id": 838,
        "name": "fork_right",
        "difficulty": 3
    },
    {
        "id": 839,
        "name": "forklift",
        "difficulty": 1
    },
    {
        "id": 840,
        "name": "format_align_center",
        "difficulty": 2
    },
    {
        "id": 841,
        "name": "format_align_justify",
        "difficulty": 4
    },
    {
        "id": 842,
        "name": "format_align_left",
        "difficulty": 2
    },
    {
        "id": 843,
        "name": "format_align_right",
        "difficulty": 2
    },
    {
        "id": 844,
        "name": "format_bold",
        "difficulty": 3
    },
    {
        "id": 845,
        "name": "format_clear",
        "difficulty": 4
    },
    {
        "id": 846,
        "name": "format_color_fill",
        "difficulty": 3
    },
    {
        "id": 848,
        "name": "format_color_text",
        "difficulty": 3
    },
    {
        "id": 849,
        "name": "format_indent_decrease",
        "difficulty": 3
    },
    {
        "id": 850,
        "name": "format_indent_increase",
        "difficulty": 3
    },
    {
        "id": 851,
        "name": "format_italic",
        "difficulty": 2
    },
    {
        "id": 852,
        "name": "format_line_spacing",
        "difficulty": 1
    },
    {
        "id": 853,
        "name": "format_list_bulleted",
        "difficulty": 2
    },
    {
        "id": 854,
        "name": "format_list_bulleted_add",
        "difficulty": 2
    },
    {
        "id": 855,
        "name": "format_list_numbered",
        "difficulty": 2
    },
    {
        "id": 856,
        "name": "format_list_numbered_rtl",
        "difficulty": 2
    },
    {
        "id": 858,
        "name": "format_paint",
        "difficulty": 2
    },
    {
        "id": 859,
        "name": "format_quote",
        "difficulty": 2
    },
    {
        "id": 860,
        "name": "format_shapes",
        "difficulty": 4
    },
    {
        "id": 861,
        "name": "format_size",
        "difficulty": 2
    },
    {
        "id": 862,
        "name": "format_strikethrough",
        "difficulty": 2
    },
    {
        "id": 863,
        "name": "format_textdirection_l_to_r",
        "difficulty": 3
    },
    {
        "id": 864,
        "name": "format_textdirection_r_to_l",
        "difficulty": 3
    },
    {
        "id": 865,
        "name": "format_underline",
        "difficulty": 2
    },
    {
        "id": 866,
        "name": "format_underlined",
        "difficulty": 2
    },
    {
        "id": 867,
        "name": "fort",
        "difficulty": 1
    },
    {
        "id": 868,
        "name": "forum",
        "difficulty": 2
    },
    {
        "id": 869,
        "name": "forward",
        "difficulty": 2
    },
    {
        "id": 870,
        "name": "forward_10",
        "difficulty": 1
    },
    {
        "id": 871,
        "name": "forward_30",
        "difficulty": 1
    },
    {
        "id": 872,
        "name": "forward_5",
        "difficulty": 1
    },
    {
        "id": 873,
        "name": "forward_to_inbox",
        "difficulty": 2
    },
    {
        "id": 876,
        "name": "free_cancellation",
        "difficulty": 4
    },
    {
        "id": 877,
        "name": "front_hand",
        "difficulty": 1
    },
    {
        "id": 878,
        "name": "front_loader",
        "difficulty": 2
    },
    {
        "id": 879,
        "name": "fullscreen",
        "difficulty": 2
    },
    {
        "id": 880,
        "name": "fullscreen_exit",
        "difficulty": 1
    },
    {
        "id": 881,
        "name": "functions",
        "difficulty": 3
    },
    {
        "id": 882,
        "name": "g_mobiledata",
        "difficulty": 3
    },
    {
        "id": 883,
        "name": "g_translate",
        "difficulty": 2
    },
    {
        "id": 884,
        "name": "gamepad",
        "difficulty": 2
    },
    {
        "id": 886,
        "name": "garage",
        "difficulty": 2
    },
    {
        "id": 887,
        "name": "gas_meter",
        "difficulty": 4
    },
    {
        "id": 888,
        "name": "gavel",
        "difficulty": 3
    },
    {
        "id": 891,
        "name": "get_app",
        "difficulty": 2
    },
    {
        "id": 892,
        "name": "gif",
        "difficulty": 0
    },
    {
        "id": 893,
        "name": "gif_box",
        "difficulty": 0
    },
    {
        "id": 894,
        "name": "girl",
        "difficulty": 1
    },
    {
        "id": 896,
        "name": "goat",
        "difficulty": 1
    },
    {
        "id": 897,
        "name": "golf_course",
        "difficulty": 1
    },
    {
        "id": 903,
        "name": "gps_off",
        "difficulty": 4
    },
    {
        "id": 905,
        "name": "gradient",
        "difficulty": 3
    },
    {
        "id": 906,
        "name": "grading",
        "difficulty": 3
    },
    {
        "id": 909,
        "name": "grass",
        "difficulty": 2
    },
    {
        "id": 910,
        "name": "grid_3x3",
        "difficulty": 2
    },
    {
        "id": 911,
        "name": "grid_4x4",
        "difficulty": 1
    },
    {
        "id": 913,
        "name": "grid_off",
        "difficulty": 2
    },
    {
        "id": 914,
        "name": "grid_on",
        "difficulty": 3
    },
    {
        "id": 915,
        "name": "grid_view",
        "difficulty": 2
    },
    {
        "id": 916,
        "name": "group",
        "difficulty": 2
    },
    {
        "id": 917,
        "name": "group_add",
        "difficulty": 1
    },
    {
        "id": 918,
        "name": "group_off",
        "difficulty": 1
    },
    {
        "id": 919,
        "name": "group_remove",
        "difficulty": 1
    },
    {
        "id": 921,
        "name": "groups",
        "difficulty": 2
    },
    {
        "id": 922,
        "name": "groups_2",
        "difficulty": 2
    },
    {
        "id": 923,
        "name": "groups_3",
        "difficulty": 2
    },
    {
        "id": 924,
        "name": "h_mobiledata",
        "difficulty": 3
    },
    {
        "id": 925,
        "name": "h_plus_mobiledata",
        "difficulty": 2
    },
    {
        "id": 926,
        "name": "hail",
        "difficulty": 3
    },
    {
        "id": 927,
        "name": "handshake",
        "difficulty": 2
    },
    {
        "id": 928,
        "name": "handyman",
        "difficulty": 2
    },
    {
        "id": 929,
        "name": "hardware",
        "difficulty": 3
    },
    {
        "id": 930,
        "name": "hd",
        "difficulty": 0
    },
    {
        "id": 931,
        "name": "hdr_auto",
        "difficulty": 3
    },
    {
        "id": 932,
        "name": "hdr_auto_select",
        "difficulty": 1
    },
    {
        "id": 933,
        "name": "hdr_enhanced_select",
        "difficulty": 2
    },
    {
        "id": 934,
        "name": "hdr_off",
        "difficulty": 0
    },
    {
        "id": 935,
        "name": "hdr_off_select",
        "difficulty": 1
    },
    {
        "id": 936,
        "name": "hdr_on",
        "difficulty": 1
    },
    {
        "id": 937,
        "name": "hdr_on_select",
        "difficulty": 1
    },
    {
        "id": 938,
        "name": "hdr_plus",
        "difficulty": 0
    },
    {
        "id": 941,
        "name": "headphones",
        "difficulty": 1
    },
    {
        "id": 942,
        "name": "headphones_battery",
        "difficulty": 1
    },
    {
        "id": 943,
        "name": "headset",
        "difficulty": 1
    },
    {
        "id": 944,
        "name": "headset_mic",
        "difficulty": 1
    },
    {
        "id": 945,
        "name": "headset_off",
        "difficulty": 1
    },
    {
        "id": 946,
        "name": "healing",
        "difficulty": 4
    },
    {
        "id": 947,
        "name": "health_and_safety",
        "difficulty": 3
    },
    {
        "id": 948,
        "name": "hearing",
        "difficulty": 3
    },
    {
        "id": 949,
        "name": "hearing_disabled",
        "difficulty": 2
    },
    {
        "id": 950,
        "name": "heart_broken",
        "difficulty": 1
    },
    {
        "id": 951,
        "name": "heat_pump",
        "difficulty": 4
    },
    {
        "id": 953,
        "name": "help",
        "difficulty": 3
    },
    {
        "id": 954,
        "name": "help_center",
        "difficulty": 4
    },
    {
        "id": 955,
        "name": "help_outline",
        "difficulty": 3
    },
    {
        "id": 956,
        "name": "hevc",
        "difficulty": 0
    },
    {
        "id": 957,
        "name": "hexagon",
        "difficulty": 0
    },
    {
        "id": 958,
        "name": "hide_image",
        "difficulty": 2
    },
    {
        "id": 959,
        "name": "hide_source",
        "difficulty": 4
    },
    {
        "id": 960,
        "name": "high_quality",
        "difficulty": 1
    },
    {
        "id": 961,
        "name": "highlight",
        "difficulty": 4
    },
    {
        "id": 963,
        "name": "highlight_off",
        "difficulty": 4
    },
    {
        "id": 964,
        "name": "highlight_remove",
        "difficulty": 4
    },
    {
        "id": 965,
        "name": "hiking",
        "difficulty": 2
    },
    {
        "id": 966,
        "name": "history",
        "difficulty": 2
    },
    {
        "id": 967,
        "name": "history_edu",
        "difficulty": 4
    },
    {
        "id": 969,
        "name": "hive",
        "difficulty": 3
    },
    {
        "id": 970,
        "name": "hls",
        "difficulty": 0
    },
    {
        "id": 971,
        "name": "hls_off",
        "difficulty": 0
    },
    {
        "id": 972,
        "name": "holiday_village",
        "difficulty": 4
    },
    {
        "id": 973,
        "name": "home",
        "difficulty": 1
    },
    {
        "id": 974,
        "name": "home_filled",
        "difficulty": 1
    },
    {
        "id": 977,
        "name": "home_repair_service",
        "difficulty": 3
    },
    {
        "id": 978,
        "name": "home_work",
        "difficulty": 3
    },
    {
        "id": 981,
        "name": "horizontal_split",
        "difficulty": 4
    },
    {
        "id": 982,
        "name": "hot_tub",
        "difficulty": 2
    },
    {
        "id": 983,
        "name": "hotel",
        "difficulty": 3
    },
    {
        "id": 984,
        "name": "hotel_class",
        "difficulty": 3
    },
    {
        "id": 985,
        "name": "hourglass_bottom",
        "difficulty": 1
    },
    {
        "id": 986,
        "name": "hourglass_disabled",
        "difficulty": 1
    },
    {
        "id": 987,
        "name": "hourglass_empty",
        "difficulty": 1
    },
    {
        "id": 988,
        "name": "hourglass_full",
        "difficulty": 1
    },
    {
        "id": 989,
        "name": "hourglass_top",
        "difficulty": 1
    },
    {
        "id": 990,
        "name": "house",
        "difficulty": 1
    },
    {
        "id": 991,
        "name": "house_siding",
        "difficulty": 3
    },
    {
        "id": 992,
        "name": "houseboat",
        "difficulty": 2
    },
    {
        "id": 994,
        "name": "how_to_vote",
        "difficulty": 3
    },
    {
        "id": 995,
        "name": "html",
        "difficulty": 0
    },
    {
        "id": 996,
        "name": "http",
        "difficulty": 0
    },
    {
        "id": 1000,
        "name": "ice_skating",
        "difficulty": 2
    },
    {
        "id": 1001,
        "name": "icecream",
        "difficulty": 3
    },
    {
        "id": 1002,
        "name": "image",
        "difficulty": 1
    },
    {
        "id": 1003,
        "name": "image_aspect_ratio",
        "difficulty": 4
    },
    {
        "id": 1004,
        "name": "image_not_supported",
        "difficulty": 3
    },
    {
        "id": 1005,
        "name": "image_search",
        "difficulty": 2
    },
    {
        "id": 1006,
        "name": "imagesearch_roller",
        "difficulty": 4
    },
    {
        "id": 1008,
        "name": "import_export",
        "difficulty": 3
    },
    {
        "id": 1009,
        "name": "important_devices",
        "difficulty": 3
    },
    {
        "id": 1010,
        "name": "inbox",
        "difficulty": 2
    },
    {
        "id": 1011,
        "name": "incomplete_circle",
        "difficulty": 2
    },
    {
        "id": 1013,
        "name": "info",
        "difficulty": 1
    },
    {
        "id": 1014,
        "name": "info_outline",
        "difficulty": 1
    },
    {
        "id": 1015,
        "name": "input",
        "difficulty": 4
    },
    {
        "id": 1016,
        "name": "insert_chart",
        "difficulty": 3
    },
    {
        "id": 1017,
        "name": "insert_chart_outlined",
        "difficulty": 3
    },
    {
        "id": 1018,
        "name": "insert_comment",
        "difficulty": 3
    },
    {
        "id": 1019,
        "name": "insert_drive_file",
        "difficulty": 4
    },
    {
        "id": 1020,
        "name": "insert_emoticon",
        "difficulty": 2
    },
    {
        "id": 1022,
        "name": "insert_link",
        "difficulty": 2
    },
    {
        "id": 1023,
        "name": "insert_page_break",
        "difficulty": 3
    },
    {
        "id": 1024,
        "name": "insert_photo",
        "difficulty": 2
    },
    {
        "id": 1026,
        "name": "install_desktop",
        "difficulty": 3
    },
    {
        "id": 1027,
        "name": "install_mobile",
        "difficulty": 3
    },
    {
        "id": 1034,
        "name": "invert_colors_off",
        "difficulty": 4
    },
    {
        "id": 1036,
        "name": "ios_share",
        "difficulty": 4
    },
    {
        "id": 1037,
        "name": "iron",
        "difficulty": 2
    },
    {
        "id": 1038,
        "name": "iso",
        "difficulty": 4
    },
    {
        "id": 1039,
        "name": "javascript",
        "difficulty": 1
    },
    {
        "id": 1040,
        "name": "join_full",
        "difficulty": 3
    },
    {
        "id": 1041,
        "name": "join_inner",
        "difficulty": 2
    },
    {
        "id": 1042,
        "name": "join_left",
        "difficulty": 2
    },
    {
        "id": 1043,
        "name": "join_right",
        "difficulty": 2
    },
    {
        "id": 1044,
        "name": "kayaking",
        "difficulty": 1
    },
    {
        "id": 1045,
        "name": "kebab_dining",
        "difficulty": 3
    },
    {
        "id": 1046,
        "name": "key",
        "difficulty": 1
    },
    {
        "id": 1047,
        "name": "key_off",
        "difficulty": 1
    },
    {
        "id": 1048,
        "name": "keyboard",
        "difficulty": 1
    },
    {
        "id": 1049,
        "name": "keyboard_alt",
        "difficulty": 1
    },
    {
        "id": 1050,
        "name": "keyboard_arrow_down",
        "difficulty": 1
    },
    {
        "id": 1051,
        "name": "keyboard_arrow_left",
        "difficulty": 1
    },
    {
        "id": 1052,
        "name": "keyboard_arrow_right",
        "difficulty": 1
    },
    {
        "id": 1053,
        "name": "keyboard_arrow_up",
        "difficulty": 1
    },
    {
        "id": 1054,
        "name": "keyboard_backspace",
        "difficulty": 1
    },
    {
        "id": 1055,
        "name": "keyboard_capslock",
        "difficulty": 3
    },
    {
        "id": 1060,
        "name": "keyboard_double_arrow_down",
        "difficulty": 2
    },
    {
        "id": 1061,
        "name": "keyboard_double_arrow_left",
        "difficulty": 2
    },
    {
        "id": 1062,
        "name": "keyboard_double_arrow_right",
        "difficulty": 2
    },
    {
        "id": 1063,
        "name": "keyboard_double_arrow_up",
        "difficulty": 2
    },
    {
        "id": 1064,
        "name": "keyboard_hide",
        "difficulty": 4
    },
    {
        "id": 1067,
        "name": "keyboard_return",
        "difficulty": 3
    },
    {
        "id": 1068,
        "name": "keyboard_tab",
        "difficulty": 3
    },
    {
        "id": 1070,
        "name": "king_bed",
        "difficulty": 4
    },
    {
        "id": 1071,
        "name": "kitchen",
        "difficulty": 3
    },
    {
        "id": 1072,
        "name": "kitesurfing",
        "difficulty": 1
    },
    {
        "id": 1073,
        "name": "label",
        "difficulty": 4
    },
    {
        "id": 1076,
        "name": "label_off",
        "difficulty": 3
    },
    {
        "id": 1077,
        "name": "label_outline",
        "difficulty": 4
    },
    {
        "id": 1079,
        "name": "landscape",
        "difficulty": 2
    },
    {
        "id": 1081,
        "name": "language",
        "difficulty": 3
    },
    {
        "id": 1082,
        "name": "laptop",
        "difficulty": 1
    },
    {
        "id": 1083,
        "name": "laptop_chromebook",
        "difficulty": 1
    },
    {
        "id": 1084,
        "name": "laptop_mac",
        "difficulty": 1
    },
    {
        "id": 1085,
        "name": "laptop_windows",
        "difficulty": 1
    },
    {
        "id": 1086,
        "name": "last_page",
        "difficulty": 3
    },
    {
        "id": 1087,
        "name": "launch",
        "difficulty": 4
    },
    {
        "id": 1088,
        "name": "layers",
        "difficulty": 2
    },
    {
        "id": 1089,
        "name": "layers_clear",
        "difficulty": 2
    },
    {
        "id": 1090,
        "name": "leaderboard",
        "difficulty": 3
    },
    {
        "id": 1093,
        "name": "leave_bags_at_home",
        "difficulty": 3
    },
    {
        "id": 1097,
        "name": "library_add",
        "difficulty": 2
    },
    {
        "id": 1098,
        "name": "library_add_check",
        "difficulty": 2
    },
    {
        "id": 1099,
        "name": "library_books",
        "difficulty": 3
    },
    {
        "id": 1100,
        "name": "library_music",
        "difficulty": 2
    },
    {
        "id": 1101,
        "name": "light",
        "difficulty": 2
    },
    {
        "id": 1102,
        "name": "light_mode",
        "difficulty": 2
    },
    {
        "id": 1103,
        "name": "lightbulb",
        "difficulty": 1
    },
    {
        "id": 1104,
        "name": "lightbulb_circle",
        "difficulty": 1
    },
    {
        "id": 1105,
        "name": "lightbulb_outline",
        "difficulty": 1
    },
    {
        "id": 1106,
        "name": "line_axis",
        "difficulty": 3
    },
    {
        "id": 1107,
        "name": "line_style",
        "difficulty": 4
    },
    {
        "id": 1108,
        "name": "line_weight",
        "difficulty": 4
    },
    {
        "id": 1110,
        "name": "link",
        "difficulty": 1
    },
    {
        "id": 1111,
        "name": "link_off",
        "difficulty": 1
    },
    {
        "id": 1112,
        "name": "linked_camera",
        "difficulty": 3
    },
    {
        "id": 1113,
        "name": "liquor",
        "difficulty": 2
    },
    {
        "id": 1114,
        "name": "list",
        "difficulty": 1
    },
    {
        "id": 1115,
        "name": "list_alt",
        "difficulty": 1
    },
    {
        "id": 1116,
        "name": "live_help",
        "difficulty": 3
    },
    {
        "id": 1117,
        "name": "live_tv",
        "difficulty": 3
    },
    {
        "id": 1120,
        "name": "local_airport",
        "difficulty": 1
    },
    {
        "id": 1121,
        "name": "local_atm",
        "difficulty": 4
    },
    {
        "id": 1123,
        "name": "local_bar",
        "difficulty": 2
    },
    {
        "id": 1124,
        "name": "local_cafe",
        "difficulty": 2
    },
    {
        "id": 1125,
        "name": "local_car_wash",
        "difficulty": 2
    },
    {
        "id": 1126,
        "name": "local_convenience_store",
        "difficulty": 4
    },
    {
        "id": 1127,
        "name": "local_dining",
        "difficulty": 2
    },
    {
        "id": 1128,
        "name": "local_drink",
        "difficulty": 3
    },
    {
        "id": 1129,
        "name": "local_fire_department",
        "difficulty": 2
    },
    {
        "id": 1130,
        "name": "local_florist",
        "difficulty": 3
    },
    {
        "id": 1131,
        "name": "local_gas_station",
        "difficulty": 2
    },
    {
        "id": 1132,
        "name": "local_grocery_store",
        "difficulty": 2
    },
    {
        "id": 1133,
        "name": "local_hospital",
        "difficulty": 2
    },
    {
        "id": 1134,
        "name": "local_hotel",
        "difficulty": 2
    },
    {
        "id": 1135,
        "name": "local_laundry_service",
        "difficulty": 2
    },
    {
        "id": 1136,
        "name": "local_library",
        "difficulty": 4
    },
    {
        "id": 1137,
        "name": "local_mall",
        "difficulty": 3
    },
    {
        "id": 1138,
        "name": "local_movies",
        "difficulty": 3
    },
    {
        "id": 1140,
        "name": "local_parking",
        "difficulty": 2
    },
    {
        "id": 1141,
        "name": "local_pharmacy",
        "difficulty": 3
    },
    {
        "id": 1142,
        "name": "local_phone",
        "difficulty": 1
    },
    {
        "id": 1143,
        "name": "local_pizza",
        "difficulty": 2
    },
    {
        "id": 1145,
        "name": "local_police",
        "difficulty": 3
    },
    {
        "id": 1146,
        "name": "local_post_office",
        "difficulty": 2
    },
    {
        "id": 1147,
        "name": "local_print_shop",
        "difficulty": 2
    },
    {
        "id": 1148,
        "name": "local_printshop",
        "difficulty": 2
    },
    {
        "id": 1149,
        "name": "local_restaurant",
        "difficulty": 2
    },
    {
        "id": 1151,
        "name": "local_shipping",
        "difficulty": 3
    },
    {
        "id": 1152,
        "name": "local_taxi",
        "difficulty": 2
    },
    {
        "id": 1153,
        "name": "location_city",
        "difficulty": 3
    },
    {
        "id": 1154,
        "name": "location_disabled",
        "difficulty": 3
    },
    {
        "id": 1156,
        "name": "location_off",
        "difficulty": 2
    },
    {
        "id": 1157,
        "name": "location_on",
        "difficulty": 2
    },
    {
        "id": 1158,
        "name": "location_pin",
        "difficulty": 2
    },
    {
        "id": 1160,
        "name": "lock",
        "difficulty": 1
    },
    {
        "id": 1161,
        "name": "lock_clock",
        "difficulty": 0
    },
    {
        "id": 1162,
        "name": "lock_open",
        "difficulty": 0
    },
    {
        "id": 1163,
        "name": "lock_outline",
        "difficulty": 0
    },
    {
        "id": 1164,
        "name": "lock_person",
        "difficulty": 0
    },
    {
        "id": 1165,
        "name": "lock_reset",
        "difficulty": 1
    },
    {
        "id": 1166,
        "name": "login",
        "difficulty": 2
    },
    {
        "id": 1167,
        "name": "logo_dev",
        "difficulty": 1
    },
    {
        "id": 1168,
        "name": "logout",
        "difficulty": 2
    },
    {
        "id": 1170,
        "name": "looks_3",
        "difficulty": 1
    },
    {
        "id": 1171,
        "name": "looks_4",
        "difficulty": 1
    },
    {
        "id": 1172,
        "name": "looks_5",
        "difficulty": 1
    },
    {
        "id": 1173,
        "name": "looks_6",
        "difficulty": 1
    },
    {
        "id": 1174,
        "name": "looks_one",
        "difficulty": 1
    },
    {
        "id": 1175,
        "name": "looks_two",
        "difficulty": 1
    },
    {
        "id": 1176,
        "name": "loop",
        "difficulty": 3
    },
    {
        "id": 1177,
        "name": "loupe",
        "difficulty": 4
    },
    {
        "id": 1178,
        "name": "low_priority",
        "difficulty": 3
    },
    {
        "id": 1180,
        "name": "lte_mobiledata",
        "difficulty": 1
    },
    {
        "id": 1181,
        "name": "lte_plus_mobiledata",
        "difficulty": 1
    },
    {
        "id": 1182,
        "name": "luggage",
        "difficulty": 2
    },
    {
        "id": 1183,
        "name": "lunch_dining",
        "difficulty": 2
    },
    {
        "id": 1184,
        "name": "lyrics",
        "difficulty": 2
    },
    {
        "id": 1186,
        "name": "mail",
        "difficulty": 1
    },
    {
        "id": 1187,
        "name": "mail_lock",
        "difficulty": 1
    },
    {
        "id": 1188,
        "name": "mail_outline",
        "difficulty": 1
    },
    {
        "id": 1189,
        "name": "male",
        "difficulty": 1
    },
    {
        "id": 1190,
        "name": "man",
        "difficulty": 1
    },
    {
        "id": 1191,
        "name": "man_2",
        "difficulty": 1
    },
    {
        "id": 1192,
        "name": "man_3",
        "difficulty": 1
    },
    {
        "id": 1193,
        "name": "man_4",
        "difficulty": 2
    },
    {
        "id": 1194,
        "name": "manage_accounts",
        "difficulty": 2
    },
    {
        "id": 1195,
        "name": "manage_history",
        "difficulty": 3
    },
    {
        "id": 1196,
        "name": "manage_search",
        "difficulty": 3
    },
    {
        "id": 1197,
        "name": "map",
        "difficulty": 2
    },
    {
        "id": 1198,
        "name": "maps_home_work",
        "difficulty": 4
    },
    {
        "id": 1201,
        "name": "mark_as_unread",
        "difficulty": 4
    },
    {
        "id": 1202,
        "name": "mark_chat_read",
        "difficulty": 2
    },
    {
        "id": 1203,
        "name": "mark_chat_unread",
        "difficulty": 2
    },
    {
        "id": 1204,
        "name": "mark_email_read",
        "difficulty": 1
    },
    {
        "id": 1205,
        "name": "mark_email_unread",
        "difficulty": 1
    },
    {
        "id": 1206,
        "name": "mark_unread_chat_alt",
        "difficulty": 2
    },
    {
        "id": 1207,
        "name": "markunread",
        "difficulty": 4
    },
    {
        "id": 1208,
        "name": "markunread_mailbox",
        "difficulty": 2
    },
    {
        "id": 1209,
        "name": "masks",
        "difficulty": 3
    },
    {
        "id": 1211,
        "name": "media_bluetooth_off",
        "difficulty": 1
    },
    {
        "id": 1212,
        "name": "media_bluetooth_on",
        "difficulty": 1
    },
    {
        "id": 1214,
        "name": "medical_information",
        "difficulty": 2
    },
    {
        "id": 1215,
        "name": "medical_services",
        "difficulty": 2
    },
    {
        "id": 1216,
        "name": "medication",
        "difficulty": 3
    },
    {
        "id": 1217,
        "name": "medication_liquid",
        "difficulty": 3
    },
    {
        "id": 1220,
        "name": "menu",
        "difficulty": 2
    },
    {
        "id": 1221,
        "name": "menu_book",
        "difficulty": 4
    },
    {
        "id": 1222,
        "name": "menu_open",
        "difficulty": 3
    },
    {
        "id": 1223,
        "name": "merge",
        "difficulty": 3
    },
    {
        "id": 1224,
        "name": "merge_type",
        "difficulty": 3
    },
    {
        "id": 1225,
        "name": "message",
        "difficulty": 1
    },
    {
        "id": 1226,
        "name": "messenger",
        "difficulty": 2
    },
    {
        "id": 1227,
        "name": "messenger_outline",
        "difficulty": 2
    },
    {
        "id": 1228,
        "name": "mic",
        "difficulty": 1
    },
    {
        "id": 1229,
        "name": "mic_external_off",
        "difficulty": 1
    },
    {
        "id": 1230,
        "name": "mic_external_on",
        "difficulty": 2
    },
    {
        "id": 1231,
        "name": "mic_none",
        "difficulty": 2
    },
    {
        "id": 1232,
        "name": "mic_off",
        "difficulty": 2
    },
    {
        "id": 1233,
        "name": "microwave",
        "difficulty": 3
    },
    {
        "id": 1234,
        "name": "military_tech",
        "difficulty": 4
    },
    {
        "id": 1235,
        "name": "minimize",
        "difficulty": 3
    },
    {
        "id": 1236,
        "name": "minor_crash",
        "difficulty": 3
    },
    {
        "id": 1238,
        "name": "missed_video_call",
        "difficulty": 4
    },
    {
        "id": 1239,
        "name": "mms",
        "difficulty": 4
    },
    {
        "id": 1240,
        "name": "mobile_friendly",
        "difficulty": 3
    },
    {
        "id": 1241,
        "name": "mobile_off",
        "difficulty": 1
    },
    {
        "id": 1242,
        "name": "mobile_screen_share",
        "difficulty": 2
    },
    {
        "id": 1245,
        "name": "mode_comment",
        "difficulty": 2
    },
    {
        "id": 1246,
        "name": "mode_edit",
        "difficulty": 2
    },
    {
        "id": 1247,
        "name": "mode_edit_outline",
        "difficulty": 2
    },
    {
        "id": 1248,
        "name": "mode_fan_off",
        "difficulty": 4
    },
    {
        "id": 1249,
        "name": "mode_night",
        "difficulty": 3
    },
    {
        "id": 1253,
        "name": "monetization_on",
        "difficulty": 3
    },
    {
        "id": 1254,
        "name": "money",
        "difficulty": 3
    },
    {
        "id": 1255,
        "name": "money_off",
        "difficulty": 1
    },
    {
        "id": 1256,
        "name": "money_off_csred",
        "difficulty": 2
    },
    {
        "id": 1257,
        "name": "monitor",
        "difficulty": 1
    },
    {
        "id": 1258,
        "name": "monitor_heart",
        "difficulty": 3
    },
    {
        "id": 1260,
        "name": "monochrome_photos",
        "difficulty": 3
    },
    {
        "id": 1261,
        "name": "mood",
        "difficulty": 2
    },
    {
        "id": 1262,
        "name": "mood_bad",
        "difficulty": 1
    },
    {
        "id": 1263,
        "name": "moped",
        "difficulty": 1
    },
    {
        "id": 1264,
        "name": "more",
        "difficulty": 4
    },
    {
        "id": 1265,
        "name": "more_horiz",
        "difficulty": 3
    },
    {
        "id": 1266,
        "name": "more_time",
        "difficulty": 1
    },
    {
        "id": 1267,
        "name": "more_vert",
        "difficulty": 3
    },
    {
        "id": 1268,
        "name": "mosque",
        "difficulty": 1
    },
    {
        "id": 1272,
        "name": "motion_photos_pause",
        "difficulty": 4
    },
    {
        "id": 1273,
        "name": "motion_photos_paused",
        "difficulty": 4
    },
    {
        "id": 1274,
        "name": "motorcycle",
        "difficulty": 2
    },
    {
        "id": 1275,
        "name": "mouse",
        "difficulty": 1
    },
    {
        "id": 1276,
        "name": "move_down",
        "difficulty": 3
    },
    {
        "id": 1277,
        "name": "move_to_inbox",
        "difficulty": 2
    },
    {
        "id": 1278,
        "name": "move_up",
        "difficulty": 2
    },
    {
        "id": 1279,
        "name": "movie",
        "difficulty": 1
    },
    {
        "id": 1280,
        "name": "movie_creation",
        "difficulty": 1
    },
    {
        "id": 1281,
        "name": "movie_edit",
        "difficulty": 2
    },
    {
        "id": 1282,
        "name": "movie_filter",
        "difficulty": 3
    },
    {
        "id": 1284,
        "name": "mp",
        "difficulty": 0
    },
    {
        "id": 1285,
        "name": "multiline_chart",
        "difficulty": 4
    },
    {
        "id": 1288,
        "name": "museum",
        "difficulty": 3
    },
    {
        "id": 1289,
        "name": "music_note",
        "difficulty": 1
    },
    {
        "id": 1290,
        "name": "music_off",
        "difficulty": 1
    },
    {
        "id": 1291,
        "name": "music_video",
        "difficulty": 2
    },
    {
        "id": 1292,
        "name": "my_library_add",
        "difficulty": 2
    },
    {
        "id": 1294,
        "name": "my_library_music",
        "difficulty": 2
    },
    {
        "id": 1295,
        "name": "my_location",
        "difficulty": 4
    },
    {
        "id": 1298,
        "name": "nature_people",
        "difficulty": 4
    },
    {
        "id": 1299,
        "name": "navigate_before",
        "difficulty": 3
    },
    {
        "id": 1300,
        "name": "navigate_next",
        "difficulty": 3
    },
    {
        "id": 1301,
        "name": "navigation",
        "difficulty": 4
    },
    {
        "id": 1304,
        "name": "nearby_error",
        "difficulty": 4
    },
    {
        "id": 1309,
        "name": "network_locked",
        "difficulty": 3
    },
    {
        "id": 1311,
        "name": "network_wifi",
        "difficulty": 3
    },
    {
        "id": 1312,
        "name": "network_wifi_1_bar",
        "difficulty": 2
    },
    {
        "id": 1313,
        "name": "network_wifi_2_bar",
        "difficulty": 2
    },
    {
        "id": 1314,
        "name": "network_wifi_3_bar",
        "difficulty": 2
    },
    {
        "id": 1315,
        "name": "new_label",
        "difficulty": 2
    },
    {
        "id": 1317,
        "name": "newspaper",
        "difficulty": 3
    },
    {
        "id": 1321,
        "name": "night_shelter",
        "difficulty": 2
    },
    {
        "id": 1322,
        "name": "nightlife",
        "difficulty": 3
    },
    {
        "id": 1323,
        "name": "nightlight",
        "difficulty": 3
    },
    {
        "id": 1324,
        "name": "nightlight_round",
        "difficulty": 4
    },
    {
        "id": 1325,
        "name": "nights_stay",
        "difficulty": 3
    },
    {
        "id": 1326,
        "name": "no_accounts",
        "difficulty": 2
    },
    {
        "id": 1327,
        "name": "no_adult_content",
        "difficulty": 2
    },
    {
        "id": 1328,
        "name": "no_backpack",
        "difficulty": 2
    },
    {
        "id": 1329,
        "name": "no_cell",
        "difficulty": 3
    },
    {
        "id": 1330,
        "name": "no_crash",
        "difficulty": 4
    },
    {
        "id": 1331,
        "name": "no_drinks",
        "difficulty": 2
    },
    {
        "id": 1332,
        "name": "no_encryption",
        "difficulty": 3
    },
    {
        "id": 1333,
        "name": "no_encryption_gmailerrorred",
        "difficulty": 4
    },
    {
        "id": 1334,
        "name": "no_flash",
        "difficulty": 2
    },
    {
        "id": 1335,
        "name": "no_food",
        "difficulty": 1
    },
    {
        "id": 1336,
        "name": "no_luggage",
        "difficulty": 2
    },
    {
        "id": 1337,
        "name": "no_meals",
        "difficulty": 2
    },
    {
        "id": 1338,
        "name": "no_meals_ouline",
        "difficulty": 2
    },
    {
        "id": 1340,
        "name": "no_photography",
        "difficulty": 1
    },
    {
        "id": 1341,
        "name": "no_sim",
        "difficulty": 2
    },
    {
        "id": 1342,
        "name": "no_stroller",
        "difficulty": 2
    },
    {
        "id": 1343,
        "name": "no_transfer",
        "difficulty": 3
    },
    {
        "id": 1346,
        "name": "nordic_walking",
        "difficulty": 3
    },
    {
        "id": 1347,
        "name": "north",
        "difficulty": 2
    },
    {
        "id": 1348,
        "name": "north_east",
        "difficulty": 2
    },
    {
        "id": 1349,
        "name": "north_west",
        "difficulty": 2
    },
    {
        "id": 1350,
        "name": "not_accessible",
        "difficulty": 1
    },
    {
        "id": 1351,
        "name": "not_interested",
        "difficulty": 2
    },
    {
        "id": 1352,
        "name": "not_listed_location",
        "difficulty": 2
    },
    {
        "id": 1353,
        "name": "not_started",
        "difficulty": 4
    },
    {
        "id": 1354,
        "name": "note",
        "difficulty": 2
    },
    {
        "id": 1355,
        "name": "note_add",
        "difficulty": 2
    },
    {
        "id": 1356,
        "name": "note_alt",
        "difficulty": 2
    },
    {
        "id": 1357,
        "name": "notes",
        "difficulty": 3
    },
    {
        "id": 1358,
        "name": "notification_add",
        "difficulty": 1
    },
    {
        "id": 1359,
        "name": "notification_important",
        "difficulty": 1
    },
    {
        "id": 1360,
        "name": "notifications",
        "difficulty": 1
    },
    {
        "id": 1361,
        "name": "notifications_active",
        "difficulty": 1
    },
    {
        "id": 1362,
        "name": "notifications_none",
        "difficulty": 1
    },
    {
        "id": 1363,
        "name": "notifications_off",
        "difficulty": 1
    },
    {
        "id": 1364,
        "name": "notifications_on",
        "difficulty": 1
    },
    {
        "id": 1365,
        "name": "notifications_paused",
        "difficulty": 2
    },
    {
        "id": 1366,
        "name": "now_wallpaper",
        "difficulty": 3
    },
    {
        "id": 1368,
        "name": "numbers",
        "difficulty": 4
    },
    {
        "id": 1369,
        "name": "offline_bolt",
        "difficulty": 3
    },
    {
        "id": 1371,
        "name": "offline_share",
        "difficulty": 2
    },
    {
        "id": 1372,
        "name": "oil_barrel",
        "difficulty": 1
    },
    {
        "id": 1373,
        "name": "on_device_training",
        "difficulty": 3
    },
    {
        "id": 1374,
        "name": "ondemand_video",
        "difficulty": 2
    },
    {
        "id": 1376,
        "name": "opacity",
        "difficulty": 4
    },
    {
        "id": 1377,
        "name": "open_in_browser",
        "difficulty": 4
    },
    {
        "id": 1378,
        "name": "open_in_full",
        "difficulty": 4
    },
    {
        "id": 1382,
        "name": "other_houses",
        "difficulty": 3
    },
    {
        "id": 1383,
        "name": "outbond",
        "difficulty": 4
    },
    {
        "id": 1384,
        "name": "outbound",
        "difficulty": 4
    },
    {
        "id": 1385,
        "name": "outbox",
        "difficulty": 2
    },
    {
        "id": 1386,
        "name": "outdoor_grill",
        "difficulty": 1
    },
    {
        "id": 1387,
        "name": "outgoing_mail",
        "difficulty": 1
    },
    {
        "id": 1388,
        "name": "outlet",
        "difficulty": 3
    },
    {
        "id": 1389,
        "name": "outlined_flag",
        "difficulty": 1
    },
    {
        "id": 1390,
        "name": "output",
        "difficulty": 4
    },
    {
        "id": 1394,
        "name": "paid",
        "difficulty": 3
    },
    {
        "id": 1395,
        "name": "palette",
        "difficulty": 2
    },
    {
        "id": 1396,
        "name": "pallet",
        "difficulty": 3
    },
    {
        "id": 1397,
        "name": "pan_tool",
        "difficulty": 3
    },
    {
        "id": 1399,
        "name": "panorama",
        "difficulty": 2
    },
    {
        "id": 1402,
        "name": "panorama_horizontal",
        "difficulty": 2
    },
    {
        "id": 1403,
        "name": "panorama_horizontal_select",
        "difficulty": 2
    },
    {
        "id": 1404,
        "name": "panorama_photosphere",
        "difficulty": 2
    },
    {
        "id": 1405,
        "name": "panorama_photosphere_select",
        "difficulty": 2
    },
    {
        "id": 1406,
        "name": "panorama_vertical",
        "difficulty": 2
    },
    {
        "id": 1407,
        "name": "panorama_vertical_select",
        "difficulty": 2
    },
    {
        "id": 1408,
        "name": "panorama_wide_angle",
        "difficulty": 3
    },
    {
        "id": 1409,
        "name": "panorama_wide_angle_select",
        "difficulty": 3
    },
    {
        "id": 1410,
        "name": "paragliding",
        "difficulty": 1
    },
    {
        "id": 1411,
        "name": "park",
        "difficulty": 2
    },
    {
        "id": 1413,
        "name": "password",
        "difficulty": 2
    },
    {
        "id": 1414,
        "name": "pattern",
        "difficulty": 2
    },
    {
        "id": 1415,
        "name": "pause",
        "difficulty": 1
    },
    {
        "id": 1416,
        "name": "pause_circle",
        "difficulty": 1
    },
    {
        "id": 1417,
        "name": "pause_circle_filled",
        "difficulty": 1
    },
    {
        "id": 1418,
        "name": "pause_circle_outline",
        "difficulty": 1
    },
    {
        "id": 1419,
        "name": "pause_presentation",
        "difficulty": 1
    },
    {
        "id": 1420,
        "name": "payment",
        "difficulty": 3
    },
    {
        "id": 1422,
        "name": "paypal",
        "difficulty": 1
    },
    {
        "id": 1423,
        "name": "pedal_bike",
        "difficulty": 1
    },
    {
        "id": 1424,
        "name": "pending",
        "difficulty": 4
    },
    {
        "id": 1425,
        "name": "pending_actions",
        "difficulty": 4
    },
    {
        "id": 1426,
        "name": "pentagon",
        "difficulty": 1
    },
    {
        "id": 1427,
        "name": "people",
        "difficulty": 3
    },
    {
        "id": 1428,
        "name": "people_alt",
        "difficulty": 3
    },
    {
        "id": 1429,
        "name": "people_outline",
        "difficulty": 3
    },
    {
        "id": 1430,
        "name": "percent",
        "difficulty": 0
    },
    {
        "id": 1431,
        "name": "perm_camera_mic",
        "difficulty": 2
    },
    {
        "id": 1432,
        "name": "perm_contact_cal",
        "difficulty": 3
    },
    {
        "id": 1433,
        "name": "perm_contact_calendar",
        "difficulty": 4
    },
    {
        "id": 1434,
        "name": "perm_data_setting",
        "difficulty": 3
    },
    {
        "id": 1435,
        "name": "perm_device_info",
        "difficulty": 3
    },
    {
        "id": 1436,
        "name": "perm_device_information",
        "difficulty": 4
    },
    {
        "id": 1437,
        "name": "perm_identity",
        "difficulty": 4
    },
    {
        "id": 1438,
        "name": "perm_media",
        "difficulty": 4
    },
    {
        "id": 1439,
        "name": "perm_phone_msg",
        "difficulty": 2
    },
    {
        "id": 1440,
        "name": "perm_scan_wifi",
        "difficulty": 3
    },
    {
        "id": 1441,
        "name": "person",
        "difficulty": 1
    },
    {
        "id": 1442,
        "name": "person_2",
        "difficulty": 1
    },
    {
        "id": 1443,
        "name": "person_3",
        "difficulty": 1
    },
    {
        "id": 1444,
        "name": "person_4",
        "difficulty": 1
    },
    {
        "id": 1445,
        "name": "person_add",
        "difficulty": 1
    },
    {
        "id": 1446,
        "name": "person_add_alt",
        "difficulty": 1
    },
    {
        "id": 1447,
        "name": "person_add_alt_1",
        "difficulty": 1
    },
    {
        "id": 1448,
        "name": "person_add_disabled",
        "difficulty": 1
    },
    {
        "id": 1449,
        "name": "person_off",
        "difficulty": 1
    },
    {
        "id": 1450,
        "name": "person_outline",
        "difficulty": 1
    },
    {
        "id": 1451,
        "name": "person_pin",
        "difficulty": 1
    },
    {
        "id": 1452,
        "name": "person_pin_circle",
        "difficulty": 1
    },
    {
        "id": 1453,
        "name": "person_remove",
        "difficulty": 1
    },
    {
        "id": 1454,
        "name": "person_remove_alt_1",
        "difficulty": 1
    },
    {
        "id": 1455,
        "name": "person_search",
        "difficulty": 1
    },
    {
        "id": 1456,
        "name": "personal_injury",
        "difficulty": 3
    },
    {
        "id": 1458,
        "name": "pest_control",
        "difficulty": 3
    },
    {
        "id": 1459,
        "name": "pest_control_rodent",
        "difficulty": 2
    },
    {
        "id": 1460,
        "name": "pets",
        "difficulty": 2
    },
    {
        "id": 1461,
        "name": "phishing",
        "difficulty": 2
    },
    {
        "id": 1462,
        "name": "phone",
        "difficulty": 1
    },
    {
        "id": 1463,
        "name": "phone_android",
        "difficulty": 1
    },
    {
        "id": 1464,
        "name": "phone_bluetooth_speaker",
        "difficulty": 1
    },
    {
        "id": 1465,
        "name": "phone_callback",
        "difficulty": 2
    },
    {
        "id": 1466,
        "name": "phone_disabled",
        "difficulty": 1
    },
    {
        "id": 1467,
        "name": "phone_enabled",
        "difficulty": 1
    },
    {
        "id": 1468,
        "name": "phone_forwarded",
        "difficulty": 1
    },
    {
        "id": 1469,
        "name": "phone_in_talk",
        "difficulty": 1
    },
    {
        "id": 1470,
        "name": "phone_iphone",
        "difficulty": 1
    },
    {
        "id": 1471,
        "name": "phone_locked",
        "difficulty": 1
    },
    {
        "id": 1472,
        "name": "phone_missed",
        "difficulty": 2
    },
    {
        "id": 1473,
        "name": "phone_paused",
        "difficulty": 1
    },
    {
        "id": 1474,
        "name": "phonelink",
        "difficulty": 4
    },
    {
        "id": 1475,
        "name": "phonelink_erase",
        "difficulty": 4
    },
    {
        "id": 1476,
        "name": "phonelink_lock",
        "difficulty": 3
    },
    {
        "id": 1477,
        "name": "phonelink_off",
        "difficulty": 2
    },
    {
        "id": 1478,
        "name": "phonelink_ring",
        "difficulty": 3
    },
    {
        "id": 1479,
        "name": "phonelink_setup",
        "difficulty": 2
    },
    {
        "id": 1480,
        "name": "photo",
        "difficulty": 1
    },
    {
        "id": 1481,
        "name": "photo_album",
        "difficulty": 2
    },
    {
        "id": 1482,
        "name": "photo_camera",
        "difficulty": 1
    },
    {
        "id": 1483,
        "name": "photo_camera_back",
        "difficulty": 4
    },
    {
        "id": 1484,
        "name": "photo_camera_front",
        "difficulty": 4
    },
    {
        "id": 1485,
        "name": "photo_filter",
        "difficulty": 4
    },
    {
        "id": 1486,
        "name": "photo_library",
        "difficulty": 2
    },
    {
        "id": 1487,
        "name": "photo_size_select_actual",
        "difficulty": 3
    },
    {
        "id": 1488,
        "name": "photo_size_select_large",
        "difficulty": 3
    },
    {
        "id": 1489,
        "name": "photo_size_select_small",
        "difficulty": 3
    },
    {
        "id": 1490,
        "name": "php",
        "difficulty": 0
    },
    {
        "id": 1491,
        "name": "piano",
        "difficulty": 1
    },
    {
        "id": 1492,
        "name": "piano_off",
        "difficulty": 1
    },
    {
        "id": 1493,
        "name": "picture_as_pdf",
        "difficulty": 1
    },
    {
        "id": 1494,
        "name": "picture_in_picture",
        "difficulty": 2
    },
    {
        "id": 1495,
        "name": "picture_in_picture_alt",
        "difficulty": 2
    },
    {
        "id": 1496,
        "name": "pie_chart",
        "difficulty": 1
    },
    {
        "id": 1497,
        "name": "pie_chart_outline",
        "difficulty": 1
    },
    {
        "id": 1498,
        "name": "pie_chart_outlined",
        "difficulty": 1
    },
    {
        "id": 1499,
        "name": "pin",
        "difficulty": 3
    },
    {
        "id": 1500,
        "name": "pin_drop",
        "difficulty": 4
    },
    {
        "id": 1503,
        "name": "pinch",
        "difficulty": 4
    },
    {
        "id": 1504,
        "name": "pivot_table_chart",
        "difficulty": 3
    },
    {
        "id": 1506,
        "name": "place",
        "difficulty": 3
    },
    {
        "id": 1507,
        "name": "plagiarism",
        "difficulty": 4
    },
    {
        "id": 1508,
        "name": "play_arrow",
        "difficulty": 1
    },
    {
        "id": 1509,
        "name": "play_circle",
        "difficulty": 1
    },
    {
        "id": 1510,
        "name": "play_circle_fill",
        "difficulty": 1
    },
    {
        "id": 1511,
        "name": "play_circle_filled",
        "difficulty": 1
    },
    {
        "id": 1512,
        "name": "play_circle_outline",
        "difficulty": 1
    },
    {
        "id": 1513,
        "name": "play_disabled",
        "difficulty": 1
    },
    {
        "id": 1515,
        "name": "play_lesson",
        "difficulty": 2
    },
    {
        "id": 1516,
        "name": "playlist_add",
        "difficulty": 1
    },
    {
        "id": 1517,
        "name": "playlist_add_check",
        "difficulty": 1
    },
    {
        "id": 1518,
        "name": "playlist_add_check_circle",
        "difficulty": 1
    },
    {
        "id": 1519,
        "name": "playlist_add_circle",
        "difficulty": 1
    },
    {
        "id": 1520,
        "name": "playlist_play",
        "difficulty": 1
    },
    {
        "id": 1521,
        "name": "playlist_remove",
        "difficulty": 1
    },
    {
        "id": 1522,
        "name": "plumbing",
        "difficulty": 2
    },
    {
        "id": 1523,
        "name": "plus_one",
        "difficulty": 0
    },
    {
        "id": 1524,
        "name": "podcasts",
        "difficulty": 2
    },
    {
        "id": 1527,
        "name": "poll",
        "difficulty": 2
    },
    {
        "id": 1530,
        "name": "pool",
        "difficulty": 2
    },
    {
        "id": 1531,
        "name": "portable_wifi_off",
        "difficulty": 4
    },
    {
        "id": 1532,
        "name": "portrait",
        "difficulty": 2
    },
    {
        "id": 1533,
        "name": "post_add",
        "difficulty": 2
    },
    {
        "id": 1534,
        "name": "power",
        "difficulty": 3
    },
    {
        "id": 1536,
        "name": "power_off",
        "difficulty": 2
    },
    {
        "id": 1537,
        "name": "power_settings_new",
        "difficulty": 2
    },
    {
        "id": 1538,
        "name": "precision_manufacturing",
        "difficulty": 4
    },
    {
        "id": 1539,
        "name": "pregnant_woman",
        "difficulty": 1
    },
    {
        "id": 1540,
        "name": "present_to_all",
        "difficulty": 3
    },
    {
        "id": 1541,
        "name": "preview",
        "difficulty": 4
    },
    {
        "id": 1542,
        "name": "price_change",
        "difficulty": 1
    },
    {
        "id": 1543,
        "name": "price_check",
        "difficulty": 1
    },
    {
        "id": 1544,
        "name": "print",
        "difficulty": 1
    },
    {
        "id": 1545,
        "name": "print_disabled",
        "difficulty": 1
    },
    {
        "id": 1546,
        "name": "priority_high",
        "difficulty": 4
    },
    {
        "id": 1547,
        "name": "privacy_tip",
        "difficulty": 3
    },
    {
        "id": 1548,
        "name": "private_connectivity",
        "difficulty": 3
    },
    {
        "id": 1551,
        "name": "propane_tank",
        "difficulty": 3
    },
    {
        "id": 1552,
        "name": "psychology",
        "difficulty": 2
    },
    {
        "id": 1553,
        "name": "psychology_alt",
        "difficulty": 2
    },
    {
        "id": 1554,
        "name": "public",
        "difficulty": 4
    },
    {
        "id": 1555,
        "name": "public_off",
        "difficulty": 3
    },
    {
        "id": 1556,
        "name": "publish",
        "difficulty": 3
    },
    {
        "id": 1558,
        "name": "punch_clock",
        "difficulty": 4
    },
    {
        "id": 1559,
        "name": "push_pin",
        "difficulty": 3
    },
    {
        "id": 1560,
        "name": "qr_code",
        "difficulty": 2
    },
    {
        "id": 1561,
        "name": "qr_code_2",
        "difficulty": 1
    },
    {
        "id": 1562,
        "name": "qr_code_scanner",
        "difficulty": 1
    },
    {
        "id": 1564,
        "name": "query_stats",
        "difficulty": 3
    },
    {
        "id": 1565,
        "name": "question_answer",
        "difficulty": 2
    },
    {
        "id": 1566,
        "name": "question_mark",
        "difficulty": 0
    },
    {
        "id": 1567,
        "name": "queue",
        "difficulty": 3
    },
    {
        "id": 1568,
        "name": "queue_music",
        "difficulty": 1
    },
    {
        "id": 1569,
        "name": "queue_play_next",
        "difficulty": 3
    },
    {
        "id": 1570,
        "name": "quick_contacts_dialer",
        "difficulty": 3
    },
    {
        "id": 1571,
        "name": "quick_contacts_mail",
        "difficulty": 2
    },
    {
        "id": 1572,
        "name": "quickreply",
        "difficulty": 4
    },
    {
        "id": 1573,
        "name": "quiz",
        "difficulty": 3
    },
    {
        "id": 1574,
        "name": "quora",
        "difficulty": 2
    },
    {
        "id": 1575,
        "name": "r_mobiledata",
        "difficulty": 2
    },
    {
        "id": 1576,
        "name": "radar",
        "difficulty": 2
    },
    {
        "id": 1577,
        "name": "radio",
        "difficulty": 1
    },
    {
        "id": 1578,
        "name": "radio_button_checked",
        "difficulty": 2
    },
    {
        "id": 1579,
        "name": "radio_button_off",
        "difficulty": 4
    },
    {
        "id": 1580,
        "name": "radio_button_on",
        "difficulty": 2
    },
    {
        "id": 1581,
        "name": "radio_button_unchecked",
        "difficulty": 4
    },
    {
        "id": 1582,
        "name": "railway_alert",
        "difficulty": 2
    },
    {
        "id": 1583,
        "name": "ramen_dining",
        "difficulty": 2
    },
    {
        "id": 1584,
        "name": "ramp_left",
        "difficulty": 4
    },
    {
        "id": 1585,
        "name": "ramp_right",
        "difficulty": 4
    },
    {
        "id": 1586,
        "name": "rate_review",
        "difficulty": 3
    },
    {
        "id": 1587,
        "name": "raw_off",
        "difficulty": 1
    },
    {
        "id": 1588,
        "name": "raw_on",
        "difficulty": 1
    },
    {
        "id": 1590,
        "name": "real_estate_agent",
        "difficulty": 4
    },
    {
        "id": 1592,
        "name": "receipt",
        "difficulty": 3
    },
    {
        "id": 1593,
        "name": "receipt_long",
        "difficulty": 2
    },
    {
        "id": 1595,
        "name": "recommend",
        "difficulty": 4
    },
    {
        "id": 1597,
        "name": "rectangle",
        "difficulty": 1
    },
    {
        "id": 1598,
        "name": "recycling",
        "difficulty": 1
    },
    {
        "id": 1599,
        "name": "reddit",
        "difficulty": 1
    },
    {
        "id": 1600,
        "name": "redeem",
        "difficulty": 4
    },
    {
        "id": 1601,
        "name": "redo",
        "difficulty": 2
    },
    {
        "id": 1602,
        "name": "reduce_capacity",
        "difficulty": 2
    },
    {
        "id": 1603,
        "name": "refresh",
        "difficulty": 1
    },
    {
        "id": 1604,
        "name": "remember_me",
        "difficulty": 3
    },
    {
        "id": 1605,
        "name": "remove",
        "difficulty": 3
    },
    {
        "id": 1606,
        "name": "remove_circle",
        "difficulty": 2
    },
    {
        "id": 1607,
        "name": "remove_circle_outline",
        "difficulty": 1
    },
    {
        "id": 1608,
        "name": "remove_done",
        "difficulty": 2
    },
    {
        "id": 1610,
        "name": "remove_moderator",
        "difficulty": 3
    },
    {
        "id": 1611,
        "name": "remove_red_eye",
        "difficulty": 3
    },
    {
        "id": 1612,
        "name": "remove_road",
        "difficulty": 4
    },
    {
        "id": 1613,
        "name": "remove_shopping_cart",
        "difficulty": 1
    },
    {
        "id": 1616,
        "name": "repeat",
        "difficulty": 3
    },
    {
        "id": 1617,
        "name": "repeat_on",
        "difficulty": 3
    },
    {
        "id": 1618,
        "name": "repeat_one",
        "difficulty": 2
    },
    {
        "id": 1619,
        "name": "repeat_one_on",
        "difficulty": 2
    },
    {
        "id": 1620,
        "name": "replay",
        "difficulty": 2
    },
    {
        "id": 1621,
        "name": "replay_10",
        "difficulty": 1
    },
    {
        "id": 1622,
        "name": "replay_30",
        "difficulty": 1
    },
    {
        "id": 1623,
        "name": "replay_5",
        "difficulty": 1
    },
    {
        "id": 1624,
        "name": "replay_circle_filled",
        "difficulty": 1
    },
    {
        "id": 1625,
        "name": "reply",
        "difficulty": 2
    },
    {
        "id": 1626,
        "name": "reply_all",
        "difficulty": 2
    },
    {
        "id": 1627,
        "name": "report",
        "difficulty": 3
    },
    {
        "id": 1628,
        "name": "report_gmailerrorred",
        "difficulty": 4
    },
    {
        "id": 1629,
        "name": "report_off",
        "difficulty": 3
    },
    {
        "id": 1630,
        "name": "report_problem",
        "difficulty": 3
    },
    {
        "id": 1633,
        "name": "reset_tv",
        "difficulty": 3
    },
    {
        "id": 1634,
        "name": "restart_alt",
        "difficulty": 3
    },
    {
        "id": 1635,
        "name": "restaurant",
        "difficulty": 1
    },
    {
        "id": 1636,
        "name": "restaurant_menu",
        "difficulty": 2
    },
    {
        "id": 1637,
        "name": "restore",
        "difficulty": 3
    },
    {
        "id": 1638,
        "name": "restore_from_trash",
        "difficulty": 3
    },
    {
        "id": 1639,
        "name": "restore_page",
        "difficulty": 4
    },
    {
        "id": 1640,
        "name": "reviews",
        "difficulty": 4
    },
    {
        "id": 1641,
        "name": "rice_bowl",
        "difficulty": 4
    },
    {
        "id": 1642,
        "name": "ring_volume",
        "difficulty": 3
    },
    {
        "id": 1643,
        "name": "rocket",
        "difficulty": 1
    },
    {
        "id": 1644,
        "name": "rocket_launch",
        "difficulty": 1
    },
    {
        "id": 1645,
        "name": "roller_shades",
        "difficulty": 4
    },
    {
        "id": 1646,
        "name": "roller_shades_closed",
        "difficulty": 4
    },
    {
        "id": 1647,
        "name": "roller_skating",
        "difficulty": 1
    },
    {
        "id": 1648,
        "name": "roofing",
        "difficulty": 3
    },
    {
        "id": 1650,
        "name": "room_preferences",
        "difficulty": 3
    },
    {
        "id": 1651,
        "name": "room_service",
        "difficulty": 3
    },
    {
        "id": 1652,
        "name": "rotate_90_degrees_ccw",
        "difficulty": 2
    },
    {
        "id": 1653,
        "name": "rotate_90_degrees_cw",
        "difficulty": 2
    },
    {
        "id": 1654,
        "name": "rotate_left",
        "difficulty": 3
    },
    {
        "id": 1655,
        "name": "rotate_right",
        "difficulty": 3
    },
    {
        "id": 1656,
        "name": "roundabout_left",
        "difficulty": 1
    },
    {
        "id": 1657,
        "name": "roundabout_right",
        "difficulty": 1
    },
    {
        "id": 1658,
        "name": "rounded_corner",
        "difficulty": 2
    },
    {
        "id": 1660,
        "name": "router",
        "difficulty": 2
    },
    {
        "id": 1661,
        "name": "rowing",
        "difficulty": 2
    },
    {
        "id": 1662,
        "name": "rss_feed",
        "difficulty": 3
    },
    {
        "id": 1663,
        "name": "rsvp",
        "difficulty": 0
    },
    {
        "id": 1665,
        "name": "rule",
        "difficulty": 4
    },
    {
        "id": 1666,
        "name": "rule_folder",
        "difficulty": 3
    },
    {
        "id": 1667,
        "name": "run_circle",
        "difficulty": 1
    },
    {
        "id": 1669,
        "name": "rv_hookup",
        "difficulty": 4
    },
    {
        "id": 1671,
        "name": "safety_divider",
        "difficulty": 3
    },
    {
        "id": 1672,
        "name": "sailing",
        "difficulty": 1
    },
    {
        "id": 1673,
        "name": "sanitizer",
        "difficulty": 2
    },
    {
        "id": 1675,
        "name": "satellite_alt",
        "difficulty": 1
    },
    {
        "id": 1676,
        "name": "save",
        "difficulty": 1
    },
    {
        "id": 1677,
        "name": "save_alt",
        "difficulty": 2
    },
    {
        "id": 1678,
        "name": "save_as",
        "difficulty": 2
    },
    {
        "id": 1679,
        "name": "saved_search",
        "difficulty": 2
    },
    {
        "id": 1680,
        "name": "savings",
        "difficulty": 2
    },
    {
        "id": 1681,
        "name": "scale",
        "difficulty": 2
    },
    {
        "id": 1682,
        "name": "scanner",
        "difficulty": 4
    },
    {
        "id": 1683,
        "name": "scatter_plot",
        "difficulty": 4
    },
    {
        "id": 1684,
        "name": "schedule",
        "difficulty": 3
    },
    {
        "id": 1685,
        "name": "schedule_send",
        "difficulty": 3
    },
    {
        "id": 1687,
        "name": "school",
        "difficulty": 1
    },
    {
        "id": 1688,
        "name": "science",
        "difficulty": 1
    },
    {
        "id": 1690,
        "name": "scoreboard",
        "difficulty": 1
    },
    {
        "id": 1691,
        "name": "screen_lock_landscape",
        "difficulty": 2
    },
    {
        "id": 1692,
        "name": "screen_lock_portrait",
        "difficulty": 2
    },
    {
        "id": 1693,
        "name": "screen_lock_rotation",
        "difficulty": 2
    },
    {
        "id": 1694,
        "name": "screen_rotation",
        "difficulty": 2
    },
    {
        "id": 1695,
        "name": "screen_rotation_alt",
        "difficulty": 4
    },
    {
        "id": 1696,
        "name": "screen_search_desktop",
        "difficulty": 2
    },
    {
        "id": 1697,
        "name": "screen_share",
        "difficulty": 1
    },
    {
        "id": 1698,
        "name": "screenshot",
        "difficulty": 3
    },
    {
        "id": 1699,
        "name": "screenshot_monitor",
        "difficulty": 3
    },
    {
        "id": 1700,
        "name": "scuba_diving",
        "difficulty": 1
    },
    {
        "id": 1701,
        "name": "sd",
        "difficulty": 0
    },
    {
        "id": 1702,
        "name": "sd_card",
        "difficulty": 2
    },
    {
        "id": 1703,
        "name": "sd_card_alert",
        "difficulty": 2
    },
    {
        "id": 1704,
        "name": "sd_storage",
        "difficulty": 2
    },
    {
        "id": 1705,
        "name": "search",
        "difficulty": 1
    },
    {
        "id": 1706,
        "name": "search_off",
        "difficulty": 1
    },
    {
        "id": 1707,
        "name": "security",
        "difficulty": 2
    },
    {
        "id": 1710,
        "name": "security_update_warning",
        "difficulty": 4
    },
    {
        "id": 1713,
        "name": "self_improvement",
        "difficulty": 4
    },
    {
        "id": 1714,
        "name": "sell",
        "difficulty": 3
    },
    {
        "id": 1715,
        "name": "send",
        "difficulty": 2
    },
    {
        "id": 1716,
        "name": "send_and_archive",
        "difficulty": 2
    },
    {
        "id": 1718,
        "name": "send_to_mobile",
        "difficulty": 3
    },
    {
        "id": 1719,
        "name": "sensor_door",
        "difficulty": 4
    },
    {
        "id": 1722,
        "name": "sensors",
        "difficulty": 3
    },
    {
        "id": 1723,
        "name": "sensors_off",
        "difficulty": 2
    },
    {
        "id": 1724,
        "name": "sentiment_dissatisfied",
        "difficulty": 1
    },
    {
        "id": 1725,
        "name": "sentiment_neutral",
        "difficulty": 1
    },
    {
        "id": 1726,
        "name": "sentiment_satisfied",
        "difficulty": 1
    },
    {
        "id": 1727,
        "name": "sentiment_satisfied_alt",
        "difficulty": 1
    },
    {
        "id": 1728,
        "name": "sentiment_very_dissatisfied",
        "difficulty": 1
    },
    {
        "id": 1729,
        "name": "sentiment_very_satisfied",
        "difficulty": 1
    },
    {
        "id": 1730,
        "name": "set_meal",
        "difficulty": 3
    },
    {
        "id": 1731,
        "name": "settings",
        "difficulty": 1
    },
    {
        "id": 1732,
        "name": "settings_accessibility",
        "difficulty": 3
    },
    {
        "id": 1733,
        "name": "settings_applications",
        "difficulty": 4
    },
    {
        "id": 1734,
        "name": "settings_backup_restore",
        "difficulty": 4
    },
    {
        "id": 1735,
        "name": "settings_bluetooth",
        "difficulty": 3
    },
    {
        "id": 1736,
        "name": "settings_brightness",
        "difficulty": 3
    },
    {
        "id": 1746,
        "name": "settings_phone",
        "difficulty": 2
    },
    {
        "id": 1747,
        "name": "settings_power",
        "difficulty": 2
    },
    {
        "id": 1748,
        "name": "settings_remote",
        "difficulty": 2
    },
    {
        "id": 1749,
        "name": "settings_suggest",
        "difficulty": 2
    },
    {
        "id": 1751,
        "name": "settings_voice",
        "difficulty": 2
    },
    {
        "id": 1752,
        "name": "severe_cold",
        "difficulty": 2
    },
    {
        "id": 1753,
        "name": "shape_line",
        "difficulty": 2
    },
    {
        "id": 1754,
        "name": "share",
        "difficulty": 2
    },
    {
        "id": 1755,
        "name": "share_arrival_time",
        "difficulty": 4
    },
    {
        "id": 1756,
        "name": "share_location",
        "difficulty": 4
    },
    {
        "id": 1757,
        "name": "shelves",
        "difficulty": 2
    },
    {
        "id": 1758,
        "name": "shield",
        "difficulty": 1
    },
    {
        "id": 1759,
        "name": "shield_moon",
        "difficulty": 1
    },
    {
        "id": 1760,
        "name": "shop",
        "difficulty": 3
    },
    {
        "id": 1761,
        "name": "shop_2",
        "difficulty": 3
    },
    {
        "id": 1762,
        "name": "shop_two",
        "difficulty": 3
    },
    {
        "id": 1763,
        "name": "shopify",
        "difficulty": 1
    },
    {
        "id": 1764,
        "name": "shopping_bag",
        "difficulty": 2
    },
    {
        "id": 1765,
        "name": "shopping_basket",
        "difficulty": 1
    },
    {
        "id": 1766,
        "name": "shopping_cart",
        "difficulty": 1
    },
    {
        "id": 1767,
        "name": "shopping_cart_checkout",
        "difficulty": 2
    },
    {
        "id": 1768,
        "name": "short_text",
        "difficulty": 2
    },
    {
        "id": 1769,
        "name": "shortcut",
        "difficulty": 4
    },
    {
        "id": 1770,
        "name": "show_chart",
        "difficulty": 3
    },
    {
        "id": 1771,
        "name": "shower",
        "difficulty": 2
    },
    {
        "id": 1772,
        "name": "shuffle",
        "difficulty": 2
    },
    {
        "id": 1773,
        "name": "shuffle_on",
        "difficulty": 2
    },
    {
        "id": 1774,
        "name": "shutter_speed",
        "difficulty": 4
    },
    {
        "id": 1775,
        "name": "sick",
        "difficulty": 2
    },
    {
        "id": 1776,
        "name": "sign_language",
        "difficulty": 2
    },
    {
        "id": 1777,
        "name": "signal_cellular_0_bar",
        "difficulty": 3
    },
    {
        "id": 1778,
        "name": "signal_cellular_4_bar",
        "difficulty": 3
    },
    {
        "id": 1779,
        "name": "signal_cellular_alt",
        "difficulty": 2
    },
    {
        "id": 1781,
        "name": "signal_cellular_alt_2_bar",
        "difficulty": 3
    },
    {
        "id": 1783,
        "name": "signal_cellular_connected_no_internet_4_bar",
        "difficulty": 4
    },
    {
        "id": 1784,
        "name": "signal_cellular_no_sim",
        "difficulty": 3
    },
    {
        "id": 1785,
        "name": "signal_cellular_nodata",
        "difficulty": 4
    },
    {
        "id": 1787,
        "name": "signal_cellular_off",
        "difficulty": 2
    },
    {
        "id": 1788,
        "name": "signal_wifi_0_bar",
        "difficulty": 2
    },
    {
        "id": 1789,
        "name": "signal_wifi_4_bar",
        "difficulty": 2
    },
    {
        "id": 1790,
        "name": "signal_wifi_4_bar_lock",
        "difficulty": 2
    },
    {
        "id": 1791,
        "name": "signal_wifi_bad",
        "difficulty": 2
    },
    {
        "id": 1792,
        "name": "signal_wifi_connected_no_internet_4",
        "difficulty": 2
    },
    {
        "id": 1793,
        "name": "signal_wifi_off",
        "difficulty": 2
    },
    {
        "id": 1794,
        "name": "signal_wifi_statusbar_4_bar",
        "difficulty": 2
    },
    {
        "id": 1795,
        "name": "signal_wifi_statusbar_connected_no_internet_4",
        "difficulty": 2
    },
    {
        "id": 1796,
        "name": "signal_wifi_statusbar_null",
        "difficulty": 4
    },
    {
        "id": 1797,
        "name": "signpost",
        "difficulty": 1
    },
    {
        "id": 1798,
        "name": "sim_card",
        "difficulty": 2
    },
    {
        "id": 1799,
        "name": "sim_card_alert",
        "difficulty": 2
    },
    {
        "id": 1800,
        "name": "sim_card_download",
        "difficulty": 2
    },
    {
        "id": 1801,
        "name": "single_bed",
        "difficulty": 2
    },
    {
        "id": 1802,
        "name": "sip",
        "difficulty": 0
    },
    {
        "id": 1803,
        "name": "skateboarding",
        "difficulty": 1
    },
    {
        "id": 1804,
        "name": "skip_next",
        "difficulty": 3
    },
    {
        "id": 1805,
        "name": "skip_previous",
        "difficulty": 3
    },
    {
        "id": 1806,
        "name": "sledding",
        "difficulty": 2
    },
    {
        "id": 1807,
        "name": "slideshow",
        "difficulty": 4
    },
    {
        "id": 1808,
        "name": "slow_motion_video",
        "difficulty": 4
    },
    {
        "id": 1813,
        "name": "smartphone",
        "difficulty": 1
    },
    {
        "id": 1814,
        "name": "smoke_free",
        "difficulty": 1
    },
    {
        "id": 1815,
        "name": "smoking_rooms",
        "difficulty": 1
    },
    {
        "id": 1816,
        "name": "sms",
        "difficulty": 2
    },
    {
        "id": 1817,
        "name": "sms_failed",
        "difficulty": 2
    },
    {
        "id": 1818,
        "name": "snapchat",
        "difficulty": 1
    },
    {
        "id": 1819,
        "name": "snippet_folder",
        "difficulty": 2
    },
    {
        "id": 1820,
        "name": "snooze",
        "difficulty": 2
    },
    {
        "id": 1821,
        "name": "snowboarding",
        "difficulty": 1
    },
    {
        "id": 1822,
        "name": "snowing",
        "difficulty": 4
    },
    {
        "id": 1823,
        "name": "snowmobile",
        "difficulty": 2
    },
    {
        "id": 1824,
        "name": "snowshoeing",
        "difficulty": 2
    },
    {
        "id": 1825,
        "name": "soap",
        "difficulty": 2
    },
    {
        "id": 1826,
        "name": "social_distance",
        "difficulty": 2
    },
    {
        "id": 1827,
        "name": "solar_power",
        "difficulty": 3
    },
    {
        "id": 1828,
        "name": "sort",
        "difficulty": 4
    },
    {
        "id": 1829,
        "name": "sort_by_alpha",
        "difficulty": 1
    },
    {
        "id": 1830,
        "name": "sos",
        "difficulty": 0
    },
    {
        "id": 1831,
        "name": "soup_kitchen",
        "difficulty": 2
    },
    {
        "id": 1833,
        "name": "south",
        "difficulty": 2
    },
    {
        "id": 1834,
        "name": "south_america",
        "difficulty": 1
    },
    {
        "id": 1835,
        "name": "south_east",
        "difficulty": 2
    },
    {
        "id": 1836,
        "name": "south_west",
        "difficulty": 2
    },
    {
        "id": 1838,
        "name": "space_bar",
        "difficulty": 3
    },
    {
        "id": 1839,
        "name": "space_dashboard",
        "difficulty": 4
    },
    {
        "id": 1840,
        "name": "spatial_audio",
        "difficulty": 4
    },
    {
        "id": 1843,
        "name": "speaker",
        "difficulty": 3
    },
    {
        "id": 1844,
        "name": "speaker_group",
        "difficulty": 3
    },
    {
        "id": 1845,
        "name": "speaker_notes",
        "difficulty": 4
    },
    {
        "id": 1846,
        "name": "speaker_notes_off",
        "difficulty": 3
    },
    {
        "id": 1847,
        "name": "speaker_phone",
        "difficulty": 4
    },
    {
        "id": 1848,
        "name": "speed",
        "difficulty": 3
    },
    {
        "id": 1849,
        "name": "spellcheck",
        "difficulty": 2
    },
    {
        "id": 1850,
        "name": "splitscreen",
        "difficulty": 3
    },
    {
        "id": 1853,
        "name": "sports_bar",
        "difficulty": 4
    },
    {
        "id": 1854,
        "name": "sports_baseball",
        "difficulty": 2
    },
    {
        "id": 1855,
        "name": "sports_basketball",
        "difficulty": 2
    },
    {
        "id": 1856,
        "name": "sports_cricket",
        "difficulty": 2
    },
    {
        "id": 1857,
        "name": "sports_esports",
        "difficulty": 3
    },
    {
        "id": 1858,
        "name": "sports_football",
        "difficulty": 1
    },
    {
        "id": 1859,
        "name": "sports_golf",
        "difficulty": 2
    },
    {
        "id": 1860,
        "name": "sports_gymnastics",
        "difficulty": 2
    },
    {
        "id": 1861,
        "name": "sports_handball",
        "difficulty": 3
    },
    {
        "id": 1862,
        "name": "sports_hockey",
        "difficulty": 3
    },
    {
        "id": 1863,
        "name": "sports_kabaddi",
        "difficulty": 3
    },
    {
        "id": 1864,
        "name": "sports_martial_arts",
        "difficulty": 2
    },
    {
        "id": 1865,
        "name": "sports_mma",
        "difficulty": 3
    },
    {
        "id": 1866,
        "name": "sports_motorsports",
        "difficulty": 3
    },
    {
        "id": 1867,
        "name": "sports_rugby",
        "difficulty": 3
    },
    {
        "id": 1869,
        "name": "sports_soccer",
        "difficulty": 2
    },
    {
        "id": 1870,
        "name": "sports_tennis",
        "difficulty": 1
    },
    {
        "id": 1871,
        "name": "sports_volleyball",
        "difficulty": 2
    },
    {
        "id": 1872,
        "name": "square",
        "difficulty": 1
    },
    {
        "id": 1874,
        "name": "ssid_chart",
        "difficulty": 4
    },
    {
        "id": 1875,
        "name": "stacked_bar_chart",
        "difficulty": 2
    },
    {
        "id": 1876,
        "name": "stacked_line_chart",
        "difficulty": 2
    },
    {
        "id": 1877,
        "name": "stadium",
        "difficulty": 2
    },
    {
        "id": 1878,
        "name": "stairs",
        "difficulty": 1
    },
    {
        "id": 1879,
        "name": "star",
        "difficulty": 1
    },
    {
        "id": 1880,
        "name": "star_border",
        "difficulty": 1
    },
    {
        "id": 1881,
        "name": "star_border_purple500",
        "difficulty": 3
    },
    {
        "id": 1882,
        "name": "star_half",
        "difficulty": 1
    },
    {
        "id": 1883,
        "name": "star_outline",
        "difficulty": 1
    },
    {
        "id": 1884,
        "name": "star_purple500",
        "difficulty": 3
    },
    {
        "id": 1885,
        "name": "star_rate",
        "difficulty": 2
    },
    {
        "id": 1886,
        "name": "stars",
        "difficulty": 3
    },
    {
        "id": 1887,
        "name": "start",
        "difficulty": 3
    },
    {
        "id": 1888,
        "name": "stay_current_landscape",
        "difficulty": 3
    },
    {
        "id": 1889,
        "name": "stay_current_portrait",
        "difficulty": 3
    },
    {
        "id": 1890,
        "name": "stay_primary_landscape",
        "difficulty": 3
    },
    {
        "id": 1891,
        "name": "stay_primary_portrait",
        "difficulty": 3
    },
    {
        "id": 1892,
        "name": "sticky_note_2",
        "difficulty": 2
    },
    {
        "id": 1894,
        "name": "stop_circle",
        "difficulty": 3
    },
    {
        "id": 1895,
        "name": "stop_screen_share",
        "difficulty": 2
    },
    {
        "id": 1896,
        "name": "storage",
        "difficulty": 3
    },
    {
        "id": 1897,
        "name": "store",
        "difficulty": 2
    },
    {
        "id": 1898,
        "name": "store_mall_directory",
        "difficulty": 4
    },
    {
        "id": 1899,
        "name": "storefront",
        "difficulty": 2
    },
    {
        "id": 1900,
        "name": "storm",
        "difficulty": 3
    },
    {
        "id": 1901,
        "name": "straight",
        "difficulty": 3
    },
    {
        "id": 1902,
        "name": "straighten",
        "difficulty": 4
    },
    {
        "id": 1905,
        "name": "strikethrough_s",
        "difficulty": 3
    },
    {
        "id": 1906,
        "name": "stroller",
        "difficulty": 2
    },
    {
        "id": 1908,
        "name": "subdirectory_arrow_left",
        "difficulty": 3
    },
    {
        "id": 1909,
        "name": "subdirectory_arrow_right",
        "difficulty": 3
    },
    {
        "id": 1911,
        "name": "subscript",
        "difficulty": 3
    },
    {
        "id": 1912,
        "name": "subscriptions",
        "difficulty": 3
    },
    {
        "id": 1913,
        "name": "subtitles",
        "difficulty": 2
    },
    {
        "id": 1914,
        "name": "subtitles_off",
        "difficulty": 2
    },
    {
        "id": 1915,
        "name": "subway",
        "difficulty": 1
    },
    {
        "id": 1916,
        "name": "summarize",
        "difficulty": 4
    },
    {
        "id": 1917,
        "name": "sunny",
        "difficulty": 1
    },
    {
        "id": 1918,
        "name": "sunny_snowing",
        "difficulty": 1
    },
    {
        "id": 1919,
        "name": "superscript",
        "difficulty": 3
    },
    {
        "id": 1920,
        "name": "supervised_user_circle",
        "difficulty": 3
    },
    {
        "id": 1921,
        "name": "supervisor_account",
        "difficulty": 4
    },
    {
        "id": 1923,
        "name": "support_agent",
        "difficulty": 2
    },
    {
        "id": 1924,
        "name": "surfing",
        "difficulty": 1
    },
    {
        "id": 1927,
        "name": "swap_horiz",
        "difficulty": 3
    },
    {
        "id": 1928,
        "name": "swap_horizontal_circle",
        "difficulty": 3
    },
    {
        "id": 1929,
        "name": "swap_vert",
        "difficulty": 3
    },
    {
        "id": 1930,
        "name": "swap_vert_circle",
        "difficulty": 3
    },
    {
        "id": 1931,
        "name": "swap_vertical_circle",
        "difficulty": 3
    },
    {
        "id": 1932,
        "name": "swipe",
        "difficulty": 3
    },
    {
        "id": 1933,
        "name": "swipe_down",
        "difficulty": 2
    },
    {
        "id": 1934,
        "name": "swipe_down_alt",
        "difficulty": 3
    },
    {
        "id": 1935,
        "name": "swipe_left",
        "difficulty": 2
    },
    {
        "id": 1936,
        "name": "swipe_left_alt",
        "difficulty": 3
    },
    {
        "id": 1937,
        "name": "swipe_right",
        "difficulty": 2
    },
    {
        "id": 1938,
        "name": "swipe_right_alt",
        "difficulty": 3
    },
    {
        "id": 1939,
        "name": "swipe_up",
        "difficulty": 2
    },
    {
        "id": 1940,
        "name": "swipe_up_alt",
        "difficulty": 3
    },
    {
        "id": 1941,
        "name": "swipe_vertical",
        "difficulty": 3
    },
    {
        "id": 1945,
        "name": "switch_camera",
        "difficulty": 3
    },
    {
        "id": 1948,
        "name": "switch_video",
        "difficulty": 3
    },
    {
        "id": 1949,
        "name": "synagogue",
        "difficulty": 1
    },
    {
        "id": 1950,
        "name": "sync",
        "difficulty": 3
    },
    {
        "id": 1952,
        "name": "sync_disabled",
        "difficulty": 2
    },
    {
        "id": 1953,
        "name": "sync_lock",
        "difficulty": 2
    },
    {
        "id": 1954,
        "name": "sync_problem",
        "difficulty": 2
    },
    {
        "id": 1956,
        "name": "system_security_update_good",
        "difficulty": 4
    },
    {
        "id": 1957,
        "name": "system_security_update_warning",
        "difficulty": 3
    },
    {
        "id": 1958,
        "name": "system_update",
        "difficulty": 4
    },
    {
        "id": 1961,
        "name": "tab",
        "difficulty": 3
    },
    {
        "id": 1963,
        "name": "table_bar",
        "difficulty": 2
    },
    {
        "id": 1964,
        "name": "table_chart",
        "difficulty": 4
    },
    {
        "id": 1965,
        "name": "table_restaurant",
        "difficulty": 2
    },
    {
        "id": 1968,
        "name": "tablet",
        "difficulty": 3
    },
    {
        "id": 1969,
        "name": "tablet_android",
        "difficulty": 2
    },
    {
        "id": 1970,
        "name": "tablet_mac",
        "difficulty": 3
    },
    {
        "id": 1971,
        "name": "tag",
        "difficulty": 3
    },
    {
        "id": 1972,
        "name": "tag_faces",
        "difficulty": 2
    },
    {
        "id": 1973,
        "name": "takeout_dining",
        "difficulty": 4
    },
    {
        "id": 1975,
        "name": "tapas",
        "difficulty": 3
    },
    {
        "id": 1976,
        "name": "task",
        "difficulty": 2
    },
    {
        "id": 1977,
        "name": "task_alt",
        "difficulty": 2
    },
    {
        "id": 1978,
        "name": "taxi_alert",
        "difficulty": 1
    },
    {
        "id": 1979,
        "name": "telegram",
        "difficulty": 2
    },
    {
        "id": 1980,
        "name": "temple_buddhist",
        "difficulty": 1
    },
    {
        "id": 1981,
        "name": "temple_hindu",
        "difficulty": 1
    },
    {
        "id": 1982,
        "name": "terminal",
        "difficulty": 2
    },
    {
        "id": 1983,
        "name": "terrain",
        "difficulty": 2
    },
    {
        "id": 1984,
        "name": "text_decrease",
        "difficulty": 2
    },
    {
        "id": 1985,
        "name": "text_fields",
        "difficulty": 4
    },
    {
        "id": 1986,
        "name": "text_format",
        "difficulty": 3
    },
    {
        "id": 1987,
        "name": "text_increase",
        "difficulty": 2
    },
    {
        "id": 1988,
        "name": "text_rotate_up",
        "difficulty": 2
    },
    {
        "id": 1989,
        "name": "text_rotate_vertical",
        "difficulty": 3
    },
    {
        "id": 1990,
        "name": "text_rotation_angledown",
        "difficulty": 2
    },
    {
        "id": 1991,
        "name": "text_rotation_angleup",
        "difficulty": 2
    },
    {
        "id": 1992,
        "name": "text_rotation_down",
        "difficulty": 2
    },
    {
        "id": 1993,
        "name": "text_rotation_none",
        "difficulty": 3
    },
    {
        "id": 1994,
        "name": "text_snippet",
        "difficulty": 4
    },
    {
        "id": 1995,
        "name": "textsms",
        "difficulty": 2
    },
    {
        "id": 1997,
        "name": "theater_comedy",
        "difficulty": 2
    },
    {
        "id": 1999,
        "name": "thermostat",
        "difficulty": 2
    },
    {
        "id": 2000,
        "name": "thermostat_auto",
        "difficulty": 2
    },
    {
        "id": 2001,
        "name": "thumb_down",
        "difficulty": 1
    },
    {
        "id": 2002,
        "name": "thumb_down_alt",
        "difficulty": 1
    },
    {
        "id": 2003,
        "name": "thumb_down_off_alt",
        "difficulty": 1
    },
    {
        "id": 2004,
        "name": "thumb_up",
        "difficulty": 1
    },
    {
        "id": 2005,
        "name": "thumb_up_alt",
        "difficulty": 1
    },
    {
        "id": 2006,
        "name": "thumb_up_off_alt",
        "difficulty": 1
    },
    {
        "id": 2007,
        "name": "thumbs_up_down",
        "difficulty": 1
    },
    {
        "id": 2008,
        "name": "thunderstorm",
        "difficulty": 1
    },
    {
        "id": 2009,
        "name": "tiktok",
        "difficulty": 1
    },
    {
        "id": 2011,
        "name": "timelapse",
        "difficulty": 4
    },
    {
        "id": 2013,
        "name": "timer",
        "difficulty": 2
    },
    {
        "id": 2014,
        "name": "timer_10",
        "difficulty": 1
    },
    {
        "id": 2015,
        "name": "timer_10_select",
        "difficulty": 1
    },
    {
        "id": 2016,
        "name": "timer_3",
        "difficulty": 1
    },
    {
        "id": 2017,
        "name": "timer_3_select",
        "difficulty": 1
    },
    {
        "id": 2018,
        "name": "timer_off",
        "difficulty": 2
    },
    {
        "id": 2019,
        "name": "tips_and_updates",
        "difficulty": 4
    },
    {
        "id": 2020,
        "name": "tire_repair",
        "difficulty": 3
    },
    {
        "id": 2021,
        "name": "title",
        "difficulty": 2
    },
    {
        "id": 2022,
        "name": "toc",
        "difficulty": 3
    },
    {
        "id": 2023,
        "name": "today",
        "difficulty": 3
    },
    {
        "id": 2024,
        "name": "toggle_off",
        "difficulty": 2
    },
    {
        "id": 2025,
        "name": "toggle_on",
        "difficulty": 2
    },
    {
        "id": 2031,
        "name": "touch_app",
        "difficulty": 4
    },
    {
        "id": 2033,
        "name": "toys",
        "difficulty": 3
    },
    {
        "id": 2035,
        "name": "traffic",
        "difficulty": 2
    },
    {
        "id": 2036,
        "name": "train",
        "difficulty": 1
    },
    {
        "id": 2037,
        "name": "tram",
        "difficulty": 1
    },
    {
        "id": 2038,
        "name": "transcribe",
        "difficulty": 4
    },
    {
        "id": 2041,
        "name": "transgender",
        "difficulty": 1
    },
    {
        "id": 2043,
        "name": "translate",
        "difficulty": 1
    },
    {
        "id": 2044,
        "name": "travel_explore",
        "difficulty": 2
    },
    {
        "id": 2045,
        "name": "trending_down",
        "difficulty": 2
    },
    {
        "id": 2046,
        "name": "trending_flat",
        "difficulty": 4
    },
    {
        "id": 2047,
        "name": "trending_neutral",
        "difficulty": 4
    },
    {
        "id": 2048,
        "name": "trending_up",
        "difficulty": 2
    },
    {
        "id": 2050,
        "name": "trolley",
        "difficulty": 2
    },
    {
        "id": 2051,
        "name": "troubleshoot",
        "difficulty": 3
    },
    {
        "id": 2053,
        "name": "tsunami",
        "difficulty": 2
    },
    {
        "id": 2054,
        "name": "tty",
        "difficulty": 4
    },
    {
        "id": 2055,
        "name": "tune",
        "difficulty": 4
    },
    {
        "id": 2057,
        "name": "turn_left",
        "difficulty": 2
    },
    {
        "id": 2058,
        "name": "turn_right",
        "difficulty": 2
    },
    {
        "id": 2059,
        "name": "turn_sharp_left",
        "difficulty": 2
    },
    {
        "id": 2060,
        "name": "turn_sharp_right",
        "difficulty": 2
    },
    {
        "id": 2061,
        "name": "turn_slight_left",
        "difficulty": 2
    },
    {
        "id": 2062,
        "name": "turn_slight_right",
        "difficulty": 2
    },
    {
        "id": 2065,
        "name": "tv",
        "difficulty": 2
    },
    {
        "id": 2066,
        "name": "tv_off",
        "difficulty": 1
    },
    {
        "id": 2067,
        "name": "two_wheeler",
        "difficulty": 2
    },
    {
        "id": 2069,
        "name": "u_turn_left",
        "difficulty": 1
    },
    {
        "id": 2070,
        "name": "u_turn_right",
        "difficulty": 1
    },
    {
        "id": 2071,
        "name": "umbrella",
        "difficulty": 2
    },
    {
        "id": 2072,
        "name": "unarchive",
        "difficulty": 3
    },
    {
        "id": 2073,
        "name": "undo",
        "difficulty": 1
    },
    {
        "id": 2079,
        "name": "unsubscribe",
        "difficulty": 4
    },
    {
        "id": 2081,
        "name": "update",
        "difficulty": 3
    },
    {
        "id": 2082,
        "name": "update_disabled",
        "difficulty": 3
    },
    {
        "id": 2083,
        "name": "upgrade",
        "difficulty": 3
    },
    {
        "id": 2084,
        "name": "upload",
        "difficulty": 2
    },
    {
        "id": 2085,
        "name": "upload_file",
        "difficulty": 1
    },
    {
        "id": 2086,
        "name": "usb",
        "difficulty": 2
    },
    {
        "id": 2087,
        "name": "usb_off",
        "difficulty": 2
    },
    {
        "id": 2088,
        "name": "vaccines",
        "difficulty": 2
    },
    {
        "id": 2089,
        "name": "vape_free",
        "difficulty": 1
    },
    {
        "id": 2090,
        "name": "vaping_rooms",
        "difficulty": 2
    },
    {
        "id": 2091,
        "name": "verified",
        "difficulty": 1
    },
    {
        "id": 2092,
        "name": "verified_user",
        "difficulty": 2
    },
    {
        "id": 2093,
        "name": "vertical_align_bottom",
        "difficulty": 2
    },
    {
        "id": 2094,
        "name": "vertical_align_center",
        "difficulty": 2
    },
    {
        "id": 2095,
        "name": "vertical_align_top",
        "difficulty": 2
    },
    {
        "id": 2096,
        "name": "vertical_distribute",
        "difficulty": 4
    },
    {
        "id": 2097,
        "name": "vertical_shades",
        "difficulty": 3
    },
    {
        "id": 2098,
        "name": "vertical_shades_closed",
        "difficulty": 4
    },
    {
        "id": 2099,
        "name": "vertical_split",
        "difficulty": 3
    },
    {
        "id": 2101,
        "name": "video_call",
        "difficulty": 2
    },
    {
        "id": 2102,
        "name": "video_camera_back",
        "difficulty": 4
    },
    {
        "id": 2103,
        "name": "video_camera_front",
        "difficulty": 4
    },
    {
        "id": 2104,
        "name": "video_chat",
        "difficulty": 3
    },
    {
        "id": 2105,
        "name": "video_collection",
        "difficulty": 3
    },
    {
        "id": 2106,
        "name": "video_file",
        "difficulty": 1
    },
    {
        "id": 2108,
        "name": "video_library",
        "difficulty": 2
    },
    {
        "id": 2109,
        "name": "video_settings",
        "difficulty": 2
    },
    {
        "id": 2110,
        "name": "video_stable",
        "difficulty": 3
    },
    {
        "id": 2111,
        "name": "videocam",
        "difficulty": 1
    },
    {
        "id": 2112,
        "name": "videocam_off",
        "difficulty": 1
    },
    {
        "id": 2113,
        "name": "videogame_asset",
        "difficulty": 2
    },
    {
        "id": 2114,
        "name": "videogame_asset_off",
        "difficulty": 2
    },
    {
        "id": 2116,
        "name": "view_array",
        "difficulty": 4
    },
    {
        "id": 2117,
        "name": "view_carousel",
        "difficulty": 3
    },
    {
        "id": 2118,
        "name": "view_column",
        "difficulty": 3
    },
    {
        "id": 2122,
        "name": "view_compact",
        "difficulty": 4
    },
    {
        "id": 2123,
        "name": "view_compact_alt",
        "difficulty": 4
    },
    {
        "id": 2127,
        "name": "view_in_ar",
        "difficulty": 2
    },
    {
        "id": 2128,
        "name": "view_kanban",
        "difficulty": 2
    },
    {
        "id": 2129,
        "name": "view_list",
        "difficulty": 2
    },
    {
        "id": 2130,
        "name": "view_module",
        "difficulty": 4
    },
    {
        "id": 2132,
        "name": "view_sidebar",
        "difficulty": 3
    },
    {
        "id": 2138,
        "name": "visibility",
        "difficulty": 3
    },
    {
        "id": 2139,
        "name": "visibility_off",
        "difficulty": 2
    },
    {
        "id": 2140,
        "name": "voice_chat",
        "difficulty": 2
    },
    {
        "id": 2141,
        "name": "voice_over_off",
        "difficulty": 4
    },
    {
        "id": 2142,
        "name": "voicemail",
        "difficulty": 2
    },
    {
        "id": 2143,
        "name": "volcano",
        "difficulty": 2
    },
    {
        "id": 2144,
        "name": "volume_down",
        "difficulty": 1
    },
    {
        "id": 2145,
        "name": "volume_down_alt",
        "difficulty": 1
    },
    {
        "id": 2146,
        "name": "volume_mute",
        "difficulty": 1
    },
    {
        "id": 2147,
        "name": "volume_off",
        "difficulty": 1
    },
    {
        "id": 2148,
        "name": "volume_up",
        "difficulty": 1
    },
    {
        "id": 2149,
        "name": "volunteer_activism",
        "difficulty": 3
    },
    {
        "id": 2150,
        "name": "vpn_key",
        "difficulty": 3
    },
    {
        "id": 2151,
        "name": "vpn_key_off",
        "difficulty": 3
    },
    {
        "id": 2152,
        "name": "vpn_lock",
        "difficulty": 3
    },
    {
        "id": 2153,
        "name": "vrpano",
        "difficulty": 3
    },
    {
        "id": 2154,
        "name": "wallet",
        "difficulty": 3
    },
    {
        "id": 2155,
        "name": "wallet_giftcard",
        "difficulty": 2
    },
    {
        "id": 2156,
        "name": "wallet_membership",
        "difficulty": 4
    },
    {
        "id": 2157,
        "name": "wallet_travel",
        "difficulty": 3
    },
    {
        "id": 2158,
        "name": "wallpaper",
        "difficulty": 3
    },
    {
        "id": 2159,
        "name": "warehouse",
        "difficulty": 2
    },
    {
        "id": 2160,
        "name": "warning",
        "difficulty": 1
    },
    {
        "id": 2161,
        "name": "warning_amber",
        "difficulty": 2
    },
    {
        "id": 2162,
        "name": "wash",
        "difficulty": 2
    },
    {
        "id": 2163,
        "name": "watch",
        "difficulty": 1
    },
    {
        "id": 2165,
        "name": "watch_off",
        "difficulty": 1
    },
    {
        "id": 2166,
        "name": "water",
        "difficulty": 2
    },
    {
        "id": 2167,
        "name": "water_damage",
        "difficulty": 3
    },
    {
        "id": 2168,
        "name": "water_drop",
        "difficulty": 1
    },
    {
        "id": 2169,
        "name": "waterfall_chart",
        "difficulty": 2
    },
    {
        "id": 2170,
        "name": "waves",
        "difficulty": 2
    },
    {
        "id": 2171,
        "name": "waving_hand",
        "difficulty": 1
    },
    {
        "id": 2173,
        "name": "wb_cloudy",
        "difficulty": 2
    },
    {
        "id": 2177,
        "name": "wb_sunny",
        "difficulty": 2
    },
    {
        "id": 2178,
        "name": "wb_twighlight",
        "difficulty": 2
    },
    {
        "id": 2179,
        "name": "wb_twilight",
        "difficulty": 2
    },
    {
        "id": 2180,
        "name": "wc",
        "difficulty": 1
    },
    {
        "id": 2181,
        "name": "web",
        "difficulty": 4
    },
    {
        "id": 2186,
        "name": "wechat",
        "difficulty": 2
    },
    {
        "id": 2188,
        "name": "west",
        "difficulty": 2
    },
    {
        "id": 2189,
        "name": "whatshot",
        "difficulty": 4
    },
    {
        "id": 2190,
        "name": "wheelchair_pickup",
        "difficulty": 2
    },
    {
        "id": 2192,
        "name": "widgets",
        "difficulty": 4
    },
    {
        "id": 2193,
        "name": "width_full",
        "difficulty": 4
    },
    {
        "id": 2195,
        "name": "width_wide",
        "difficulty": 4
    },
    {
        "id": 2196,
        "name": "wifi",
        "difficulty": 1
    },
    {
        "id": 2197,
        "name": "wifi_1_bar",
        "difficulty": 2
    },
    {
        "id": 2198,
        "name": "wifi_2_bar",
        "difficulty": 1
    },
    {
        "id": 2199,
        "name": "wifi_calling",
        "difficulty": 2
    },
    {
        "id": 2200,
        "name": "wifi_calling_3",
        "difficulty": 1
    },
    {
        "id": 2202,
        "name": "wifi_find",
        "difficulty": 2
    },
    {
        "id": 2203,
        "name": "wifi_lock",
        "difficulty": 2
    },
    {
        "id": 2204,
        "name": "wifi_off",
        "difficulty": 1
    },
    {
        "id": 2205,
        "name": "wifi_password",
        "difficulty": 1
    },
    {
        "id": 2211,
        "name": "wind_power",
        "difficulty": 2
    },
    {
        "id": 2212,
        "name": "window",
        "difficulty": 3
    },
    {
        "id": 2213,
        "name": "wine_bar",
        "difficulty": 3
    },
    {
        "id": 2214,
        "name": "woman",
        "difficulty": 1
    },
    {
        "id": 2215,
        "name": "woman_2",
        "difficulty": 1
    },
    {
        "id": 2217,
        "name": "wordpress",
        "difficulty": 2
    },
    {
        "id": 2218,
        "name": "work",
        "difficulty": 3
    },
    {
        "id": 2219,
        "name": "work_history",
        "difficulty": 3
    },
    {
        "id": 2220,
        "name": "work_off",
        "difficulty": 3
    },
    {
        "id": 2221,
        "name": "work_outline",
        "difficulty": 3
    },
    {
        "id": 2226,
        "name": "wrap_text",
        "difficulty": 2
    },
    {
        "id": 2227,
        "name": "wrong_location",
        "difficulty": 2
    },
    {
        "id": 2229,
        "name": "yard",
        "difficulty": 4
    },
    {
        "id": 2230,
        "name": "youtube_searched_for",
        "difficulty": 3
    },
    {
        "id": 2231,
        "name": "zoom_in",
        "difficulty": 1
    },
    {
        "id": 2232,
        "name": "zoom_in_map",
        "difficulty": 3
    },
    {
        "id": 2233,
        "name": "zoom_out",
        "difficulty": 1
    },
    {
        "id": 2234,
        "name": "zoom_out_map",
        "difficulty": 3
    }
];

const normalIconList = [
    {
        "id": 26,
        "name": "360",
        "difficulty": 3
    },
    {
        "id": 58,
        "name": "ac_unit",
        "difficulty": 6
    },
    {
        "id": 59,
        "name": "access_alarm",
        "difficulty": 4
    },
    {
        "id": 60,
        "name": "access_alarms",
        "difficulty": 4
    },
    {
        "id": 61,
        "name": "access_time",
        "difficulty": 3
    },
    {
        "id": 62,
        "name": "access_time_filled",
        "difficulty": 3
    },
    {
        "id": 63,
        "name": "accessibility",
        "difficulty": 3
    },
    {
        "id": 64,
        "name": "accessibility_new",
        "difficulty": 3
    },
    {
        "id": 65,
        "name": "accessible",
        "difficulty": 3
    },
    {
        "id": 66,
        "name": "accessible_forward",
        "difficulty": 3
    },
    {
        "id": 67,
        "name": "account_balance",
        "difficulty": 6
    },
    {
        "id": 68,
        "name": "account_balance_wallet",
        "difficulty": 7
    },
    {
        "id": 69,
        "name": "account_box",
        "difficulty": 3
    },
    {
        "id": 71,
        "name": "account_tree",
        "difficulty": 6
    },
    {
        "id": 72,
        "name": "ad_units",
        "difficulty": 5
    },
    {
        "id": 79,
        "name": "add_business",
        "difficulty": 3
    },
    {
        "id": 87,
        "name": "add_home_work",
        "difficulty": 3
    },
    {
        "id": 95,
        "name": "add_road",
        "difficulty": 4
    },
    {
        "id": 99,
        "name": "add_to_home_screen",
        "difficulty": 4
    },
    {
        "id": 100,
        "name": "add_to_photos",
        "difficulty": 4
    },
    {
        "id": 101,
        "name": "add_to_queue",
        "difficulty": 5
    },
    {
        "id": 105,
        "name": "admin_panel_settings",
        "difficulty": 6
    },
    {
        "id": 110,
        "name": "airline_seat_flat",
        "difficulty": 4
    },
    {
        "id": 111,
        "name": "airline_seat_flat_angled",
        "difficulty": 4
    },
    {
        "id": 112,
        "name": "airline_seat_individual_suite",
        "difficulty": 5
    },
    {
        "id": 113,
        "name": "airline_seat_legroom_extra",
        "difficulty": 3
    },
    {
        "id": 116,
        "name": "airline_seat_recline_extra",
        "difficulty": 3
    },
    {
        "id": 118,
        "name": "airline_stops",
        "difficulty": 7
    },
    {
        "id": 125,
        "name": "airplay",
        "difficulty": 3
    },
    {
        "id": 126,
        "name": "airport_shuttle",
        "difficulty": 5
    },
    {
        "id": 131,
        "name": "album",
        "difficulty": 5
    },
    {
        "id": 132,
        "name": "align_horizontal_center",
        "difficulty": 4
    },
    {
        "id": 133,
        "name": "align_horizontal_left",
        "difficulty": 3
    },
    {
        "id": 134,
        "name": "align_horizontal_right",
        "difficulty": 3
    },
    {
        "id": 135,
        "name": "align_vertical_bottom",
        "difficulty": 3
    },
    {
        "id": 136,
        "name": "align_vertical_center",
        "difficulty": 4
    },
    {
        "id": 137,
        "name": "align_vertical_top",
        "difficulty": 3
    },
    {
        "id": 139,
        "name": "all_inclusive",
        "difficulty": 7
    },
    {
        "id": 140,
        "name": "all_out",
        "difficulty": 7
    },
    {
        "id": 142,
        "name": "alternate_email",
        "difficulty": 5
    },
    {
        "id": 144,
        "name": "analytics",
        "difficulty": 3
    },
    {
        "id": 148,
        "name": "announcement",
        "difficulty": 3
    },
    {
        "id": 149,
        "name": "aod",
        "difficulty": 7
    },
    {
        "id": 153,
        "name": "app_registration",
        "difficulty": 3
    },
    {
        "id": 155,
        "name": "app_shortcut",
        "difficulty": 4
    },
    {
        "id": 160,
        "name": "architecture",
        "difficulty": 4
    },
    {
        "id": 161,
        "name": "archive",
        "difficulty": 3
    },
    {
        "id": 171,
        "name": "arrow_drop_down",
        "difficulty": 3
    },
    {
        "id": 173,
        "name": "arrow_drop_up",
        "difficulty": 3
    },
    {
        "id": 181,
        "name": "art_track",
        "difficulty": 5
    },
    {
        "id": 182,
        "name": "article",
        "difficulty": 3
    },
    {
        "id": 183,
        "name": "aspect_ratio",
        "difficulty": 3
    },
    {
        "id": 184,
        "name": "assessment",
        "difficulty": 4
    },
    {
        "id": 185,
        "name": "assignment",
        "difficulty": 3
    },
    {
        "id": 187,
        "name": "assignment_ind",
        "difficulty": 3
    },
    {
        "id": 188,
        "name": "assignment_late",
        "difficulty": 3
    },
    {
        "id": 189,
        "name": "assignment_return",
        "difficulty": 3
    },
    {
        "id": 190,
        "name": "assignment_returned",
        "difficulty": 3
    },
    {
        "id": 191,
        "name": "assignment_turned_in",
        "difficulty": 3
    },
    {
        "id": 192,
        "name": "assist_walker",
        "difficulty": 3
    },
    {
        "id": 193,
        "name": "assistant",
        "difficulty": 5
    },
    {
        "id": 194,
        "name": "assistant_direction",
        "difficulty": 3
    },
    {
        "id": 195,
        "name": "assistant_navigation",
        "difficulty": 4
    },
    {
        "id": 204,
        "name": "attribution",
        "difficulty": 6
    },
    {
        "id": 207,
        "name": "auto_awesome",
        "difficulty": 7
    },
    {
        "id": 208,
        "name": "auto_awesome_mosaic",
        "difficulty": 6
    },
    {
        "id": 209,
        "name": "auto_awesome_motion",
        "difficulty": 7
    },
    {
        "id": 210,
        "name": "auto_delete",
        "difficulty": 4
    },
    {
        "id": 211,
        "name": "auto_fix_high",
        "difficulty": 3
    },
    {
        "id": 212,
        "name": "auto_fix_normal",
        "difficulty": 3
    },
    {
        "id": 213,
        "name": "auto_fix_off",
        "difficulty": 4
    },
    {
        "id": 215,
        "name": "auto_mode",
        "difficulty": 4
    },
    {
        "id": 216,
        "name": "auto_stories",
        "difficulty": 3
    },
    {
        "id": 217,
        "name": "autofps_select",
        "difficulty": 3
    },
    {
        "id": 230,
        "name": "ballot",
        "difficulty": 3
    },
    {
        "id": 233,
        "name": "batch_prediction",
        "difficulty": 3
    },
    {
        "id": 234,
        "name": "bathroom",
        "difficulty": 3
    },
    {
        "id": 251,
        "name": "bedroom_baby",
        "difficulty": 4
    },
    {
        "id": 252,
        "name": "bedroom_child",
        "difficulty": 4
    },
    {
        "id": 253,
        "name": "bedroom_parent",
        "difficulty": 4
    },
    {
        "id": 254,
        "name": "bedtime",
        "difficulty": 3
    },
    {
        "id": 255,
        "name": "bedtime_off",
        "difficulty": 3
    },
    {
        "id": 256,
        "name": "beenhere",
        "difficulty": 5
    },
    {
        "id": 257,
        "name": "bento",
        "difficulty": 5
    },
    {
        "id": 258,
        "name": "bike_scooter",
        "difficulty": 3
    },
    {
        "id": 259,
        "name": "biotech",
        "difficulty": 3
    },
    {
        "id": 273,
        "name": "blur_circular",
        "difficulty": 4
    },
    {
        "id": 274,
        "name": "blur_linear",
        "difficulty": 4
    },
    {
        "id": 275,
        "name": "blur_off",
        "difficulty": 4
    },
    {
        "id": 276,
        "name": "blur_on",
        "difficulty": 4
    },
    {
        "id": 278,
        "name": "book",
        "difficulty": 4
    },
    {
        "id": 279,
        "name": "book_online",
        "difficulty": 5
    },
    {
        "id": 287,
        "name": "border_all",
        "difficulty": 4
    },
    {
        "id": 288,
        "name": "border_bottom",
        "difficulty": 3
    },
    {
        "id": 289,
        "name": "border_clear",
        "difficulty": 5
    },
    {
        "id": 290,
        "name": "border_color",
        "difficulty": 6
    },
    {
        "id": 291,
        "name": "border_horizontal",
        "difficulty": 4
    },
    {
        "id": 292,
        "name": "border_inner",
        "difficulty": 4
    },
    {
        "id": 293,
        "name": "border_left",
        "difficulty": 4
    },
    {
        "id": 294,
        "name": "border_outer",
        "difficulty": 5
    },
    {
        "id": 295,
        "name": "border_right",
        "difficulty": 4
    },
    {
        "id": 296,
        "name": "border_style",
        "difficulty": 4
    },
    {
        "id": 297,
        "name": "border_top",
        "difficulty": 4
    },
    {
        "id": 298,
        "name": "border_vertical",
        "difficulty": 4
    },
    {
        "id": 300,
        "name": "branding_watermark",
        "difficulty": 3
    },
    {
        "id": 301,
        "name": "breakfast_dining",
        "difficulty": 6
    },
    {
        "id": 302,
        "name": "brightness_1",
        "difficulty": 7
    },
    {
        "id": 303,
        "name": "brightness_2",
        "difficulty": 6
    },
    {
        "id": 304,
        "name": "brightness_3",
        "difficulty": 6
    },
    {
        "id": 305,
        "name": "brightness_4",
        "difficulty": 4
    },
    {
        "id": 306,
        "name": "brightness_5",
        "difficulty": 4
    },
    {
        "id": 307,
        "name": "brightness_6",
        "difficulty": 4
    },
    {
        "id": 308,
        "name": "brightness_7",
        "difficulty": 4
    },
    {
        "id": 309,
        "name": "brightness_auto",
        "difficulty": 4
    },
    {
        "id": 310,
        "name": "brightness_high",
        "difficulty": 5
    },
    {
        "id": 311,
        "name": "brightness_low",
        "difficulty": 4
    },
    {
        "id": 312,
        "name": "brightness_medium",
        "difficulty": 4
    },
    {
        "id": 313,
        "name": "broadcast_on_home",
        "difficulty": 5
    },
    {
        "id": 314,
        "name": "broadcast_on_personal",
        "difficulty": 5
    },
    {
        "id": 315,
        "name": "broken_image",
        "difficulty": 4
    },
    {
        "id": 316,
        "name": "browse_gallery",
        "difficulty": 7
    },
    {
        "id": 317,
        "name": "browser_not_supported",
        "difficulty": 6
    },
    {
        "id": 318,
        "name": "browser_updated",
        "difficulty": 5
    },
    {
        "id": 319,
        "name": "brunch_dining",
        "difficulty": 4
    },
    {
        "id": 325,
        "name": "bungalow",
        "difficulty": 3
    },
    {
        "id": 326,
        "name": "burst_mode",
        "difficulty": 3
    },
    {
        "id": 328,
        "name": "business",
        "difficulty": 4
    },
    {
        "id": 329,
        "name": "business_center",
        "difficulty": 4
    },
    {
        "id": 330,
        "name": "cabin",
        "difficulty": 3
    },
    {
        "id": 332,
        "name": "cached",
        "difficulty": 3
    },
    {
        "id": 337,
        "name": "calendar_view_day",
        "difficulty": 7
    },
    {
        "id": 338,
        "name": "calendar_view_month",
        "difficulty": 6
    },
    {
        "id": 339,
        "name": "calendar_view_week",
        "difficulty": 6
    },
    {
        "id": 343,
        "name": "call_merge",
        "difficulty": 7
    },
    {
        "id": 347,
        "name": "call_split",
        "difficulty": 7
    },
    {
        "id": 352,
        "name": "camera_front",
        "difficulty": 3
    },
    {
        "id": 354,
        "name": "camera_outdoor",
        "difficulty": 3
    },
    {
        "id": 358,
        "name": "campaign",
        "difficulty": 5
    },
    {
        "id": 360,
        "name": "cancel_presentation",
        "difficulty": 3
    },
    {
        "id": 362,
        "name": "candlestick_chart",
        "difficulty": 4
    },
    {
        "id": 363,
        "name": "car_crash",
        "difficulty": 3
    },
    {
        "id": 364,
        "name": "car_rental",
        "difficulty": 3
    },
    {
        "id": 365,
        "name": "car_repair",
        "difficulty": 3
    },
    {
        "id": 366,
        "name": "card_giftcard",
        "difficulty": 3
    },
    {
        "id": 367,
        "name": "card_membership",
        "difficulty": 4
    },
    {
        "id": 368,
        "name": "card_travel",
        "difficulty": 5
    },
    {
        "id": 369,
        "name": "carpenter",
        "difficulty": 4
    },
    {
        "id": 370,
        "name": "cases",
        "difficulty": 3
    },
    {
        "id": 371,
        "name": "casino",
        "difficulty": 4
    },
    {
        "id": 377,
        "name": "category",
        "difficulty": 4
    },
    {
        "id": 381,
        "name": "center_focus_strong",
        "difficulty": 3
    },
    {
        "id": 382,
        "name": "center_focus_weak",
        "difficulty": 4
    },
    {
        "id": 384,
        "name": "chair_alt",
        "difficulty": 3
    },
    {
        "id": 385,
        "name": "chalet",
        "difficulty": 3
    },
    {
        "id": 388,
        "name": "charging_station",
        "difficulty": 3
    },
    {
        "id": 399,
        "name": "checkroom",
        "difficulty": 3
    },
    {
        "id": 400,
        "name": "chevron_left",
        "difficulty": 3
    },
    {
        "id": 401,
        "name": "chevron_right",
        "difficulty": 3
    },
    {
        "id": 404,
        "name": "chrome_reader_mode",
        "difficulty": 5
    },
    {
        "id": 408,
        "name": "class",
        "difficulty": 3
    },
    {
        "id": 410,
        "name": "cleaning_services",
        "difficulty": 6
    },
    {
        "id": 412,
        "name": "clear_all",
        "difficulty": 7
    },
    {
        "id": 428,
        "name": "co_present",
        "difficulty": 4
    },
    {
        "id": 429,
        "name": "code",
        "difficulty": 3
    },
    {
        "id": 430,
        "name": "code_off",
        "difficulty": 3
    },
    {
        "id": 433,
        "name": "collections",
        "difficulty": 5
    },
    {
        "id": 434,
        "name": "collections_bookmark",
        "difficulty": 4
    },
    {
        "id": 435,
        "name": "color_lens",
        "difficulty": 7
    },
    {
        "id": 436,
        "name": "colorize",
        "difficulty": 6
    },
    {
        "id": 437,
        "name": "comment",
        "difficulty": 3
    },
    {
        "id": 438,
        "name": "comment_bank",
        "difficulty": 5
    },
    {
        "id": 439,
        "name": "comments_disabled",
        "difficulty": 3
    },
    {
        "id": 440,
        "name": "commit",
        "difficulty": 7
    },
    {
        "id": 441,
        "name": "commute",
        "difficulty": 3
    },
    {
        "id": 442,
        "name": "compare",
        "difficulty": 5
    },
    {
        "id": 443,
        "name": "compare_arrows",
        "difficulty": 4
    },
    {
        "id": 444,
        "name": "compass_calibration",
        "difficulty": 5
    },
    {
        "id": 445,
        "name": "compost",
        "difficulty": 3
    },
    {
        "id": 450,
        "name": "connect_without_contact",
        "difficulty": 4
    },
    {
        "id": 451,
        "name": "connected_tv",
        "difficulty": 3
    },
    {
        "id": 452,
        "name": "connecting_airports",
        "difficulty": 3
    },
    {
        "id": 458,
        "name": "contact_support",
        "difficulty": 3
    },
    {
        "id": 459,
        "name": "contactless",
        "difficulty": 3
    },
    {
        "id": 462,
        "name": "content_cut",
        "difficulty": 3
    },
    {
        "id": 463,
        "name": "content_paste",
        "difficulty": 3
    },
    {
        "id": 464,
        "name": "content_paste_go",
        "difficulty": 3
    },
    {
        "id": 465,
        "name": "content_paste_off",
        "difficulty": 3
    },
    {
        "id": 466,
        "name": "content_paste_search",
        "difficulty": 3
    },
    {
        "id": 467,
        "name": "contrast",
        "difficulty": 4
    },
    {
        "id": 468,
        "name": "control_camera",
        "difficulty": 7
    },
    {
        "id": 470,
        "name": "control_point_duplicate",
        "difficulty": 7
    },
    {
        "id": 471,
        "name": "conveyor_belt",
        "difficulty": 3
    },
    {
        "id": 473,
        "name": "copy_all",
        "difficulty": 3
    },
    {
        "id": 476,
        "name": "corporate_fare",
        "difficulty": 5
    },
    {
        "id": 477,
        "name": "cottage",
        "difficulty": 3
    },
    {
        "id": 478,
        "name": "countertops",
        "difficulty": 3
    },
    {
        "id": 485,
        "name": "crisis_alert",
        "difficulty": 4
    },
    {
        "id": 486,
        "name": "crop",
        "difficulty": 3
    },
    {
        "id": 487,
        "name": "crop_16_9",
        "difficulty": 3
    },
    {
        "id": 488,
        "name": "crop_3_2",
        "difficulty": 3
    },
    {
        "id": 489,
        "name": "crop_5_4",
        "difficulty": 3
    },
    {
        "id": 490,
        "name": "crop_7_5",
        "difficulty": 3
    },
    {
        "id": 491,
        "name": "crop_din",
        "difficulty": 3
    },
    {
        "id": 492,
        "name": "crop_free",
        "difficulty": 5
    },
    {
        "id": 493,
        "name": "crop_landscape",
        "difficulty": 4
    },
    {
        "id": 494,
        "name": "crop_original",
        "difficulty": 7
    },
    {
        "id": 495,
        "name": "crop_portrait",
        "difficulty": 4
    },
    {
        "id": 496,
        "name": "crop_rotate",
        "difficulty": 3
    },
    {
        "id": 497,
        "name": "crop_square",
        "difficulty": 3
    },
    {
        "id": 498,
        "name": "cruelty_free",
        "difficulty": 4
    },
    {
        "id": 509,
        "name": "curtains",
        "difficulty": 3
    },
    {
        "id": 510,
        "name": "curtains_closed",
        "difficulty": 5
    },
    {
        "id": 514,
        "name": "dashboard",
        "difficulty": 4
    },
    {
        "id": 515,
        "name": "dashboard_customize",
        "difficulty": 3
    },
    {
        "id": 516,
        "name": "data_array",
        "difficulty": 4
    },
    {
        "id": 517,
        "name": "data_exploration",
        "difficulty": 3
    },
    {
        "id": 518,
        "name": "data_object",
        "difficulty": 4
    },
    {
        "id": 519,
        "name": "data_saver_off",
        "difficulty": 7
    },
    {
        "id": 520,
        "name": "data_saver_on",
        "difficulty": 6
    },
    {
        "id": 521,
        "name": "data_thresholding",
        "difficulty": 5
    },
    {
        "id": 522,
        "name": "data_usage",
        "difficulty": 5
    },
    {
        "id": 523,
        "name": "dataset",
        "difficulty": 7
    },
    {
        "id": 524,
        "name": "dataset_linked",
        "difficulty": 4
    },
    {
        "id": 525,
        "name": "date_range",
        "difficulty": 4
    },
    {
        "id": 526,
        "name": "deblur",
        "difficulty": 4
    },
    {
        "id": 534,
        "name": "density_large",
        "difficulty": 4
    },
    {
        "id": 535,
        "name": "density_medium",
        "difficulty": 4
    },
    {
        "id": 536,
        "name": "density_small",
        "difficulty": 4
    },
    {
        "id": 537,
        "name": "departure_board",
        "difficulty": 3
    },
    {
        "id": 538,
        "name": "description",
        "difficulty": 5
    },
    {
        "id": 539,
        "name": "deselect",
        "difficulty": 5
    },
    {
        "id": 540,
        "name": "design_services",
        "difficulty": 3
    },
    {
        "id": 546,
        "name": "developer_board",
        "difficulty": 5
    },
    {
        "id": 547,
        "name": "developer_board_off",
        "difficulty": 4
    },
    {
        "id": 548,
        "name": "developer_mode",
        "difficulty": 4
    },
    {
        "id": 549,
        "name": "device_hub",
        "difficulty": 6
    },
    {
        "id": 550,
        "name": "device_thermostat",
        "difficulty": 3
    },
    {
        "id": 552,
        "name": "devices",
        "difficulty": 3
    },
    {
        "id": 553,
        "name": "devices_fold",
        "difficulty": 3
    },
    {
        "id": 555,
        "name": "dew_point",
        "difficulty": 3
    },
    {
        "id": 559,
        "name": "difference",
        "difficulty": 3
    },
    {
        "id": 571,
        "name": "directions_off",
        "difficulty": 3
    },
    {
        "id": 580,
        "name": "directions_walk",
        "difficulty": 3
    },
    {
        "id": 582,
        "name": "disabled_by_default",
        "difficulty": 3
    },
    {
        "id": 584,
        "name": "disc_full",
        "difficulty": 3
    },
    {
        "id": 588,
        "name": "diversity_1",
        "difficulty": 3
    },
    {
        "id": 589,
        "name": "diversity_2",
        "difficulty": 4
    },
    {
        "id": 590,
        "name": "diversity_3",
        "difficulty": 3
    },
    {
        "id": 591,
        "name": "dnd_forwardslash",
        "difficulty": 4
    },
    {
        "id": 592,
        "name": "dns",
        "difficulty": 5
    },
    {
        "id": 593,
        "name": "do_disturb",
        "difficulty": 4
    },
    {
        "id": 594,
        "name": "do_disturb_alt",
        "difficulty": 4
    },
    {
        "id": 595,
        "name": "do_disturb_off",
        "difficulty": 4
    },
    {
        "id": 596,
        "name": "do_disturb_on",
        "difficulty": 4
    },
    {
        "id": 601,
        "name": "do_not_disturb_on_total_silence",
        "difficulty": 5
    },
    {
        "id": 604,
        "name": "dock",
        "difficulty": 3
    },
    {
        "id": 605,
        "name": "document_scanner",
        "difficulty": 4
    },
    {
        "id": 606,
        "name": "domain",
        "difficulty": 7
    },
    {
        "id": 607,
        "name": "domain_add",
        "difficulty": 4
    },
    {
        "id": 608,
        "name": "domain_disabled",
        "difficulty": 4
    },
    {
        "id": 609,
        "name": "domain_verification",
        "difficulty": 6
    },
    {
        "id": 613,
        "name": "donut_large",
        "difficulty": 5
    },
    {
        "id": 614,
        "name": "donut_small",
        "difficulty": 7
    },
    {
        "id": 615,
        "name": "door_back",
        "difficulty": 3
    },
    {
        "id": 616,
        "name": "door_front",
        "difficulty": 3
    },
    {
        "id": 617,
        "name": "door_sliding",
        "difficulty": 3
    },
    {
        "id": 618,
        "name": "doorbell",
        "difficulty": 3
    },
    {
        "id": 625,
        "name": "drafts",
        "difficulty": 3
    },
    {
        "id": 626,
        "name": "drag_handle",
        "difficulty": 4
    },
    {
        "id": 627,
        "name": "drag_indicator",
        "difficulty": 6
    },
    {
        "id": 633,
        "name": "drive_file_rename_outline",
        "difficulty": 3
    },
    {
        "id": 635,
        "name": "dry",
        "difficulty": 3
    },
    {
        "id": 637,
        "name": "duo",
        "difficulty": 7
    },
    {
        "id": 639,
        "name": "dynamic_feed",
        "difficulty": 5
    },
    {
        "id": 640,
        "name": "dynamic_form",
        "difficulty": 7
    },
    {
        "id": 641,
        "name": "e_mobiledata",
        "difficulty": 3
    },
    {
        "id": 642,
        "name": "earbuds",
        "difficulty": 5
    },
    {
        "id": 643,
        "name": "earbuds_battery",
        "difficulty": 4
    },
    {
        "id": 646,
        "name": "edgesensor_high",
        "difficulty": 4
    },
    {
        "id": 647,
        "name": "edgesensor_low",
        "difficulty": 5
    },
    {
        "id": 649,
        "name": "edit_attributes",
        "difficulty": 4
    },
    {
        "id": 650,
        "name": "edit_calendar",
        "difficulty": 3
    },
    {
        "id": 654,
        "name": "edit_note",
        "difficulty": 3
    },
    {
        "id": 657,
        "name": "edit_road",
        "difficulty": 4
    },
    {
        "id": 660,
        "name": "egg_alt",
        "difficulty": 4
    },
    {
        "id": 661,
        "name": "eject",
        "difficulty": 6
    },
    {
        "id": 667,
        "name": "electric_meter",
        "difficulty": 4
    },
    {
        "id": 669,
        "name": "electric_rickshaw",
        "difficulty": 3
    },
    {
        "id": 671,
        "name": "electrical_services",
        "difficulty": 5
    },
    {
        "id": 674,
        "name": "emergency",
        "difficulty": 5
    },
    {
        "id": 675,
        "name": "emergency_recording",
        "difficulty": 5
    },
    {
        "id": 676,
        "name": "emergency_share",
        "difficulty": 7
    },
    {
        "id": 681,
        "name": "emoji_nature",
        "difficulty": 3
    },
    {
        "id": 682,
        "name": "emoji_objects",
        "difficulty": 6
    },
    {
        "id": 685,
        "name": "emoji_transportation",
        "difficulty": 3
    },
    {
        "id": 688,
        "name": "enhance_photo_translate",
        "difficulty": 3
    },
    {
        "id": 689,
        "name": "enhanced_encryption",
        "difficulty": 3
    },
    {
        "id": 690,
        "name": "equalizer",
        "difficulty": 4
    },
    {
        "id": 698,
        "name": "event",
        "difficulty": 4
    },
    {
        "id": 699,
        "name": "event_available",
        "difficulty": 4
    },
    {
        "id": 700,
        "name": "event_busy",
        "difficulty": 4
    },
    {
        "id": 701,
        "name": "event_note",
        "difficulty": 6
    },
    {
        "id": 702,
        "name": "event_repeat",
        "difficulty": 4
    },
    {
        "id": 703,
        "name": "event_seat",
        "difficulty": 4
    },
    {
        "id": 704,
        "name": "exit_to_app",
        "difficulty": 4
    },
    {
        "id": 705,
        "name": "expand",
        "difficulty": 3
    },
    {
        "id": 706,
        "name": "expand_circle_down",
        "difficulty": 3
    },
    {
        "id": 707,
        "name": "expand_less",
        "difficulty": 3
    },
    {
        "id": 708,
        "name": "expand_more",
        "difficulty": 3
    },
    {
        "id": 709,
        "name": "explicit",
        "difficulty": 5
    },
    {
        "id": 710,
        "name": "explore",
        "difficulty": 4
    },
    {
        "id": 711,
        "name": "explore_off",
        "difficulty": 3
    },
    {
        "id": 712,
        "name": "exposure",
        "difficulty": 3
    },
    {
        "id": 720,
        "name": "extension",
        "difficulty": 3
    },
    {
        "id": 721,
        "name": "extension_off",
        "difficulty": 3
    },
    {
        "id": 731,
        "name": "fact_check",
        "difficulty": 4
    },
    {
        "id": 733,
        "name": "family_restroom",
        "difficulty": 3
    },
    {
        "id": 737,
        "name": "favorite",
        "difficulty": 3
    },
    {
        "id": 738,
        "name": "favorite_border",
        "difficulty": 3
    },
    {
        "id": 739,
        "name": "favorite_outline",
        "difficulty": 3
    },
    {
        "id": 740,
        "name": "fax",
        "difficulty": 4
    },
    {
        "id": 741,
        "name": "featured_play_list",
        "difficulty": 6
    },
    {
        "id": 742,
        "name": "featured_video",
        "difficulty": 6
    },
    {
        "id": 744,
        "name": "feedback",
        "difficulty": 3
    },
    {
        "id": 746,
        "name": "fence",
        "difficulty": 3
    },
    {
        "id": 747,
        "name": "festival",
        "difficulty": 3
    },
    {
        "id": 758,
        "name": "file_present",
        "difficulty": 5
    },
    {
        "id": 761,
        "name": "filter",
        "difficulty": 3
    },
    {
        "id": 774,
        "name": "filter_b_and_w",
        "difficulty": 4
    },
    {
        "id": 775,
        "name": "filter_center_focus",
        "difficulty": 3
    },
    {
        "id": 777,
        "name": "filter_frames",
        "difficulty": 7
    },
    {
        "id": 778,
        "name": "filter_hdr",
        "difficulty": 7
    },
    {
        "id": 779,
        "name": "filter_list",
        "difficulty": 5
    },
    {
        "id": 780,
        "name": "filter_list_alt",
        "difficulty": 3
    },
    {
        "id": 781,
        "name": "filter_list_off",
        "difficulty": 4
    },
    {
        "id": 782,
        "name": "filter_none",
        "difficulty": 5
    },
    {
        "id": 783,
        "name": "filter_tilt_shift",
        "difficulty": 6
    },
    {
        "id": 784,
        "name": "filter_vintage",
        "difficulty": 7
    },
    {
        "id": 786,
        "name": "find_replace",
        "difficulty": 3
    },
    {
        "id": 788,
        "name": "fire_extinguisher",
        "difficulty": 3
    },
    {
        "id": 789,
        "name": "fire_hydrant",
        "difficulty": 7
    },
    {
        "id": 791,
        "name": "fire_truck",
        "difficulty": 4
    },
    {
        "id": 792,
        "name": "fireplace",
        "difficulty": 3
    },
    {
        "id": 793,
        "name": "first_page",
        "difficulty": 3
    },
    {
        "id": 794,
        "name": "fit_screen",
        "difficulty": 3
    },
    {
        "id": 795,
        "name": "fitbit",
        "difficulty": 4
    },
    {
        "id": 800,
        "name": "flare",
        "difficulty": 4
    },
    {
        "id": 801,
        "name": "flash_auto",
        "difficulty": 3
    },
    {
        "id": 804,
        "name": "flashlight_off",
        "difficulty": 3
    },
    {
        "id": 808,
        "name": "flight_class",
        "difficulty": 4
    },
    {
        "id": 811,
        "name": "flip",
        "difficulty": 3
    },
    {
        "id": 812,
        "name": "flip_camera_android",
        "difficulty": 5
    },
    {
        "id": 813,
        "name": "flip_camera_ios",
        "difficulty": 3
    },
    {
        "id": 814,
        "name": "flip_to_back",
        "difficulty": 6
    },
    {
        "id": 815,
        "name": "flip_to_front",
        "difficulty": 6
    },
    {
        "id": 817,
        "name": "flourescent",
        "difficulty": 6
    },
    {
        "id": 818,
        "name": "flourescent",
        "difficulty": 6
    },
    {
        "id": 819,
        "name": "fluorescent",
        "difficulty": 6
    },
    {
        "id": 821,
        "name": "fmd_bad",
        "difficulty": 6
    },
    {
        "id": 833,
        "name": "font_download",
        "difficulty": 3
    },
    {
        "id": 837,
        "name": "fork_left",
        "difficulty": 3
    },
    {
        "id": 838,
        "name": "fork_right",
        "difficulty": 3
    },
    {
        "id": 841,
        "name": "format_align_justify",
        "difficulty": 4
    },
    {
        "id": 844,
        "name": "format_bold",
        "difficulty": 3
    },
    {
        "id": 845,
        "name": "format_clear",
        "difficulty": 4
    },
    {
        "id": 846,
        "name": "format_color_fill",
        "difficulty": 3
    },
    {
        "id": 847,
        "name": "format_color_reset",
        "difficulty": 5
    },
    {
        "id": 848,
        "name": "format_color_text",
        "difficulty": 3
    },
    {
        "id": 849,
        "name": "format_indent_decrease",
        "difficulty": 3
    },
    {
        "id": 850,
        "name": "format_indent_increase",
        "difficulty": 3
    },
    {
        "id": 857,
        "name": "format_overline",
        "difficulty": 5
    },
    {
        "id": 860,
        "name": "format_shapes",
        "difficulty": 4
    },
    {
        "id": 863,
        "name": "format_textdirection_l_to_r",
        "difficulty": 3
    },
    {
        "id": 864,
        "name": "format_textdirection_r_to_l",
        "difficulty": 3
    },
    {
        "id": 874,
        "name": "foundation",
        "difficulty": 5
    },
    {
        "id": 875,
        "name": "free_breakfast",
        "difficulty": 5
    },
    {
        "id": 876,
        "name": "free_cancellation",
        "difficulty": 4
    },
    {
        "id": 881,
        "name": "functions",
        "difficulty": 3
    },
    {
        "id": 882,
        "name": "g_mobiledata",
        "difficulty": 3
    },
    {
        "id": 885,
        "name": "games",
        "difficulty": 5
    },
    {
        "id": 887,
        "name": "gas_meter",
        "difficulty": 4
    },
    {
        "id": 888,
        "name": "gavel",
        "difficulty": 3
    },
    {
        "id": 889,
        "name": "generating_tokens",
        "difficulty": 5
    },
    {
        "id": 890,
        "name": "gesture",
        "difficulty": 5
    },
    {
        "id": 895,
        "name": "gite",
        "difficulty": 7
    },
    {
        "id": 899,
        "name": "gpp_good",
        "difficulty": 7
    },
    {
        "id": 901,
        "name": "gps_fixed",
        "difficulty": 5
    },
    {
        "id": 902,
        "name": "gps_not_fixed",
        "difficulty": 6
    },
    {
        "id": 903,
        "name": "gps_off",
        "difficulty": 4
    },
    {
        "id": 904,
        "name": "grade",
        "difficulty": 5
    },
    {
        "id": 905,
        "name": "gradient",
        "difficulty": 3
    },
    {
        "id": 906,
        "name": "grading",
        "difficulty": 3
    },
    {
        "id": 907,
        "name": "grain",
        "difficulty": 5
    },
    {
        "id": 908,
        "name": "graphic_eq",
        "difficulty": 5
    },
    {
        "id": 912,
        "name": "grid_goldenratio",
        "difficulty": 5
    },
    {
        "id": 914,
        "name": "grid_on",
        "difficulty": 3
    },
    {
        "id": 920,
        "name": "group_work",
        "difficulty": 7
    },
    {
        "id": 924,
        "name": "h_mobiledata",
        "difficulty": 3
    },
    {
        "id": 926,
        "name": "hail",
        "difficulty": 3
    },
    {
        "id": 929,
        "name": "hardware",
        "difficulty": 3
    },
    {
        "id": 931,
        "name": "hdr_auto",
        "difficulty": 3
    },
    {
        "id": 946,
        "name": "healing",
        "difficulty": 4
    },
    {
        "id": 947,
        "name": "health_and_safety",
        "difficulty": 3
    },
    {
        "id": 948,
        "name": "hearing",
        "difficulty": 3
    },
    {
        "id": 951,
        "name": "heat_pump",
        "difficulty": 4
    },
    {
        "id": 952,
        "name": "height",
        "difficulty": 5
    },
    {
        "id": 953,
        "name": "help",
        "difficulty": 3
    },
    {
        "id": 954,
        "name": "help_center",
        "difficulty": 4
    },
    {
        "id": 955,
        "name": "help_outline",
        "difficulty": 3
    },
    {
        "id": 959,
        "name": "hide_source",
        "difficulty": 4
    },
    {
        "id": 961,
        "name": "highlight",
        "difficulty": 4
    },
    {
        "id": 963,
        "name": "highlight_off",
        "difficulty": 4
    },
    {
        "id": 964,
        "name": "highlight_remove",
        "difficulty": 4
    },
    {
        "id": 967,
        "name": "history_edu",
        "difficulty": 4
    },
    {
        "id": 968,
        "name": "history_toggle_off",
        "difficulty": 5
    },
    {
        "id": 969,
        "name": "hive",
        "difficulty": 3
    },
    {
        "id": 972,
        "name": "holiday_village",
        "difficulty": 4
    },
    {
        "id": 977,
        "name": "home_repair_service",
        "difficulty": 3
    },
    {
        "id": 978,
        "name": "home_work",
        "difficulty": 3
    },
    {
        "id": 979,
        "name": "horizontal_distribute",
        "difficulty": 5
    },
    {
        "id": 980,
        "name": "horizontal_rule",
        "difficulty": 5
    },
    {
        "id": 981,
        "name": "horizontal_split",
        "difficulty": 4
    },
    {
        "id": 983,
        "name": "hotel",
        "difficulty": 3
    },
    {
        "id": 984,
        "name": "hotel_class",
        "difficulty": 3
    },
    {
        "id": 991,
        "name": "house_siding",
        "difficulty": 3
    },
    {
        "id": 993,
        "name": "how_to_reg",
        "difficulty": 6
    },
    {
        "id": 994,
        "name": "how_to_vote",
        "difficulty": 3
    },
    {
        "id": 997,
        "name": "https",
        "difficulty": 5
    },
    {
        "id": 998,
        "name": "hub",
        "difficulty": 5
    },
    {
        "id": 999,
        "name": "hvac",
        "difficulty": 5
    },
    {
        "id": 1001,
        "name": "icecream",
        "difficulty": 3
    },
    {
        "id": 1003,
        "name": "image_aspect_ratio",
        "difficulty": 4
    },
    {
        "id": 1004,
        "name": "image_not_supported",
        "difficulty": 3
    },
    {
        "id": 1006,
        "name": "imagesearch_roller",
        "difficulty": 4
    },
    {
        "id": 1007,
        "name": "import_contacts",
        "difficulty": 7
    },
    {
        "id": 1008,
        "name": "import_export",
        "difficulty": 3
    },
    {
        "id": 1009,
        "name": "important_devices",
        "difficulty": 3
    },
    {
        "id": 1012,
        "name": "indeterminate_check_box",
        "difficulty": 5
    },
    {
        "id": 1015,
        "name": "input",
        "difficulty": 4
    },
    {
        "id": 1016,
        "name": "insert_chart",
        "difficulty": 3
    },
    {
        "id": 1017,
        "name": "insert_chart_outlined",
        "difficulty": 3
    },
    {
        "id": 1018,
        "name": "insert_comment",
        "difficulty": 3
    },
    {
        "id": 1019,
        "name": "insert_drive_file",
        "difficulty": 4
    },
    {
        "id": 1021,
        "name": "insert_invitation",
        "difficulty": 6
    },
    {
        "id": 1023,
        "name": "insert_page_break",
        "difficulty": 3
    },
    {
        "id": 1025,
        "name": "insights",
        "difficulty": 6
    },
    {
        "id": 1026,
        "name": "install_desktop",
        "difficulty": 3
    },
    {
        "id": 1027,
        "name": "install_mobile",
        "difficulty": 3
    },
    {
        "id": 1029,
        "name": "interests",
        "difficulty": 6
    },
    {
        "id": 1030,
        "name": "interpreter_mode",
        "difficulty": 5
    },
    {
        "id": 1031,
        "name": "inventory",
        "difficulty": 5
    },
    {
        "id": 1032,
        "name": "inventory_2",
        "difficulty": 5
    },
    {
        "id": 1033,
        "name": "invert_colors",
        "difficulty": 5
    },
    {
        "id": 1034,
        "name": "invert_colors_off",
        "difficulty": 4
    },
    {
        "id": 1035,
        "name": "invert_colors_on",
        "difficulty": 5
    },
    {
        "id": 1036,
        "name": "ios_share",
        "difficulty": 4
    },
    {
        "id": 1038,
        "name": "iso",
        "difficulty": 4
    },
    {
        "id": 1040,
        "name": "join_full",
        "difficulty": 3
    },
    {
        "id": 1045,
        "name": "kebab_dining",
        "difficulty": 3
    },
    {
        "id": 1055,
        "name": "keyboard_capslock",
        "difficulty": 3
    },
    {
        "id": 1056,
        "name": "keyboard_command",
        "difficulty": 5
    },
    {
        "id": 1057,
        "name": "keyboard_command_key",
        "difficulty": 5
    },
    {
        "id": 1058,
        "name": "keyboard_control",
        "difficulty": 7
    },
    {
        "id": 1059,
        "name": "keyboard_control_key",
        "difficulty": 7
    },
    {
        "id": 1064,
        "name": "keyboard_hide",
        "difficulty": 4
    },
    {
        "id": 1065,
        "name": "keyboard_option",
        "difficulty": 5
    },
    {
        "id": 1066,
        "name": "keyboard_option_key",
        "difficulty": 5
    },
    {
        "id": 1067,
        "name": "keyboard_return",
        "difficulty": 3
    },
    {
        "id": 1068,
        "name": "keyboard_tab",
        "difficulty": 3
    },
    {
        "id": 1069,
        "name": "keyboard_voice",
        "difficulty": 5
    },
    {
        "id": 1070,
        "name": "king_bed",
        "difficulty": 4
    },
    {
        "id": 1071,
        "name": "kitchen",
        "difficulty": 3
    },
    {
        "id": 1073,
        "name": "label",
        "difficulty": 4
    },
    {
        "id": 1074,
        "name": "label_important",
        "difficulty": 5
    },
    {
        "id": 1075,
        "name": "label_important_outline",
        "difficulty": 5
    },
    {
        "id": 1076,
        "name": "label_off",
        "difficulty": 3
    },
    {
        "id": 1077,
        "name": "label_outline",
        "difficulty": 4
    },
    {
        "id": 1078,
        "name": "lan",
        "difficulty": 5
    },
    {
        "id": 1080,
        "name": "landslide",
        "difficulty": 6
    },
    {
        "id": 1081,
        "name": "language",
        "difficulty": 3
    },
    {
        "id": 1086,
        "name": "last_page",
        "difficulty": 3
    },
    {
        "id": 1087,
        "name": "launch",
        "difficulty": 4
    },
    {
        "id": 1090,
        "name": "leaderboard",
        "difficulty": 3
    },
    {
        "id": 1092,
        "name": "leak_remove",
        "difficulty": 7
    },
    {
        "id": 1093,
        "name": "leave_bags_at_home",
        "difficulty": 3
    },
    {
        "id": 1094,
        "name": "legend_toggle",
        "difficulty": 6
    },
    {
        "id": 1095,
        "name": "lens",
        "difficulty": 7
    },
    {
        "id": 1096,
        "name": "lens_blur",
        "difficulty": 5
    },
    {
        "id": 1099,
        "name": "library_books",
        "difficulty": 3
    },
    {
        "id": 1106,
        "name": "line_axis",
        "difficulty": 3
    },
    {
        "id": 1107,
        "name": "line_style",
        "difficulty": 4
    },
    {
        "id": 1108,
        "name": "line_weight",
        "difficulty": 4
    },
    {
        "id": 1109,
        "name": "linear_scale",
        "difficulty": 6
    },
    {
        "id": 1112,
        "name": "linked_camera",
        "difficulty": 3
    },
    {
        "id": 1116,
        "name": "live_help",
        "difficulty": 3
    },
    {
        "id": 1117,
        "name": "live_tv",
        "difficulty": 3
    },
    {
        "id": 1118,
        "name": "living",
        "difficulty": 5
    },
    {
        "id": 1119,
        "name": "local_activity",
        "difficulty": 6
    },
    {
        "id": 1121,
        "name": "local_atm",
        "difficulty": 4
    },
    {
        "id": 1122,
        "name": "local_attraction",
        "difficulty": 6
    },
    {
        "id": 1126,
        "name": "local_convenience_store",
        "difficulty": 4
    },
    {
        "id": 1128,
        "name": "local_drink",
        "difficulty": 3
    },
    {
        "id": 1130,
        "name": "local_florist",
        "difficulty": 3
    },
    {
        "id": 1136,
        "name": "local_library",
        "difficulty": 4
    },
    {
        "id": 1137,
        "name": "local_mall",
        "difficulty": 3
    },
    {
        "id": 1138,
        "name": "local_movies",
        "difficulty": 3
    },
    {
        "id": 1139,
        "name": "local_offer",
        "difficulty": 5
    },
    {
        "id": 1141,
        "name": "local_pharmacy",
        "difficulty": 3
    },
    {
        "id": 1144,
        "name": "local_play",
        "difficulty": 5
    },
    {
        "id": 1145,
        "name": "local_police",
        "difficulty": 3
    },
    {
        "id": 1150,
        "name": "local_see",
        "difficulty": 7
    },
    {
        "id": 1151,
        "name": "local_shipping",
        "difficulty": 3
    },
    {
        "id": 1153,
        "name": "location_city",
        "difficulty": 3
    },
    {
        "id": 1154,
        "name": "location_disabled",
        "difficulty": 3
    },
    {
        "id": 1155,
        "name": "location_history",
        "difficulty": 5
    },
    {
        "id": 1159,
        "name": "location_searching",
        "difficulty": 5
    },
    {
        "id": 1176,
        "name": "loop",
        "difficulty": 3
    },
    {
        "id": 1177,
        "name": "loupe",
        "difficulty": 4
    },
    {
        "id": 1178,
        "name": "low_priority",
        "difficulty": 3
    },
    {
        "id": 1179,
        "name": "loyalty",
        "difficulty": 5
    },
    {
        "id": 1185,
        "name": "macro_off",
        "difficulty": 6
    },
    {
        "id": 1195,
        "name": "manage_history",
        "difficulty": 3
    },
    {
        "id": 1196,
        "name": "manage_search",
        "difficulty": 3
    },
    {
        "id": 1198,
        "name": "maps_home_work",
        "difficulty": 4
    },
    {
        "id": 1199,
        "name": "maps_ugc",
        "difficulty": 7
    },
    {
        "id": 1200,
        "name": "margin",
        "difficulty": 6
    },
    {
        "id": 1201,
        "name": "mark_as_unread",
        "difficulty": 4
    },
    {
        "id": 1207,
        "name": "markunread",
        "difficulty": 4
    },
    {
        "id": 1209,
        "name": "masks",
        "difficulty": 3
    },
    {
        "id": 1213,
        "name": "mediation",
        "difficulty": 6
    },
    {
        "id": 1216,
        "name": "medication",
        "difficulty": 3
    },
    {
        "id": 1217,
        "name": "medication_liquid",
        "difficulty": 3
    },
    {
        "id": 1218,
        "name": "meeting_room",
        "difficulty": 6
    },
    {
        "id": 1219,
        "name": "memory",
        "difficulty": 5
    },
    {
        "id": 1221,
        "name": "menu_book",
        "difficulty": 4
    },
    {
        "id": 1222,
        "name": "menu_open",
        "difficulty": 3
    },
    {
        "id": 1223,
        "name": "merge",
        "difficulty": 3
    },
    {
        "id": 1224,
        "name": "merge_type",
        "difficulty": 3
    },
    {
        "id": 1233,
        "name": "microwave",
        "difficulty": 3
    },
    {
        "id": 1234,
        "name": "military_tech",
        "difficulty": 4
    },
    {
        "id": 1235,
        "name": "minimize",
        "difficulty": 3
    },
    {
        "id": 1236,
        "name": "minor_crash",
        "difficulty": 3
    },
    {
        "id": 1237,
        "name": "miscellaneous_services",
        "difficulty": 7
    },
    {
        "id": 1238,
        "name": "missed_video_call",
        "difficulty": 4
    },
    {
        "id": 1239,
        "name": "mms",
        "difficulty": 4
    },
    {
        "id": 1240,
        "name": "mobile_friendly",
        "difficulty": 3
    },
    {
        "id": 1243,
        "name": "mobiledata_off",
        "difficulty": 5
    },
    {
        "id": 1248,
        "name": "mode_fan_off",
        "difficulty": 4
    },
    {
        "id": 1249,
        "name": "mode_night",
        "difficulty": 3
    },
    {
        "id": 1250,
        "name": "mode_of_travel",
        "difficulty": 5
    },
    {
        "id": 1252,
        "name": "model_training",
        "difficulty": 6
    },
    {
        "id": 1253,
        "name": "monetization_on",
        "difficulty": 3
    },
    {
        "id": 1254,
        "name": "money",
        "difficulty": 3
    },
    {
        "id": 1258,
        "name": "monitor_heart",
        "difficulty": 3
    },
    {
        "id": 1259,
        "name": "monitor_weight",
        "difficulty": 5
    },
    {
        "id": 1260,
        "name": "monochrome_photos",
        "difficulty": 3
    },
    {
        "id": 1264,
        "name": "more",
        "difficulty": 4
    },
    {
        "id": 1265,
        "name": "more_horiz",
        "difficulty": 3
    },
    {
        "id": 1267,
        "name": "more_vert",
        "difficulty": 3
    },
    {
        "id": 1269,
        "name": "motion_photos_auto",
        "difficulty": 6
    },
    {
        "id": 1270,
        "name": "motion_photos_off",
        "difficulty": 7
    },
    {
        "id": 1271,
        "name": "motion_photos_on",
        "difficulty": 6
    },
    {
        "id": 1272,
        "name": "motion_photos_pause",
        "difficulty": 4
    },
    {
        "id": 1273,
        "name": "motion_photos_paused",
        "difficulty": 4
    },
    {
        "id": 1276,
        "name": "move_down",
        "difficulty": 3
    },
    {
        "id": 1282,
        "name": "movie_filter",
        "difficulty": 3
    },
    {
        "id": 1285,
        "name": "multiline_chart",
        "difficulty": 4
    },
    {
        "id": 1286,
        "name": "multiple_stop",
        "difficulty": 5
    },
    {
        "id": 1287,
        "name": "multitrack_audio",
        "difficulty": 6
    },
    {
        "id": 1288,
        "name": "museum",
        "difficulty": 3
    },
    {
        "id": 1293,
        "name": "my_library_books",
        "difficulty": 6
    },
    {
        "id": 1295,
        "name": "my_location",
        "difficulty": 4
    },
    {
        "id": 1296,
        "name": "nat",
        "difficulty": 7
    },
    {
        "id": 1298,
        "name": "nature_people",
        "difficulty": 4
    },
    {
        "id": 1299,
        "name": "navigate_before",
        "difficulty": 3
    },
    {
        "id": 1300,
        "name": "navigate_next",
        "difficulty": 3
    },
    {
        "id": 1301,
        "name": "navigation",
        "difficulty": 4
    },
    {
        "id": 1302,
        "name": "near_me",
        "difficulty": 6
    },
    {
        "id": 1303,
        "name": "near_me_disabled",
        "difficulty": 5
    },
    {
        "id": 1304,
        "name": "nearby_error",
        "difficulty": 4
    },
    {
        "id": 1305,
        "name": "nearby_off",
        "difficulty": 5
    },
    {
        "id": 1306,
        "name": "nest_cam_wired_stand",
        "difficulty": 7
    },
    {
        "id": 1307,
        "name": "network_cell",
        "difficulty": 6
    },
    {
        "id": 1308,
        "name": "network_check",
        "difficulty": 5
    },
    {
        "id": 1309,
        "name": "network_locked",
        "difficulty": 3
    },
    {
        "id": 1310,
        "name": "network_ping",
        "difficulty": 5
    },
    {
        "id": 1311,
        "name": "network_wifi",
        "difficulty": 3
    },
    {
        "id": 1316,
        "name": "new_releases",
        "difficulty": 5
    },
    {
        "id": 1317,
        "name": "newspaper",
        "difficulty": 3
    },
    {
        "id": 1318,
        "name": "next_plan",
        "difficulty": 6
    },
    {
        "id": 1319,
        "name": "next_week",
        "difficulty": 6
    },
    {
        "id": 1320,
        "name": "nfc",
        "difficulty": 7
    },
    {
        "id": 1322,
        "name": "nightlife",
        "difficulty": 3
    },
    {
        "id": 1323,
        "name": "nightlight",
        "difficulty": 3
    },
    {
        "id": 1324,
        "name": "nightlight_round",
        "difficulty": 4
    },
    {
        "id": 1325,
        "name": "nights_stay",
        "difficulty": 3
    },
    {
        "id": 1329,
        "name": "no_cell",
        "difficulty": 3
    },
    {
        "id": 1330,
        "name": "no_crash",
        "difficulty": 4
    },
    {
        "id": 1332,
        "name": "no_encryption",
        "difficulty": 3
    },
    {
        "id": 1333,
        "name": "no_encryption_gmailerrorred",
        "difficulty": 4
    },
    {
        "id": 1339,
        "name": "no_meeting_room",
        "difficulty": 5
    },
    {
        "id": 1343,
        "name": "no_transfer",
        "difficulty": 3
    },
    {
        "id": 1344,
        "name": "noise_aware",
        "difficulty": 7
    },
    {
        "id": 1346,
        "name": "nordic_walking",
        "difficulty": 3
    },
    {
        "id": 1353,
        "name": "not_started",
        "difficulty": 4
    },
    {
        "id": 1357,
        "name": "notes",
        "difficulty": 3
    },
    {
        "id": 1366,
        "name": "now_wallpaper",
        "difficulty": 3
    },
    {
        "id": 1367,
        "name": "now_widgets",
        "difficulty": 7
    },
    {
        "id": 1368,
        "name": "numbers",
        "difficulty": 4
    },
    {
        "id": 1369,
        "name": "offline_bolt",
        "difficulty": 3
    },
    {
        "id": 1373,
        "name": "on_device_training",
        "difficulty": 3
    },
    {
        "id": 1375,
        "name": "online_prediction",
        "difficulty": 7
    },
    {
        "id": 1376,
        "name": "opacity",
        "difficulty": 4
    },
    {
        "id": 1377,
        "name": "open_in_browser",
        "difficulty": 4
    },
    {
        "id": 1378,
        "name": "open_in_full",
        "difficulty": 4
    },
    {
        "id": 1379,
        "name": "open_in_new",
        "difficulty": 5
    },
    {
        "id": 1380,
        "name": "open_in_new_off",
        "difficulty": 5
    },
    {
        "id": 1381,
        "name": "open_with",
        "difficulty": 7
    },
    {
        "id": 1382,
        "name": "other_houses",
        "difficulty": 3
    },
    {
        "id": 1383,
        "name": "outbond",
        "difficulty": 4
    },
    {
        "id": 1384,
        "name": "outbound",
        "difficulty": 4
    },
    {
        "id": 1388,
        "name": "outlet",
        "difficulty": 3
    },
    {
        "id": 1390,
        "name": "output",
        "difficulty": 4
    },
    {
        "id": 1391,
        "name": "padding",
        "difficulty": 6
    },
    {
        "id": 1393,
        "name": "pageview",
        "difficulty": 6
    },
    {
        "id": 1394,
        "name": "paid",
        "difficulty": 3
    },
    {
        "id": 1396,
        "name": "pallet",
        "difficulty": 3
    },
    {
        "id": 1397,
        "name": "pan_tool",
        "difficulty": 3
    },
    {
        "id": 1398,
        "name": "pan_tool_alt",
        "difficulty": 5
    },
    {
        "id": 1408,
        "name": "panorama_wide_angle",
        "difficulty": 3
    },
    {
        "id": 1409,
        "name": "panorama_wide_angle_select",
        "difficulty": 3
    },
    {
        "id": 1412,
        "name": "party_mode",
        "difficulty": 6
    },
    {
        "id": 1420,
        "name": "payment",
        "difficulty": 3
    },
    {
        "id": 1421,
        "name": "payments",
        "difficulty": 5
    },
    {
        "id": 1424,
        "name": "pending",
        "difficulty": 4
    },
    {
        "id": 1425,
        "name": "pending_actions",
        "difficulty": 4
    },
    {
        "id": 1427,
        "name": "people",
        "difficulty": 3
    },
    {
        "id": 1428,
        "name": "people_alt",
        "difficulty": 3
    },
    {
        "id": 1429,
        "name": "people_outline",
        "difficulty": 3
    },
    {
        "id": 1432,
        "name": "perm_contact_cal",
        "difficulty": 3
    },
    {
        "id": 1433,
        "name": "perm_contact_calendar",
        "difficulty": 4
    },
    {
        "id": 1434,
        "name": "perm_data_setting",
        "difficulty": 3
    },
    {
        "id": 1435,
        "name": "perm_device_info",
        "difficulty": 3
    },
    {
        "id": 1436,
        "name": "perm_device_information",
        "difficulty": 4
    },
    {
        "id": 1437,
        "name": "perm_identity",
        "difficulty": 4
    },
    {
        "id": 1438,
        "name": "perm_media",
        "difficulty": 4
    },
    {
        "id": 1440,
        "name": "perm_scan_wifi",
        "difficulty": 3
    },
    {
        "id": 1456,
        "name": "personal_injury",
        "difficulty": 3
    },
    {
        "id": 1457,
        "name": "personal_video",
        "difficulty": 6
    },
    {
        "id": 1458,
        "name": "pest_control",
        "difficulty": 3
    },
    {
        "id": 1474,
        "name": "phonelink",
        "difficulty": 4
    },
    {
        "id": 1475,
        "name": "phonelink_erase",
        "difficulty": 4
    },
    {
        "id": 1476,
        "name": "phonelink_lock",
        "difficulty": 3
    },
    {
        "id": 1478,
        "name": "phonelink_ring",
        "difficulty": 3
    },
    {
        "id": 1483,
        "name": "photo_camera_back",
        "difficulty": 4
    },
    {
        "id": 1484,
        "name": "photo_camera_front",
        "difficulty": 4
    },
    {
        "id": 1485,
        "name": "photo_filter",
        "difficulty": 4
    },
    {
        "id": 1487,
        "name": "photo_size_select_actual",
        "difficulty": 3
    },
    {
        "id": 1488,
        "name": "photo_size_select_large",
        "difficulty": 3
    },
    {
        "id": 1489,
        "name": "photo_size_select_small",
        "difficulty": 3
    },
    {
        "id": 1499,
        "name": "pin",
        "difficulty": 3
    },
    {
        "id": 1500,
        "name": "pin_drop",
        "difficulty": 4
    },
    {
        "id": 1501,
        "name": "pin_end",
        "difficulty": 7
    },
    {
        "id": 1502,
        "name": "pin_invoke",
        "difficulty": 7
    },
    {
        "id": 1503,
        "name": "pinch",
        "difficulty": 4
    },
    {
        "id": 1504,
        "name": "pivot_table_chart",
        "difficulty": 3
    },
    {
        "id": 1505,
        "name": "pix",
        "difficulty": 6
    },
    {
        "id": 1506,
        "name": "place",
        "difficulty": 3
    },
    {
        "id": 1507,
        "name": "plagiarism",
        "difficulty": 4
    },
    {
        "id": 1514,
        "name": "play_for_work",
        "difficulty": 7
    },
    {
        "id": 1525,
        "name": "point_of_sale",
        "difficulty": 6
    },
    {
        "id": 1526,
        "name": "policy",
        "difficulty": 5
    },
    {
        "id": 1528,
        "name": "polyline",
        "difficulty": 6
    },
    {
        "id": 1531,
        "name": "portable_wifi_off",
        "difficulty": 4
    },
    {
        "id": 1534,
        "name": "power",
        "difficulty": 3
    },
    {
        "id": 1535,
        "name": "power_input",
        "difficulty": 6
    },
    {
        "id": 1538,
        "name": "precision_manufacturing",
        "difficulty": 4
    },
    {
        "id": 1540,
        "name": "present_to_all",
        "difficulty": 3
    },
    {
        "id": 1541,
        "name": "preview",
        "difficulty": 4
    },
    {
        "id": 1546,
        "name": "priority_high",
        "difficulty": 4
    },
    {
        "id": 1547,
        "name": "privacy_tip",
        "difficulty": 3
    },
    {
        "id": 1548,
        "name": "private_connectivity",
        "difficulty": 3
    },
    {
        "id": 1549,
        "name": "production_quantity_limits",
        "difficulty": 6
    },
    {
        "id": 1550,
        "name": "propane",
        "difficulty": 5
    },
    {
        "id": 1551,
        "name": "propane_tank",
        "difficulty": 3
    },
    {
        "id": 1554,
        "name": "public",
        "difficulty": 4
    },
    {
        "id": 1555,
        "name": "public_off",
        "difficulty": 3
    },
    {
        "id": 1556,
        "name": "publish",
        "difficulty": 3
    },
    {
        "id": 1557,
        "name": "published_with_changes",
        "difficulty": 7
    },
    {
        "id": 1558,
        "name": "punch_clock",
        "difficulty": 4
    },
    {
        "id": 1559,
        "name": "push_pin",
        "difficulty": 3
    },
    {
        "id": 1563,
        "name": "query_builder",
        "difficulty": 6
    },
    {
        "id": 1564,
        "name": "query_stats",
        "difficulty": 3
    },
    {
        "id": 1567,
        "name": "queue",
        "difficulty": 3
    },
    {
        "id": 1569,
        "name": "queue_play_next",
        "difficulty": 3
    },
    {
        "id": 1570,
        "name": "quick_contacts_dialer",
        "difficulty": 3
    },
    {
        "id": 1572,
        "name": "quickreply",
        "difficulty": 4
    },
    {
        "id": 1573,
        "name": "quiz",
        "difficulty": 3
    },
    {
        "id": 1579,
        "name": "radio_button_off",
        "difficulty": 4
    },
    {
        "id": 1581,
        "name": "radio_button_unchecked",
        "difficulty": 4
    },
    {
        "id": 1584,
        "name": "ramp_left",
        "difficulty": 4
    },
    {
        "id": 1585,
        "name": "ramp_right",
        "difficulty": 4
    },
    {
        "id": 1586,
        "name": "rate_review",
        "difficulty": 3
    },
    {
        "id": 1589,
        "name": "read_more",
        "difficulty": 5
    },
    {
        "id": 1590,
        "name": "real_estate_agent",
        "difficulty": 4
    },
    {
        "id": 1591,
        "name": "rebase_edit",
        "difficulty": 5
    },
    {
        "id": 1592,
        "name": "receipt",
        "difficulty": 3
    },
    {
        "id": 1594,
        "name": "recent_actors",
        "difficulty": 5
    },
    {
        "id": 1595,
        "name": "recommend",
        "difficulty": 4
    },
    {
        "id": 1596,
        "name": "record_voice_over",
        "difficulty": 5
    },
    {
        "id": 1600,
        "name": "redeem",
        "difficulty": 4
    },
    {
        "id": 1604,
        "name": "remember_me",
        "difficulty": 3
    },
    {
        "id": 1605,
        "name": "remove",
        "difficulty": 3
    },
    {
        "id": 1609,
        "name": "remove_from_queue",
        "difficulty": 5
    },
    {
        "id": 1610,
        "name": "remove_moderator",
        "difficulty": 3
    },
    {
        "id": 1611,
        "name": "remove_red_eye",
        "difficulty": 3
    },
    {
        "id": 1612,
        "name": "remove_road",
        "difficulty": 4
    },
    {
        "id": 1615,
        "name": "repartition",
        "difficulty": 7
    },
    {
        "id": 1616,
        "name": "repeat",
        "difficulty": 3
    },
    {
        "id": 1617,
        "name": "repeat_on",
        "difficulty": 3
    },
    {
        "id": 1627,
        "name": "report",
        "difficulty": 3
    },
    {
        "id": 1628,
        "name": "report_gmailerrorred",
        "difficulty": 4
    },
    {
        "id": 1629,
        "name": "report_off",
        "difficulty": 3
    },
    {
        "id": 1630,
        "name": "report_problem",
        "difficulty": 3
    },
    {
        "id": 1631,
        "name": "request_page",
        "difficulty": 6
    },
    {
        "id": 1632,
        "name": "request_quote",
        "difficulty": 6
    },
    {
        "id": 1633,
        "name": "reset_tv",
        "difficulty": 3
    },
    {
        "id": 1634,
        "name": "restart_alt",
        "difficulty": 3
    },
    {
        "id": 1637,
        "name": "restore",
        "difficulty": 3
    },
    {
        "id": 1638,
        "name": "restore_from_trash",
        "difficulty": 3
    },
    {
        "id": 1639,
        "name": "restore_page",
        "difficulty": 4
    },
    {
        "id": 1640,
        "name": "reviews",
        "difficulty": 4
    },
    {
        "id": 1641,
        "name": "rice_bowl",
        "difficulty": 4
    },
    {
        "id": 1642,
        "name": "ring_volume",
        "difficulty": 3
    },
    {
        "id": 1645,
        "name": "roller_shades",
        "difficulty": 4
    },
    {
        "id": 1646,
        "name": "roller_shades_closed",
        "difficulty": 4
    },
    {
        "id": 1648,
        "name": "roofing",
        "difficulty": 3
    },
    {
        "id": 1650,
        "name": "room_preferences",
        "difficulty": 3
    },
    {
        "id": 1651,
        "name": "room_service",
        "difficulty": 3
    },
    {
        "id": 1654,
        "name": "rotate_left",
        "difficulty": 3
    },
    {
        "id": 1655,
        "name": "rotate_right",
        "difficulty": 3
    },
    {
        "id": 1659,
        "name": "route",
        "difficulty": 5
    },
    {
        "id": 1662,
        "name": "rss_feed",
        "difficulty": 3
    },
    {
        "id": 1664,
        "name": "rtt",
        "difficulty": 6
    },
    {
        "id": 1665,
        "name": "rule",
        "difficulty": 4
    },
    {
        "id": 1666,
        "name": "rule_folder",
        "difficulty": 3
    },
    {
        "id": 1668,
        "name": "running_with_errors",
        "difficulty": 5
    },
    {
        "id": 1669,
        "name": "rv_hookup",
        "difficulty": 4
    },
    {
        "id": 1670,
        "name": "safety_check",
        "difficulty": 5
    },
    {
        "id": 1671,
        "name": "safety_divider",
        "difficulty": 3
    },
    {
        "id": 1674,
        "name": "satellite",
        "difficulty": 7
    },
    {
        "id": 1682,
        "name": "scanner",
        "difficulty": 4
    },
    {
        "id": 1683,
        "name": "scatter_plot",
        "difficulty": 4
    },
    {
        "id": 1684,
        "name": "schedule",
        "difficulty": 3
    },
    {
        "id": 1685,
        "name": "schedule_send",
        "difficulty": 3
    },
    {
        "id": 1686,
        "name": "schema",
        "difficulty": 5
    },
    {
        "id": 1689,
        "name": "score",
        "difficulty": 5
    },
    {
        "id": 1695,
        "name": "screen_rotation_alt",
        "difficulty": 4
    },
    {
        "id": 1698,
        "name": "screenshot",
        "difficulty": 3
    },
    {
        "id": 1699,
        "name": "screenshot_monitor",
        "difficulty": 3
    },
    {
        "id": 1708,
        "name": "security_update",
        "difficulty": 5
    },
    {
        "id": 1709,
        "name": "security_update_good",
        "difficulty": 6
    },
    {
        "id": 1710,
        "name": "security_update_warning",
        "difficulty": 4
    },
    {
        "id": 1711,
        "name": "segment",
        "difficulty": 7
    },
    {
        "id": 1712,
        "name": "select_all",
        "difficulty": 5
    },
    {
        "id": 1713,
        "name": "self_improvement",
        "difficulty": 4
    },
    {
        "id": 1714,
        "name": "sell",
        "difficulty": 3
    },
    {
        "id": 1717,
        "name": "send_time_extension",
        "difficulty": 5
    },
    {
        "id": 1718,
        "name": "send_to_mobile",
        "difficulty": 3
    },
    {
        "id": 1719,
        "name": "sensor_door",
        "difficulty": 4
    },
    {
        "id": 1720,
        "name": "sensor_occupied",
        "difficulty": 7
    },
    {
        "id": 1721,
        "name": "sensor_window",
        "difficulty": 7
    },
    {
        "id": 1722,
        "name": "sensors",
        "difficulty": 3
    },
    {
        "id": 1730,
        "name": "set_meal",
        "difficulty": 3
    },
    {
        "id": 1732,
        "name": "settings_accessibility",
        "difficulty": 3
    },
    {
        "id": 1733,
        "name": "settings_applications",
        "difficulty": 4
    },
    {
        "id": 1734,
        "name": "settings_backup_restore",
        "difficulty": 4
    },
    {
        "id": 1735,
        "name": "settings_bluetooth",
        "difficulty": 3
    },
    {
        "id": 1736,
        "name": "settings_brightness",
        "difficulty": 3
    },
    {
        "id": 1737,
        "name": "settings_cell",
        "difficulty": 6
    },
    {
        "id": 1738,
        "name": "settings_display",
        "difficulty": 5
    },
    {
        "id": 1740,
        "name": "settings_input_antenna",
        "difficulty": 6
    },
    {
        "id": 1743,
        "name": "settings_input_hdmi",
        "difficulty": 5
    },
    {
        "id": 1744,
        "name": "settings_input_svideo",
        "difficulty": 6
    },
    {
        "id": 1745,
        "name": "settings_overscan",
        "difficulty": 6
    },
    {
        "id": 1750,
        "name": "settings_system_daydream",
        "difficulty": 7
    },
    {
        "id": 1755,
        "name": "share_arrival_time",
        "difficulty": 4
    },
    {
        "id": 1756,
        "name": "share_location",
        "difficulty": 4
    },
    {
        "id": 1760,
        "name": "shop",
        "difficulty": 3
    },
    {
        "id": 1761,
        "name": "shop_2",
        "difficulty": 3
    },
    {
        "id": 1762,
        "name": "shop_two",
        "difficulty": 3
    },
    {
        "id": 1769,
        "name": "shortcut",
        "difficulty": 4
    },
    {
        "id": 1770,
        "name": "show_chart",
        "difficulty": 3
    },
    {
        "id": 1774,
        "name": "shutter_speed",
        "difficulty": 4
    },
    {
        "id": 1777,
        "name": "signal_cellular_0_bar",
        "difficulty": 3
    },
    {
        "id": 1778,
        "name": "signal_cellular_4_bar",
        "difficulty": 3
    },
    {
        "id": 1780,
        "name": "signal_cellular_alt_1_bar",
        "difficulty": 6
    },
    {
        "id": 1781,
        "name": "signal_cellular_alt_2_bar",
        "difficulty": 3
    },
    {
        "id": 1782,
        "name": "signal_cellular_connected_no_internet_0_bar",
        "difficulty": 5
    },
    {
        "id": 1783,
        "name": "signal_cellular_connected_no_internet_4_bar",
        "difficulty": 4
    },
    {
        "id": 1784,
        "name": "signal_cellular_no_sim",
        "difficulty": 3
    },
    {
        "id": 1785,
        "name": "signal_cellular_nodata",
        "difficulty": 4
    },
    {
        "id": 1786,
        "name": "signal_cellular_null",
        "difficulty": 5
    },
    {
        "id": 1796,
        "name": "signal_wifi_statusbar_null",
        "difficulty": 4
    },
    {
        "id": 1804,
        "name": "skip_next",
        "difficulty": 3
    },
    {
        "id": 1805,
        "name": "skip_previous",
        "difficulty": 3
    },
    {
        "id": 1807,
        "name": "slideshow",
        "difficulty": 4
    },
    {
        "id": 1808,
        "name": "slow_motion_video",
        "difficulty": 4
    },
    {
        "id": 1809,
        "name": "smart_button",
        "difficulty": 5
    },
    {
        "id": 1810,
        "name": "smart_display",
        "difficulty": 5
    },
    {
        "id": 1811,
        "name": "smart_screen",
        "difficulty": 5
    },
    {
        "id": 1812,
        "name": "smart_toy",
        "difficulty": 5
    },
    {
        "id": 1822,
        "name": "snowing",
        "difficulty": 4
    },
    {
        "id": 1827,
        "name": "solar_power",
        "difficulty": 3
    },
    {
        "id": 1828,
        "name": "sort",
        "difficulty": 4
    },
    {
        "id": 1832,
        "name": "source",
        "difficulty": 6
    },
    {
        "id": 1837,
        "name": "spa",
        "difficulty": 5
    },
    {
        "id": 1838,
        "name": "space_bar",
        "difficulty": 3
    },
    {
        "id": 1839,
        "name": "space_dashboard",
        "difficulty": 4
    },
    {
        "id": 1840,
        "name": "spatial_audio",
        "difficulty": 4
    },
    {
        "id": 1841,
        "name": "spatial_audio_off",
        "difficulty": 5
    },
    {
        "id": 1842,
        "name": "spatial_tracking",
        "difficulty": 6
    },
    {
        "id": 1843,
        "name": "speaker",
        "difficulty": 3
    },
    {
        "id": 1844,
        "name": "speaker_group",
        "difficulty": 3
    },
    {
        "id": 1845,
        "name": "speaker_notes",
        "difficulty": 4
    },
    {
        "id": 1846,
        "name": "speaker_notes_off",
        "difficulty": 3
    },
    {
        "id": 1847,
        "name": "speaker_phone",
        "difficulty": 4
    },
    {
        "id": 1848,
        "name": "speed",
        "difficulty": 3
    },
    {
        "id": 1850,
        "name": "splitscreen",
        "difficulty": 3
    },
    {
        "id": 1851,
        "name": "spoke",
        "difficulty": 7
    },
    {
        "id": 1852,
        "name": "sports",
        "difficulty": 5
    },
    {
        "id": 1853,
        "name": "sports_bar",
        "difficulty": 4
    },
    {
        "id": 1857,
        "name": "sports_esports",
        "difficulty": 3
    },
    {
        "id": 1861,
        "name": "sports_handball",
        "difficulty": 3
    },
    {
        "id": 1862,
        "name": "sports_hockey",
        "difficulty": 3
    },
    {
        "id": 1863,
        "name": "sports_kabaddi",
        "difficulty": 3
    },
    {
        "id": 1865,
        "name": "sports_mma",
        "difficulty": 3
    },
    {
        "id": 1866,
        "name": "sports_motorsports",
        "difficulty": 3
    },
    {
        "id": 1867,
        "name": "sports_rugby",
        "difficulty": 3
    },
    {
        "id": 1868,
        "name": "sports_score",
        "difficulty": 5
    },
    {
        "id": 1873,
        "name": "square_foot",
        "difficulty": 5
    },
    {
        "id": 1874,
        "name": "ssid_chart",
        "difficulty": 4
    },
    {
        "id": 1881,
        "name": "star_border_purple500",
        "difficulty": 3
    },
    {
        "id": 1884,
        "name": "star_purple500",
        "difficulty": 3
    },
    {
        "id": 1886,
        "name": "stars",
        "difficulty": 3
    },
    {
        "id": 1887,
        "name": "start",
        "difficulty": 3
    },
    {
        "id": 1888,
        "name": "stay_current_landscape",
        "difficulty": 3
    },
    {
        "id": 1889,
        "name": "stay_current_portrait",
        "difficulty": 3
    },
    {
        "id": 1890,
        "name": "stay_primary_landscape",
        "difficulty": 3
    },
    {
        "id": 1891,
        "name": "stay_primary_portrait",
        "difficulty": 3
    },
    {
        "id": 1893,
        "name": "stop",
        "difficulty": 5
    },
    {
        "id": 1894,
        "name": "stop_circle",
        "difficulty": 3
    },
    {
        "id": 1896,
        "name": "storage",
        "difficulty": 3
    },
    {
        "id": 1898,
        "name": "store_mall_directory",
        "difficulty": 4
    },
    {
        "id": 1900,
        "name": "storm",
        "difficulty": 3
    },
    {
        "id": 1901,
        "name": "straight",
        "difficulty": 3
    },
    {
        "id": 1902,
        "name": "straighten",
        "difficulty": 4
    },
    {
        "id": 1904,
        "name": "streetview",
        "difficulty": 6
    },
    {
        "id": 1905,
        "name": "strikethrough_s",
        "difficulty": 3
    },
    {
        "id": 1907,
        "name": "style",
        "difficulty": 7
    },
    {
        "id": 1908,
        "name": "subdirectory_arrow_left",
        "difficulty": 3
    },
    {
        "id": 1909,
        "name": "subdirectory_arrow_right",
        "difficulty": 3
    },
    {
        "id": 1910,
        "name": "subject",
        "difficulty": 5
    },
    {
        "id": 1911,
        "name": "subscript",
        "difficulty": 3
    },
    {
        "id": 1912,
        "name": "subscriptions",
        "difficulty": 3
    },
    {
        "id": 1916,
        "name": "summarize",
        "difficulty": 4
    },
    {
        "id": 1919,
        "name": "superscript",
        "difficulty": 3
    },
    {
        "id": 1920,
        "name": "supervised_user_circle",
        "difficulty": 3
    },
    {
        "id": 1921,
        "name": "supervisor_account",
        "difficulty": 4
    },
    {
        "id": 1922,
        "name": "support",
        "difficulty": 6
    },
    {
        "id": 1925,
        "name": "surround_sound",
        "difficulty": 6
    },
    {
        "id": 1926,
        "name": "swap_calls",
        "difficulty": 6
    },
    {
        "id": 1927,
        "name": "swap_horiz",
        "difficulty": 3
    },
    {
        "id": 1928,
        "name": "swap_horizontal_circle",
        "difficulty": 3
    },
    {
        "id": 1929,
        "name": "swap_vert",
        "difficulty": 3
    },
    {
        "id": 1930,
        "name": "swap_vert_circle",
        "difficulty": 3
    },
    {
        "id": 1931,
        "name": "swap_vertical_circle",
        "difficulty": 3
    },
    {
        "id": 1932,
        "name": "swipe",
        "difficulty": 3
    },
    {
        "id": 1934,
        "name": "swipe_down_alt",
        "difficulty": 3
    },
    {
        "id": 1936,
        "name": "swipe_left_alt",
        "difficulty": 3
    },
    {
        "id": 1938,
        "name": "swipe_right_alt",
        "difficulty": 3
    },
    {
        "id": 1940,
        "name": "swipe_up_alt",
        "difficulty": 3
    },
    {
        "id": 1941,
        "name": "swipe_vertical",
        "difficulty": 3
    },
    {
        "id": 1943,
        "name": "switch_access_shortcut_add",
        "difficulty": 6
    },
    {
        "id": 1944,
        "name": "switch_account",
        "difficulty": 5
    },
    {
        "id": 1945,
        "name": "switch_camera",
        "difficulty": 3
    },
    {
        "id": 1946,
        "name": "switch_left",
        "difficulty": 5
    },
    {
        "id": 1947,
        "name": "switch_right",
        "difficulty": 5
    },
    {
        "id": 1948,
        "name": "switch_video",
        "difficulty": 3
    },
    {
        "id": 1950,
        "name": "sync",
        "difficulty": 3
    },
    {
        "id": 1951,
        "name": "sync_alt",
        "difficulty": 5
    },
    {
        "id": 1955,
        "name": "system_security_update",
        "difficulty": 6
    },
    {
        "id": 1956,
        "name": "system_security_update_good",
        "difficulty": 4
    },
    {
        "id": 1957,
        "name": "system_security_update_warning",
        "difficulty": 3
    },
    {
        "id": 1958,
        "name": "system_update",
        "difficulty": 4
    },
    {
        "id": 1959,
        "name": "system_update_alt",
        "difficulty": 5
    },
    {
        "id": 1960,
        "name": "system_update_tv",
        "difficulty": 5
    },
    {
        "id": 1961,
        "name": "tab",
        "difficulty": 3
    },
    {
        "id": 1962,
        "name": "tab_unselected",
        "difficulty": 5
    },
    {
        "id": 1964,
        "name": "table_chart",
        "difficulty": 4
    },
    {
        "id": 1966,
        "name": "table_rows",
        "difficulty": 5
    },
    {
        "id": 1967,
        "name": "table_view",
        "difficulty": 5
    },
    {
        "id": 1968,
        "name": "tablet",
        "difficulty": 3
    },
    {
        "id": 1970,
        "name": "tablet_mac",
        "difficulty": 3
    },
    {
        "id": 1971,
        "name": "tag",
        "difficulty": 3
    },
    {
        "id": 1973,
        "name": "takeout_dining",
        "difficulty": 4
    },
    {
        "id": 1974,
        "name": "tap_and_play",
        "difficulty": 6
    },
    {
        "id": 1975,
        "name": "tapas",
        "difficulty": 3
    },
    {
        "id": 1985,
        "name": "text_fields",
        "difficulty": 4
    },
    {
        "id": 1986,
        "name": "text_format",
        "difficulty": 3
    },
    {
        "id": 1989,
        "name": "text_rotate_vertical",
        "difficulty": 3
    },
    {
        "id": 1993,
        "name": "text_rotation_none",
        "difficulty": 3
    },
    {
        "id": 1994,
        "name": "text_snippet",
        "difficulty": 4
    },
    {
        "id": 1996,
        "name": "texture",
        "difficulty": 6
    },
    {
        "id": 1998,
        "name": "theaters",
        "difficulty": 5
    },
    {
        "id": 2011,
        "name": "timelapse",
        "difficulty": 4
    },
    {
        "id": 2012,
        "name": "timeline",
        "difficulty": 6
    },
    {
        "id": 2019,
        "name": "tips_and_updates",
        "difficulty": 4
    },
    {
        "id": 2020,
        "name": "tire_repair",
        "difficulty": 3
    },
    {
        "id": 2022,
        "name": "toc",
        "difficulty": 3
    },
    {
        "id": 2023,
        "name": "today",
        "difficulty": 3
    },
    {
        "id": 2028,
        "name": "tonality",
        "difficulty": 7
    },
    {
        "id": 2030,
        "name": "tornado",
        "difficulty": 5
    },
    {
        "id": 2031,
        "name": "touch_app",
        "difficulty": 4
    },
    {
        "id": 2032,
        "name": "tour",
        "difficulty": 5
    },
    {
        "id": 2033,
        "name": "toys",
        "difficulty": 3
    },
    {
        "id": 2034,
        "name": "track_changes",
        "difficulty": 7
    },
    {
        "id": 2038,
        "name": "transcribe",
        "difficulty": 4
    },
    {
        "id": 2039,
        "name": "transfer_within_a_station",
        "difficulty": 5
    },
    {
        "id": 2040,
        "name": "transform",
        "difficulty": 5
    },
    {
        "id": 2046,
        "name": "trending_flat",
        "difficulty": 4
    },
    {
        "id": 2047,
        "name": "trending_neutral",
        "difficulty": 4
    },
    {
        "id": 2049,
        "name": "trip_origin",
        "difficulty": 7
    },
    {
        "id": 2051,
        "name": "troubleshoot",
        "difficulty": 3
    },
    {
        "id": 2054,
        "name": "tty",
        "difficulty": 4
    },
    {
        "id": 2055,
        "name": "tune",
        "difficulty": 4
    },
    {
        "id": 2056,
        "name": "tungsten",
        "difficulty": 6
    },
    {
        "id": 2063,
        "name": "turned_in",
        "difficulty": 7
    },
    {
        "id": 2064,
        "name": "turned_in_not",
        "difficulty": 7
    },
    {
        "id": 2072,
        "name": "unarchive",
        "difficulty": 3
    },
    {
        "id": 2074,
        "name": "unfold_less",
        "difficulty": 5
    },
    {
        "id": 2075,
        "name": "unfold_less_double",
        "difficulty": 5
    },
    {
        "id": 2076,
        "name": "unfold_more",
        "difficulty": 5
    },
    {
        "id": 2077,
        "name": "unfold_more_double",
        "difficulty": 5
    },
    {
        "id": 2078,
        "name": "unpublished",
        "difficulty": 5
    },
    {
        "id": 2079,
        "name": "unsubscribe",
        "difficulty": 4
    },
    {
        "id": 2081,
        "name": "update",
        "difficulty": 3
    },
    {
        "id": 2082,
        "name": "update_disabled",
        "difficulty": 3
    },
    {
        "id": 2083,
        "name": "upgrade",
        "difficulty": 3
    },
    {
        "id": 2096,
        "name": "vertical_distribute",
        "difficulty": 4
    },
    {
        "id": 2097,
        "name": "vertical_shades",
        "difficulty": 3
    },
    {
        "id": 2098,
        "name": "vertical_shades_closed",
        "difficulty": 4
    },
    {
        "id": 2099,
        "name": "vertical_split",
        "difficulty": 3
    },
    {
        "id": 2100,
        "name": "vibration",
        "difficulty": 5
    },
    {
        "id": 2102,
        "name": "video_camera_back",
        "difficulty": 4
    },
    {
        "id": 2103,
        "name": "video_camera_front",
        "difficulty": 4
    },
    {
        "id": 2104,
        "name": "video_chat",
        "difficulty": 3
    },
    {
        "id": 2105,
        "name": "video_collection",
        "difficulty": 3
    },
    {
        "id": 2107,
        "name": "video_label",
        "difficulty": 5
    },
    {
        "id": 2110,
        "name": "video_stable",
        "difficulty": 3
    },
    {
        "id": 2115,
        "name": "view_agenda",
        "difficulty": 5
    },
    {
        "id": 2116,
        "name": "view_array",
        "difficulty": 4
    },
    {
        "id": 2117,
        "name": "view_carousel",
        "difficulty": 3
    },
    {
        "id": 2118,
        "name": "view_column",
        "difficulty": 3
    },
    {
        "id": 2119,
        "name": "view_comfortable",
        "difficulty": 6
    },
    {
        "id": 2120,
        "name": "view_comfy",
        "difficulty": 6
    },
    {
        "id": 2121,
        "name": "view_comfy_alt",
        "difficulty": 7
    },
    {
        "id": 2122,
        "name": "view_compact",
        "difficulty": 4
    },
    {
        "id": 2123,
        "name": "view_compact_alt",
        "difficulty": 4
    },
    {
        "id": 2124,
        "name": "view_cozy",
        "difficulty": 6
    },
    {
        "id": 2125,
        "name": "view_day",
        "difficulty": 6
    },
    {
        "id": 2126,
        "name": "view_headline",
        "difficulty": 7
    },
    {
        "id": 2130,
        "name": "view_module",
        "difficulty": 4
    },
    {
        "id": 2131,
        "name": "view_quilt",
        "difficulty": 5
    },
    {
        "id": 2132,
        "name": "view_sidebar",
        "difficulty": 3
    },
    {
        "id": 2133,
        "name": "view_stream",
        "difficulty": 6
    },
    {
        "id": 2134,
        "name": "view_timeline",
        "difficulty": 6
    },
    {
        "id": 2135,
        "name": "view_week",
        "difficulty": 5
    },
    {
        "id": 2136,
        "name": "vignette",
        "difficulty": 5
    },
    {
        "id": 2137,
        "name": "villa",
        "difficulty": 5
    },
    {
        "id": 2138,
        "name": "visibility",
        "difficulty": 3
    },
    {
        "id": 2141,
        "name": "voice_over_off",
        "difficulty": 4
    },
    {
        "id": 2149,
        "name": "volunteer_activism",
        "difficulty": 3
    },
    {
        "id": 2150,
        "name": "vpn_key",
        "difficulty": 3
    },
    {
        "id": 2151,
        "name": "vpn_key_off",
        "difficulty": 3
    },
    {
        "id": 2152,
        "name": "vpn_lock",
        "difficulty": 3
    },
    {
        "id": 2153,
        "name": "vrpano",
        "difficulty": 3
    },
    {
        "id": 2154,
        "name": "wallet",
        "difficulty": 3
    },
    {
        "id": 2156,
        "name": "wallet_membership",
        "difficulty": 4
    },
    {
        "id": 2157,
        "name": "wallet_travel",
        "difficulty": 3
    },
    {
        "id": 2158,
        "name": "wallpaper",
        "difficulty": 3
    },
    {
        "id": 2164,
        "name": "watch_later",
        "difficulty": 5
    },
    {
        "id": 2167,
        "name": "water_damage",
        "difficulty": 3
    },
    {
        "id": 2172,
        "name": "wb_auto",
        "difficulty": 5
    },
    {
        "id": 2174,
        "name": "wb_incandescent",
        "difficulty": 5
    },
    {
        "id": 2175,
        "name": "wb_iridescent",
        "difficulty": 6
    },
    {
        "id": 2176,
        "name": "wb_shade",
        "difficulty": 6
    },
    {
        "id": 2181,
        "name": "web",
        "difficulty": 4
    },
    {
        "id": 2182,
        "name": "web_asset",
        "difficulty": 6
    },
    {
        "id": 2183,
        "name": "web_asset_off",
        "difficulty": 5
    },
    {
        "id": 2184,
        "name": "web_stories",
        "difficulty": 5
    },
    {
        "id": 2185,
        "name": "webhook",
        "difficulty": 6
    },
    {
        "id": 2187,
        "name": "weekend",
        "difficulty": 6
    },
    {
        "id": 2189,
        "name": "whatshot",
        "difficulty": 4
    },
    {
        "id": 2191,
        "name": "where_to_vote",
        "difficulty": 5
    },
    {
        "id": 2192,
        "name": "widgets",
        "difficulty": 4
    },
    {
        "id": 2193,
        "name": "width_full",
        "difficulty": 4
    },
    {
        "id": 2194,
        "name": "width_normal",
        "difficulty": 5
    },
    {
        "id": 2195,
        "name": "width_wide",
        "difficulty": 4
    },
    {
        "id": 2206,
        "name": "wifi_protected_setup",
        "difficulty": 7
    },
    {
        "id": 2207,
        "name": "wifi_tethering",
        "difficulty": 5
    },
    {
        "id": 2208,
        "name": "wifi_tethering_error",
        "difficulty": 5
    },
    {
        "id": 2209,
        "name": "wifi_tethering_error_rounded",
        "difficulty": 5
    },
    {
        "id": 2210,
        "name": "wifi_tethering_off",
        "difficulty": 5
    },
    {
        "id": 2212,
        "name": "window",
        "difficulty": 3
    },
    {
        "id": 2213,
        "name": "wine_bar",
        "difficulty": 3
    },
    {
        "id": 2216,
        "name": "woo_commerce",
        "difficulty": 5
    },
    {
        "id": 2218,
        "name": "work",
        "difficulty": 3
    },
    {
        "id": 2219,
        "name": "work_history",
        "difficulty": 3
    },
    {
        "id": 2220,
        "name": "work_off",
        "difficulty": 3
    },
    {
        "id": 2221,
        "name": "work_outline",
        "difficulty": 3
    },
    {
        "id": 2222,
        "name": "workspace_premium",
        "difficulty": 5
    },
    {
        "id": 2225,
        "name": "workspaces_outline",
        "difficulty": 7
    },
    {
        "id": 2229,
        "name": "yard",
        "difficulty": 4
    },
    {
        "id": 2230,
        "name": "youtube_searched_for",
        "difficulty": 3
    },
    {
        "id": 2232,
        "name": "zoom_in_map",
        "difficulty": 3
    },
    {
        "id": 2234,
        "name": "zoom_out_map",
        "difficulty": 3
    }
];

const hardIconList = [
    {
        "id": 32,
        "name": "3p",
        "difficulty": 9
    },
    {
        "id": 58,
        "name": "ac_unit",
        "difficulty": 6
    },
    {
        "id": 67,
        "name": "account_balance",
        "difficulty": 6
    },
    {
        "id": 68,
        "name": "account_balance_wallet",
        "difficulty": 7
    },
    {
        "id": 71,
        "name": "account_tree",
        "difficulty": 6
    },
    {
        "id": 73,
        "name": "adb",
        "difficulty": 8
    },
    {
        "id": 104,
        "name": "adjust",
        "difficulty": 8
    },
    {
        "id": 105,
        "name": "admin_panel_settings",
        "difficulty": 6
    },
    {
        "id": 118,
        "name": "airline_stops",
        "difficulty": 7
    },
    {
        "id": 139,
        "name": "all_inclusive",
        "difficulty": 7
    },
    {
        "id": 140,
        "name": "all_out",
        "difficulty": 7
    },
    {
        "id": 143,
        "name": "amp_stories",
        "difficulty": 8
    },
    {
        "id": 149,
        "name": "aod",
        "difficulty": 7
    },
    {
        "id": 151,
        "name": "api",
        "difficulty": 9
    },
    {
        "id": 157,
        "name": "approval",
        "difficulty": 8
    },
    {
        "id": 196,
        "name": "assistant_photo",
        "difficulty": 9
    },
    {
        "id": 197,
        "name": "assured_workload",
        "difficulty": 8
    },
    {
        "id": 204,
        "name": "attribution",
        "difficulty": 6
    },
    {
        "id": 207,
        "name": "auto_awesome",
        "difficulty": 7
    },
    {
        "id": 208,
        "name": "auto_awesome_mosaic",
        "difficulty": 6
    },
    {
        "id": 209,
        "name": "auto_awesome_motion",
        "difficulty": 7
    },
    {
        "id": 290,
        "name": "border_color",
        "difficulty": 6
    },
    {
        "id": 301,
        "name": "breakfast_dining",
        "difficulty": 6
    },
    {
        "id": 302,
        "name": "brightness_1",
        "difficulty": 7
    },
    {
        "id": 303,
        "name": "brightness_2",
        "difficulty": 6
    },
    {
        "id": 304,
        "name": "brightness_3",
        "difficulty": 6
    },
    {
        "id": 316,
        "name": "browse_gallery",
        "difficulty": 7
    },
    {
        "id": 317,
        "name": "browser_not_supported",
        "difficulty": 6
    },
    {
        "id": 337,
        "name": "calendar_view_day",
        "difficulty": 7
    },
    {
        "id": 338,
        "name": "calendar_view_month",
        "difficulty": 6
    },
    {
        "id": 339,
        "name": "calendar_view_week",
        "difficulty": 6
    },
    {
        "id": 342,
        "name": "call_made",
        "difficulty": 8
    },
    {
        "id": 343,
        "name": "call_merge",
        "difficulty": 7
    },
    {
        "id": 344,
        "name": "call_missed",
        "difficulty": 8
    },
    {
        "id": 345,
        "name": "call_missed_outgoing",
        "difficulty": 8
    },
    {
        "id": 346,
        "name": "call_received",
        "difficulty": 8
    },
    {
        "id": 347,
        "name": "call_split",
        "difficulty": 7
    },
    {
        "id": 348,
        "name": "call_to_action",
        "difficulty": 9
    },
    {
        "id": 387,
        "name": "change_history",
        "difficulty": 9
    },
    {
        "id": 410,
        "name": "cleaning_services",
        "difficulty": 6
    },
    {
        "id": 412,
        "name": "clear_all",
        "difficulty": 7
    },
    {
        "id": 435,
        "name": "color_lens",
        "difficulty": 7
    },
    {
        "id": 436,
        "name": "colorize",
        "difficulty": 6
    },
    {
        "id": 440,
        "name": "commit",
        "difficulty": 7
    },
    {
        "id": 448,
        "name": "confirmation_num",
        "difficulty": 9
    },
    {
        "id": 449,
        "name": "confirmation_number",
        "difficulty": 9
    },
    {
        "id": 468,
        "name": "control_camera",
        "difficulty": 7
    },
    {
        "id": 469,
        "name": "control_point",
        "difficulty": 8
    },
    {
        "id": 470,
        "name": "control_point_duplicate",
        "difficulty": 7
    },
    {
        "id": 494,
        "name": "crop_original",
        "difficulty": 7
    },
    {
        "id": 519,
        "name": "data_saver_off",
        "difficulty": 7
    },
    {
        "id": 520,
        "name": "data_saver_on",
        "difficulty": 6
    },
    {
        "id": 523,
        "name": "dataset",
        "difficulty": 7
    },
    {
        "id": 528,
        "name": "dehaze",
        "difficulty": 8
    },
    {
        "id": 545,
        "name": "details",
        "difficulty": 9
    },
    {
        "id": 549,
        "name": "device_hub",
        "difficulty": 6
    },
    {
        "id": 606,
        "name": "domain",
        "difficulty": 7
    },
    {
        "id": 609,
        "name": "domain_verification",
        "difficulty": 6
    },
    {
        "id": 614,
        "name": "donut_small",
        "difficulty": 7
    },
    {
        "id": 627,
        "name": "drag_indicator",
        "difficulty": 6
    },
    {
        "id": 637,
        "name": "duo",
        "difficulty": 7
    },
    {
        "id": 638,
        "name": "dvr",
        "difficulty": 8
    },
    {
        "id": 640,
        "name": "dynamic_form",
        "difficulty": 7
    },
    {
        "id": 661,
        "name": "eject",
        "difficulty": 6
    },
    {
        "id": 676,
        "name": "emergency_share",
        "difficulty": 7
    },
    {
        "id": 678,
        "name": "emoji_events",
        "difficulty": 8
    },
    {
        "id": 682,
        "name": "emoji_objects",
        "difficulty": 6
    },
    {
        "id": 694,
        "name": "escalator_warning",
        "difficulty": 9
    },
    {
        "id": 701,
        "name": "event_note",
        "difficulty": 6
    },
    {
        "id": 741,
        "name": "featured_play_list",
        "difficulty": 6
    },
    {
        "id": 742,
        "name": "featured_video",
        "difficulty": 6
    },
    {
        "id": 743,
        "name": "feed",
        "difficulty": 9
    },
    {
        "id": 749,
        "name": "fiber_manual_record",
        "difficulty": 9
    },
    {
        "id": 752,
        "name": "fiber_smart_record",
        "difficulty": 8
    },
    {
        "id": 776,
        "name": "filter_drama",
        "difficulty": 8
    },
    {
        "id": 777,
        "name": "filter_frames",
        "difficulty": 7
    },
    {
        "id": 778,
        "name": "filter_hdr",
        "difficulty": 7
    },
    {
        "id": 783,
        "name": "filter_tilt_shift",
        "difficulty": 6
    },
    {
        "id": 784,
        "name": "filter_vintage",
        "difficulty": 7
    },
    {
        "id": 789,
        "name": "fire_hydrant",
        "difficulty": 7
    },
    {
        "id": 799,
        "name": "flaky",
        "difficulty": 8
    },
    {
        "id": 814,
        "name": "flip_to_back",
        "difficulty": 6
    },
    {
        "id": 815,
        "name": "flip_to_front",
        "difficulty": 6
    },
    {
        "id": 817,
        "name": "flourescent",
        "difficulty": 6
    },
    {
        "id": 818,
        "name": "flourescent",
        "difficulty": 6
    },
    {
        "id": 819,
        "name": "fluorescent",
        "difficulty": 6
    },
    {
        "id": 820,
        "name": "flutter_dash",
        "difficulty": 9
    },
    {
        "id": 821,
        "name": "fmd_bad",
        "difficulty": 6
    },
    {
        "id": 822,
        "name": "fmd_good",
        "difficulty": 9
    },
    {
        "id": 895,
        "name": "gite",
        "difficulty": 7
    },
    {
        "id": 898,
        "name": "gpp_bad",
        "difficulty": 8
    },
    {
        "id": 899,
        "name": "gpp_good",
        "difficulty": 7
    },
    {
        "id": 900,
        "name": "gpp_maybe",
        "difficulty": 8
    },
    {
        "id": 902,
        "name": "gps_not_fixed",
        "difficulty": 6
    },
    {
        "id": 920,
        "name": "group_work",
        "difficulty": 7
    },
    {
        "id": 939,
        "name": "hdr_strong",
        "difficulty": 9
    },
    {
        "id": 940,
        "name": "hdr_weak",
        "difficulty": 9
    },
    {
        "id": 962,
        "name": "highlight_alt",
        "difficulty": 8
    },
    {
        "id": 975,
        "name": "home_max",
        "difficulty": 8
    },
    {
        "id": 976,
        "name": "home_mini",
        "difficulty": 8
    },
    {
        "id": 993,
        "name": "how_to_reg",
        "difficulty": 6
    },
    {
        "id": 1007,
        "name": "import_contacts",
        "difficulty": 7
    },
    {
        "id": 1021,
        "name": "insert_invitation",
        "difficulty": 6
    },
    {
        "id": 1025,
        "name": "insights",
        "difficulty": 6
    },
    {
        "id": 1028,
        "name": "integration_instructions",
        "difficulty": 8
    },
    {
        "id": 1029,
        "name": "interests",
        "difficulty": 6
    },
    {
        "id": 1058,
        "name": "keyboard_control",
        "difficulty": 7
    },
    {
        "id": 1059,
        "name": "keyboard_control_key",
        "difficulty": 7
    },
    {
        "id": 1080,
        "name": "landslide",
        "difficulty": 6
    },
    {
        "id": 1091,
        "name": "leak_add",
        "difficulty": 8
    },
    {
        "id": 1092,
        "name": "leak_remove",
        "difficulty": 7
    },
    {
        "id": 1094,
        "name": "legend_toggle",
        "difficulty": 6
    },
    {
        "id": 1095,
        "name": "lens",
        "difficulty": 7
    },
    {
        "id": 1109,
        "name": "linear_scale",
        "difficulty": 6
    },
    {
        "id": 1119,
        "name": "local_activity",
        "difficulty": 6
    },
    {
        "id": 1122,
        "name": "local_attraction",
        "difficulty": 6
    },
    {
        "id": 1150,
        "name": "local_see",
        "difficulty": 7
    },
    {
        "id": 1169,
        "name": "looks",
        "difficulty": 8
    },
    {
        "id": 1185,
        "name": "macro_off",
        "difficulty": 6
    },
    {
        "id": 1199,
        "name": "maps_ugc",
        "difficulty": 7
    },
    {
        "id": 1200,
        "name": "margin",
        "difficulty": 6
    },
    {
        "id": 1210,
        "name": "maximize",
        "difficulty": 9
    },
    {
        "id": 1213,
        "name": "mediation",
        "difficulty": 6
    },
    {
        "id": 1218,
        "name": "meeting_room",
        "difficulty": 6
    },
    {
        "id": 1237,
        "name": "miscellaneous_services",
        "difficulty": 7
    },
    {
        "id": 1244,
        "name": "mode",
        "difficulty": 8
    },
    {
        "id": 1251,
        "name": "mode_standby",
        "difficulty": 8
    },
    {
        "id": 1252,
        "name": "model_training",
        "difficulty": 6
    },
    {
        "id": 1269,
        "name": "motion_photos_auto",
        "difficulty": 6
    },
    {
        "id": 1270,
        "name": "motion_photos_off",
        "difficulty": 7
    },
    {
        "id": 1271,
        "name": "motion_photos_on",
        "difficulty": 6
    },
    {
        "id": 1283,
        "name": "moving",
        "difficulty": 8
    },
    {
        "id": 1287,
        "name": "multitrack_audio",
        "difficulty": 6
    },
    {
        "id": 1293,
        "name": "my_library_books",
        "difficulty": 6
    },
    {
        "id": 1296,
        "name": "nat",
        "difficulty": 7
    },
    {
        "id": 1297,
        "name": "nature",
        "difficulty": 8
    },
    {
        "id": 1302,
        "name": "near_me",
        "difficulty": 6
    },
    {
        "id": 1306,
        "name": "nest_cam_wired_stand",
        "difficulty": 7
    },
    {
        "id": 1307,
        "name": "network_cell",
        "difficulty": 6
    },
    {
        "id": 1318,
        "name": "next_plan",
        "difficulty": 6
    },
    {
        "id": 1319,
        "name": "next_week",
        "difficulty": 6
    },
    {
        "id": 1320,
        "name": "nfc",
        "difficulty": 7
    },
    {
        "id": 1344,
        "name": "noise_aware",
        "difficulty": 7
    },
    {
        "id": 1345,
        "name": "noise_control_off",
        "difficulty": 9
    },
    {
        "id": 1367,
        "name": "now_widgets",
        "difficulty": 7
    },
    {
        "id": 1370,
        "name": "offline_pin",
        "difficulty": 8
    },
    {
        "id": 1375,
        "name": "online_prediction",
        "difficulty": 7
    },
    {
        "id": 1381,
        "name": "open_with",
        "difficulty": 7
    },
    {
        "id": 1391,
        "name": "padding",
        "difficulty": 6
    },
    {
        "id": 1392,
        "name": "pages",
        "difficulty": 8
    },
    {
        "id": 1393,
        "name": "pageview",
        "difficulty": 6
    },
    {
        "id": 1400,
        "name": "panorama_fish_eye",
        "difficulty": 8
    },
    {
        "id": 1401,
        "name": "panorama_fisheye",
        "difficulty": 8
    },
    {
        "id": 1412,
        "name": "party_mode",
        "difficulty": 6
    },
    {
        "id": 1457,
        "name": "personal_video",
        "difficulty": 6
    },
    {
        "id": 1501,
        "name": "pin_end",
        "difficulty": 7
    },
    {
        "id": 1502,
        "name": "pin_invoke",
        "difficulty": 7
    },
    {
        "id": 1505,
        "name": "pix",
        "difficulty": 6
    },
    {
        "id": 1514,
        "name": "play_for_work",
        "difficulty": 7
    },
    {
        "id": 1525,
        "name": "point_of_sale",
        "difficulty": 6
    },
    {
        "id": 1528,
        "name": "polyline",
        "difficulty": 6
    },
    {
        "id": 1529,
        "name": "polymer",
        "difficulty": 8
    },
    {
        "id": 1535,
        "name": "power_input",
        "difficulty": 6
    },
    {
        "id": 1549,
        "name": "production_quantity_limits",
        "difficulty": 6
    },
    {
        "id": 1557,
        "name": "published_with_changes",
        "difficulty": 7
    },
    {
        "id": 1563,
        "name": "query_builder",
        "difficulty": 6
    },
    {
        "id": 1614,
        "name": "reorder",
        "difficulty": 8
    },
    {
        "id": 1615,
        "name": "repartition",
        "difficulty": 7
    },
    {
        "id": 1631,
        "name": "request_page",
        "difficulty": 6
    },
    {
        "id": 1632,
        "name": "request_quote",
        "difficulty": 6
    },
    {
        "id": 1649,
        "name": "room",
        "difficulty": 8
    },
    {
        "id": 1664,
        "name": "rtt",
        "difficulty": 6
    },
    {
        "id": 1674,
        "name": "satellite",
        "difficulty": 7
    },
    {
        "id": 1709,
        "name": "security_update_good",
        "difficulty": 6
    },
    {
        "id": 1711,
        "name": "segment",
        "difficulty": 7
    },
    {
        "id": 1720,
        "name": "sensor_occupied",
        "difficulty": 7
    },
    {
        "id": 1721,
        "name": "sensor_window",
        "difficulty": 7
    },
    {
        "id": 1737,
        "name": "settings_cell",
        "difficulty": 6
    },
    {
        "id": 1739,
        "name": "settings_ethernet",
        "difficulty": 8
    },
    {
        "id": 1740,
        "name": "settings_input_antenna",
        "difficulty": 6
    },
    {
        "id": 1741,
        "name": "settings_input_component",
        "difficulty": 9
    },
    {
        "id": 1742,
        "name": "settings_input_composite",
        "difficulty": 9
    },
    {
        "id": 1744,
        "name": "settings_input_svideo",
        "difficulty": 6
    },
    {
        "id": 1745,
        "name": "settings_overscan",
        "difficulty": 6
    },
    {
        "id": 1750,
        "name": "settings_system_daydream",
        "difficulty": 7
    },
    {
        "id": 1780,
        "name": "signal_cellular_alt_1_bar",
        "difficulty": 6
    },
    {
        "id": 1832,
        "name": "source",
        "difficulty": 6
    },
    {
        "id": 1842,
        "name": "spatial_tracking",
        "difficulty": 6
    },
    {
        "id": 1851,
        "name": "spoke",
        "difficulty": 7
    },
    {
        "id": 1903,
        "name": "stream",
        "difficulty": 9
    },
    {
        "id": 1904,
        "name": "streetview",
        "difficulty": 6
    },
    {
        "id": 1907,
        "name": "style",
        "difficulty": 7
    },
    {
        "id": 1922,
        "name": "support",
        "difficulty": 6
    },
    {
        "id": 1925,
        "name": "surround_sound",
        "difficulty": 6
    },
    {
        "id": 1926,
        "name": "swap_calls",
        "difficulty": 6
    },
    {
        "id": 1942,
        "name": "switch_access_shortcut",
        "difficulty": 8
    },
    {
        "id": 1943,
        "name": "switch_access_shortcut_add",
        "difficulty": 6
    },
    {
        "id": 1955,
        "name": "system_security_update",
        "difficulty": 6
    },
    {
        "id": 1974,
        "name": "tap_and_play",
        "difficulty": 6
    },
    {
        "id": 1996,
        "name": "texture",
        "difficulty": 6
    },
    {
        "id": 2010,
        "name": "time_to_leave",
        "difficulty": 8
    },
    {
        "id": 2012,
        "name": "timeline",
        "difficulty": 6
    },
    {
        "id": 2026,
        "name": "token",
        "difficulty": 8
    },
    {
        "id": 2027,
        "name": "toll",
        "difficulty": 9
    },
    {
        "id": 2028,
        "name": "tonality",
        "difficulty": 7
    },
    {
        "id": 2029,
        "name": "topic",
        "difficulty": 8
    },
    {
        "id": 2034,
        "name": "track_changes",
        "difficulty": 7
    },
    {
        "id": 2042,
        "name": "transit_enterexit",
        "difficulty": 9
    },
    {
        "id": 2049,
        "name": "trip_origin",
        "difficulty": 7
    },
    {
        "id": 2052,
        "name": "try",
        "difficulty": 8
    },
    {
        "id": 2056,
        "name": "tungsten",
        "difficulty": 6
    },
    {
        "id": 2063,
        "name": "turned_in",
        "difficulty": 7
    },
    {
        "id": 2064,
        "name": "turned_in_not",
        "difficulty": 7
    },
    {
        "id": 2068,
        "name": "type_specimen",
        "difficulty": 9
    },
    {
        "id": 2080,
        "name": "upcoming",
        "difficulty": 8
    },
    {
        "id": 2119,
        "name": "view_comfortable",
        "difficulty": 6
    },
    {
        "id": 2120,
        "name": "view_comfy",
        "difficulty": 6
    },
    {
        "id": 2121,
        "name": "view_comfy_alt",
        "difficulty": 7
    },
    {
        "id": 2124,
        "name": "view_cozy",
        "difficulty": 6
    },
    {
        "id": 2125,
        "name": "view_day",
        "difficulty": 6
    },
    {
        "id": 2126,
        "name": "view_headline",
        "difficulty": 7
    },
    {
        "id": 2133,
        "name": "view_stream",
        "difficulty": 6
    },
    {
        "id": 2134,
        "name": "view_timeline",
        "difficulty": 6
    },
    {
        "id": 2175,
        "name": "wb_iridescent",
        "difficulty": 6
    },
    {
        "id": 2176,
        "name": "wb_shade",
        "difficulty": 6
    },
    {
        "id": 2182,
        "name": "web_asset",
        "difficulty": 6
    },
    {
        "id": 2185,
        "name": "webhook",
        "difficulty": 6
    },
    {
        "id": 2187,
        "name": "weekend",
        "difficulty": 6
    },
    {
        "id": 2201,
        "name": "wifi_channel",
        "difficulty": 9
    },
    {
        "id": 2206,
        "name": "wifi_protected_setup",
        "difficulty": 7
    },
    {
        "id": 2223,
        "name": "workspaces",
        "difficulty": 8
    },
    {
        "id": 2224,
        "name": "workspaces_filled",
        "difficulty": 8
    },
    {
        "id": 2225,
        "name": "workspaces_outline",
        "difficulty": 7
    },
    {
        "id": 2228,
        "name": "wysiwyg",
        "difficulty": 9
    }
];
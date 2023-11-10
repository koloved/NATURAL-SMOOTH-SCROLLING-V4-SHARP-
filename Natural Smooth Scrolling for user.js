///  NATURAL SMOOTH SCROLLING V4 "SHARP" - AveYo, 2020-2022             preset     [default]
///  copy into firefox/librewolf profile as user.js, add to existing, or set in about:config
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);//NSS    [120]
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);//NSS  [false]
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   200);//NSS   [1250]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       250);//NSS   [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           25);//NSS     [12]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     "2.0");//NSS    [1.3]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      250);//NSS   [2000]
user_pref("general.smoothScroll.currentVelocityWeighting",             "1.0");//NSS ["0.25"]
user_pref("general.smoothScroll.stopDecelerationWeighting",            "1.0");//NSS  ["0.4"]

/// adjust multiply factor for mousewheel - or set to false if scrolling is way too fast  
user_pref("mousewheel.system_scroll_override.horizontal.factor",         200);//NSS    [200]
user_pref("mousewheel.system_scroll_override.vertical.factor",           200);//NSS    [200]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled",  true);//NSS   [true]
user_pref("mousewheel.system_scroll_override.enabled",                  true);//NSS   [true]

/// adjust pixels at a time count for mousewheel - cant do more than a page at once if <100
user_pref("mousewheel.default.delta_multiplier_x",                       150);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_y",                       150);//NSS    [100]
user_pref("mousewheel.default.delta_multiplier_z",                       150);//NSS    [100]

///  this preset will reset couple extra variables for consistency
user_pref("apz.allow_zooming",                                          true);//NSS   [true]
user_pref("apz.force_disable_desktop_zooming_scrollbars",              false);//NSS  [false]
user_pref("apz.paint_skipping.enabled",                                 true);//NSS   [true]
user_pref("apz.windows.use_direct_manipulation",                        true);//NSS   [true]
user_pref("dom.event.wheel-deltaMode-lines.always-disabled",           false);//NSS  [false]
user_pref("general.smoothScroll.durationToIntervalRatio",                200);//NSS    [200]
user_pref("general.smoothScroll.lines.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.lines.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.other.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.other.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMaxMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pages.durationMinMS",                    150);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMaxMS",                   150);//NSS    [150]
user_pref("general.smoothScroll.pixels.durationMinMS",                   150);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMaxMS",               150);//NSS    [150]
user_pref("general.smoothScroll.scrollbars.durationMinMS",               150);//NSS    [150]
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",               200);//NSS    [200]
user_pref("general.smoothScroll.mouseWheel.durationMinMS",                50);//NSS     [50]
user_pref("layers.async-pan-zoom.enabled",                              true);//NSS   [true]
user_pref("layout.css.scroll-behavior.spring-constant",                "250");//NSS    [250]
user_pref("mousewheel.transaction.timeout",                             1500);//NSS   [1500]
user_pref("mousewheel.acceleration.factor",                               10);//NSS     [10]
user_pref("mousewheel.acceleration.start",                                -1);//NSS     [-1]
user_pref("mousewheel.min_line_scroll_amount",                             5);//NSS      [5]
user_pref("toolkit.scrollbox.horizontalScrollDistance",                    5);//NSS      [5]
user_pref("toolkit.scrollbox.verticalScrollDistance",                      3);//NSS      [3]
///
/// fullscreen transition
user_pref("full-screen-api.transition-duration.enter",                  0 0);
user_pref("full-screen-api.transition-duration.leave", 					0 0);
user_pref("full-screen-api.transition.timeout", 						0);
user_pref("full-screen-api.warning.delay", 								0);
user_pref("full-screen-api.warning.timeout", 							0);

/// quality of live
user_pref("browser.tabs.insertRelatedAfterCurrent",						false);//Open New Tabs at End
user_pref("layout.spellcheckDefault",									2);//Make Firefox’s Spell Checker More Useful

/// CONTROL & MISC
user_pref("dom.event.contextmenu.enabled",						false);//Don't allow websites to prevent use of right-click
user_pref("dom.event.clipboardevents.enabled",						false);//Don't allow websites to prevent copy and paste.
user_pref("network.IDN_show_punycode",						true);//Show punycode. Help protect from character 'spoofing' eg:xn--80ak6aa92e.com -> аррӏе.com

///PRIVACY SETTINGS
user_pref("privacy.firstparty.isolate",						true);//This preference isolates all browser identifier sources (e.g. cookies)
user_pref("network.http.referer.spoofSource",						true);//Send fake referrer (if choose to send referrers). Recommended.
user_pref("privacy.trackingprotection.enabled",						true);//Mozilla’s built in tracking protection.
user_pref("privacy.resistFingerprinting",						true);//This preference makes Firefox more resistant to browser fingerprinting.
user_pref("geo.enabled",						false);//Mozilla’s built in tracking protection.
user_pref("geo.wifi.uri",						false);
user_pref("browser.search.geoip.url",						blank);//Disables geolocation and firefox logging geolocation requests.
user_pref("browser.safebrowsing.enabled",						false);//Disable Google Safe Browsing and malware and phishing protection.
user_pref("browser.send_pings",						false);//Prevent website tracking clicks.
user_pref("dom.battery.enabled",						false);//Disable website reading how much battery your mobile device or laptop has.

///PERFORMANCE
user_pref("webgl.force-enabled",						true);
user_pref("layers.acceleration.force-enabled",						true);
user_pref("layers.offmainthreadcomposition.enabled",						true);
user_pref("layers.offmainthreadcomposition.async-animations",						true);
user_pref("layers.async-video.enabled",						true);
user_pref("html5.offmainthread",						true);//Enable Hardware Acceleration and Off Main Thread Compositing (OMTC).

///SSD SAFE !!!
user_pref("browser.cache.disk.enable",						false);
user_pref("browser.sessionstore.interval",						6480000);
user_pref("browser.sessionstore.interval.idle",						6480000);
user_pref("browser.cache.disk.smart_size.enabled",						false);
user_pref("browser.cache.disk_cache_ssl",						false);
user_pref("browser.cache.memory.enable",						true);
user_pref("browser.cache.memory.capacity",						2048000);
user_pref("browser.cache.offline.enable",						false);

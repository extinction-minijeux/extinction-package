use tauri::{
    menu::{Menu, MenuItem, Submenu},
    Manager,
};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            let handle = app.handle();

            let reload_item = MenuItem::with_id(handle, "reload_page", "Actualiser la page et vider le cache", true, Some("CmdOrCtrl+R"))?;
            let view_menu = Submenu::with_items(handle, "Affichage", true, &[&reload_item])?;
            let menu = Menu::default(handle)?; // Default menu
            menu.append(&view_menu)?;
            app.set_menu(menu)?;
            app.on_menu_event(move |app_handle, event| {
                if event.id() == "reload_page" {
                    if let Some(window) = app_handle.get_webview_window("main") {
                        let _ = window.eval("location.reload(true)");
                    }
                }
            });

            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

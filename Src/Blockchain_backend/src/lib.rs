// /Blockchain/src/Blockchain_backend/src/lib.rs

use ic_cdk::api::print;
use ic_cdk_macros::{init, query, update};
use std::cell::RefCell;

thread_local! {
    static VAULT: RefCell<String> = RefCell::new(String::new());
}

#[init]
fn init() {
    print("Vault canister initialized ✅");
}

#[update]
fn store_data(data: String) -> String {
    VAULT.with(|vault| {
        *vault.borrow_mut() = data.clone();
    });
    "✅ Data securely stored in your personal vault!".to_string()
}

#[query]
fn get_data() -> String {
    VAULT.with(|vault| vault.borrow().clone())
}


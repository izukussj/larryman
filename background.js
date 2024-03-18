chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "Larryman",
    title: "Larryman",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "definir",
    title: "Définir",
    parentId: "Larryman",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "debuterConversation",
    title: "Débuter conversation",
    parentId: "Larryman",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "traduire",
    title: "Traduire",
    parentId: "Larryman",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "traduireEnFrancais",
    title: "en Français",
    parentId: "traduire",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "traduireEnAnglais",
    title: "en Anglais",
    parentId: "traduire",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "definir") {
    const message = "Définir \" " + info.selectionText + " \" ?";
    chrome.storage.local.set({ "selectedText": message }, () => {
      chrome.action.setPopup({ tabId: tab.id, popup: "popup.html" });
    });
  } else if (info.menuItemId === "debuterConversation") {
    chrome.storage.local.set({ "selectedText": info.selectionText }, () => {
      chrome.action.setPopup({ tabId: tab.id, popup: "popup.html" });
    });
  } else if (info.menuItemId === "traduireEnFrancais") {
    const message = "Traduire ce texte ci-après en Français : " + info.selectionText;
    chrome.storage.local.set({ "selectedText": message }, () => {
      chrome.action.setPopup({ tabId: tab.id, popup: "popup.html" });
    });
  } else if (info.menuItemId === "traduireEnAnglais") {
    const message = "Traduire ce texte ci-après en Anglais : " + info.selectionText;
    chrome.storage.local.set({ "selectedText": message }, () => {
      chrome.action.setPopup({ tabId: tab.id, popup: "popup.html" });
    });
  }
});
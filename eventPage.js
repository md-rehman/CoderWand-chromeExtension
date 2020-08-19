const contextMenuItem = {
	id: 'coderWand',
	title: 'Evanesco - Vinishine spell',
	contexts: ['all'],
};
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function (info, tab) {
	if (info.menuItemId === 'coderWand') {
		mycallback(info, tab);
	}
});

function mycallback(info, tab) {
	chrome.tabs.sendMessage(tab.id, { isActive: true });
}

chrome.commands.onCommand.addListener(function (command) {
	if (command === 'undo_hide') {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, { action: 'undo_hide' });
		});
	}
});
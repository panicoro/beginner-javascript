const tabs = document.querySelector('.tabs');
const tabsButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // mark all tabs as unselected
  tabsButtons.forEach((button) => button.setAttribute('aria-selected', false));
  // mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  // find the associated tabPanel and show it!
  const { id } = event.currentTarget;
  /* FIRST METHOD 
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */
  // METHOD 2 - Find in the array of tabPanels
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabsButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);

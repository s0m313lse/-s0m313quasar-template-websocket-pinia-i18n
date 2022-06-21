const globalComponents = {
    'page-pane': require('components/~Global/Panes/PagePane').default,
    'pane-body': require('components/~Global/Panes/PanBody').default,
    'pane-footer': require('components/~Global/Panes/PaneFooter').default,
    'pane-header': require('components/~Global/Panes/PaneHeader').default,
}

export default boot = async ({app}) => {
  Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component)
  })
}
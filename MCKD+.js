var app = new ActiveXObject("StarUML.StarUMLApplication");
var prj = app.GetProject();
prj.Title = "MCKD+";
var prjmgr = app.ProjectManager;
prjmgr.NewProjectByApproach("Mas-CommonKADS+");


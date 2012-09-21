this["Yarder"] = this["Yarder"] || {};
this["Yarder"]["Templates"] = this["Yarder"]["Templates"] || {};

this["Yarder"]["Templates"]["NewSampleMessageDialog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\"><h2>Create a sample log message</h2></div><div class=\"modal-body\"><form id=\"sample-log-message-form\" class=\"form-horizontal\"><div class=\"control-group\"><label for=\"application\" class=\"control-label\">Application</label><div class=\"controls\"><input id=\"application\" type=\"text\" value=\"";
  foundHelper = helpers.application;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.application; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/></div></div><div class=\"control-group\"><label for=\"host\" class=\"control-label\">Host</label><div class=\"controls\"><input id=\"host\" type=\"text\" value=\"";
  foundHelper = helpers.host;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.host; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/></div></div><div class=\"control-group\"><label for=\"context\" class=\"control-label\">Context</label><div class=\"controls\"><input id=\"context\" type=\"text\" value=\"";
  foundHelper = helpers.context;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.context; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/></div></div><div class=\"control-group\"><label for=\"severity\" class=\"control-label\">Severity</label><div class=\"controls\"><input id=\"severity\" type=\"text\" value=\"";
  foundHelper = helpers.severity;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.severity; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/></div></div><div class=\"control-group\"><label for=\"clientTimestamp\" class=\"control-label\">Timestamp</label><div class=\"controls\"><input id=\"clientTimestamp\" type=\"text\" value=\"";
  foundHelper = helpers.clientTimestamp;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.clientTimestamp; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/></div></div><div class=\"control-group\"><label for=\"message\" class=\"control-label\">Message</label><div class=\"controls\"><input id=\"message\" type=\"text\" value=\"";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/></div></div><div class=\"control-group\"><label for=\"payload\" class=\"control-label\">Payload</label><div class=\"controls\"><textarea id=\"payload\">";
  foundHelper = helpers.payload;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.payload; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</textarea></div></div></form></div><div class=\"modal-footer\"><a id=\"close\" class=\"btn\">Close</a><a id=\"save\" class=\"btn btn-primary\">Save</a></div>";
  return buffer;});

this["Yarder"]["Templates"]["LogMessageItemView"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li>";
  foundHelper = helpers.serverTimestamp;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.serverTimestamp; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " | ";
  foundHelper = helpers.severity;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.severity; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " | ";
  foundHelper = helpers.message;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</li>";
  return buffer;});
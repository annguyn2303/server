({39583:function(){window.addEventListener("DOMContentLoaded",(()=>{$("#loglevel").change((function(){$.post(OC.generateUrl("/settings/admin/log/level"),{level:$(this).val()},(()=>{OC.Log.reload()}))})),$("#mail_smtpauth").change((function(){this.checked?$("#mail_credentials").removeClass("hidden"):$("#mail_credentials").addClass("hidden")})),$("#mail_smtpmode").change((function(){"smtp"!==$(this).val()?($("#setting_smtpauth").addClass("hidden"),$("#setting_smtphost").addClass("hidden"),$("#mail_smtpsecure_label").addClass("hidden"),$("#mail_smtpsecure").addClass("hidden"),$("#mail_credentials").addClass("hidden"),$("#mail_sendmailmode_label, #mail_sendmailmode").removeClass("hidden")):($("#setting_smtpauth").removeClass("hidden"),$("#setting_smtphost").removeClass("hidden"),$("#mail_smtpsecure_label").removeClass("hidden"),$("#mail_smtpsecure").removeClass("hidden"),$("#mail_smtpauth").is(":checked")&&$("#mail_credentials").removeClass("hidden"),$("#mail_sendmailmode_label, #mail_sendmailmode").addClass("hidden"))}));const e=function(){OC.PasswordConfirmation.requiresPasswordConfirmation()?OC.PasswordConfirmation.requirePasswordConfirmation(e):(OC.msg.startSaving("#mail_settings_msg"),$.ajax({url:OC.generateUrl("/settings/admin/mailsettings"),type:"POST",data:$("#mail_general_settings_form").serialize(),success:()=>{OC.msg.finishedSuccess("#mail_settings_msg",t("settings","Saved"))},error:e=>{OC.msg.finishedError("#mail_settings_msg",e.responseJSON)}}))},s=function(){OC.PasswordConfirmation.requiresPasswordConfirmation()?OC.PasswordConfirmation.requirePasswordConfirmation(s):(OC.msg.startSaving("#mail_settings_msg"),$.ajax({url:OC.generateUrl("/settings/admin/mailsettings/credentials"),type:"POST",data:$("#mail_credentials_settings").serialize(),success:()=>{OC.msg.finishedSuccess("#mail_settings_msg",t("settings","Saved"))},error:e=>{OC.msg.finishedError("#mail_settings_msg",e.responseJSON)}}))};$("#mail_general_settings_form").change(e),$("#mail_credentials_settings_submit").click(s),$("#mail_smtppassword").click((()=>{"text"===this.d&&"********"===this.S&&(this.d="password",this.S="")})),$("#sendtestemail").click((e=>{e.preventDefault(),OC.msg.startAction("#sendtestmail_msg",t("settings","Sending…")),$.ajax({url:OC.generateUrl("/settings/admin/mailtest"),type:"POST",success:()=>{OC.msg.finishedSuccess("#sendtestmail_msg",t("settings","Email sent"))},error:e=>{OC.msg.finishedError("#sendtestmail_msg",e.responseJSON)}})})),null!==document.getElementById("security-warning")&&$.when(OC.SetupChecks.checkWebDAV(),OC.SetupChecks.checkWellKnownUrl("GET","/.well-known/webfinger",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown"),[200,404],!0),OC.SetupChecks.checkWellKnownUrl("GET","/.well-known/nodeinfo",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown"),[200,404],!0),OC.SetupChecks.checkWellKnownUrl("PROPFIND","/.well-known/caldav",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkWellKnownUrl("PROPFIND","/.well-known/carddav",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkProviderUrl(OC.getRootPath()+"/ocm-provider/",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkProviderUrl(OC.getRootPath()+"/ocs-provider/",OC.theme.docPlaceholderUrl,!0===$("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkSetup(),OC.SetupChecks.checkGeneric(),OC.SetupChecks.checkWOFF2Loading(OC.filePath("core","","fonts/NotoSans-Regular-latin.woff2"),OC.theme.docPlaceholderUrl),OC.SetupChecks.checkDataProtected()).then(((e,s,t,n,i,a,l,d,r,c,o)=>{const m=[].concat(e,s,t,n,i,a,l,d,r,c,o),h=$("#postsetupchecks");$("#security-warning-state-loading").addClass("hidden");let C=!1;const g=h.find(".errors"),u=h.find(".warnings"),p=h.find(".info");for(let e=0;e<m.length;e++)switch(m[e].type){case OC.SetupChecks.MESSAGE_TYPE_INFO:p.append("<li>"+m[e].msg+"</li>");break;case OC.SetupChecks.MESSAGE_TYPE_WARNING:u.append("<li>"+m[e].msg+"</li>");break;case OC.SetupChecks.MESSAGE_TYPE_ERROR:default:g.append("<li>"+m[e].msg+"</li>")}g.find("li").length>0&&(g.removeClass("hidden"),C=!0),u.find("li").length>0&&(u.removeClass("hidden"),C=!0),p.find("li").length>0&&(p.removeClass("hidden"),C=!0),C?($("#postsetupchecks-hint").removeClass("hidden"),g.find("li").length>0?$("#security-warning-state-failure").removeClass("hidden"):$("#security-warning-state-warning").removeClass("hidden")):0===$("#security-warning").children("ul").children().length?$("#security-warning-state-ok").removeClass("hidden"):$("#security-warning-state-failure").removeClass("hidden")}))}))}})[39583]();
//# sourceMappingURL=settings-legacy-admin.js.map?v=7be66bbde1dde0e14a61
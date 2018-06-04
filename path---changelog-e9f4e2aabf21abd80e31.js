webpackJsonp([0xca1d7c158d4b],{468:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{html:'<h4>Hacker Feedback Dashboard</h4>\n<p>We introduce the new Hacker Feedback Dashboard where private programs can see the total feedback their program has received from hackers along with the reasons they’ve declined to participate in their program. The feedback can be viewed at <b>Dashboard > Feedback</b>. <a href="/programs/hacker-feedback-dashboard.html">Learn more about the feedback dashboard</a>. </p>\n<h4>Triggers</h4>\n<p>We\'ve revamped our triggers functionality so that you can: </p>\n<ul>\n<li>Preview matches for a new trigger</li>\n<li>Add <i>And/Or</i> conditionals to make the trigger more flexible</li>\n<li>Edit or build off of default triggers</li>\n</ul>\n<p>We\'ve also updated the design so that you\'ll have a better user experience.\n<a href="/programs/triggers.html">Learn more about triggers</a>.</p>\n<h4>Response Targets</h4>\n<p>We’ve deprecated the term, <i>Response SLA</i> and replaced it with Response Targets and Response Standards. <a href="/programs/response-targets.html">Learn more about these new terms</a>. </p>\n<p>We’ve deprecated the <i>SLA Violations</i> inbox view and changed the name to <b>Missed targets</b>. The inbox filters are also now <b>Missed response targets</b> and <b>Missed response standards</b> instead of <i>SLA violation reports</i> and <i>SLA Fail reports</i>. </p>\n<p>We introduce 4 new inbox labels for reports that don’t meet response standards or targets. The labels are: Response, Triage, Bounty, and Resolve. These labels replace the previous <i>SLA Fail</i> and <i>SLA Miss</i> labels. </p>\n<p>The fields on the Reponse Target performance section of the Program Health dashboard have changed to <b>On target</b>, <b>Missed target</b>, and <b>Missed standard</b>. The missed target line is also taken off of the Average Time to Resolution graph on the dashboard.</p>\n<h4>Response Efficiency Indicators</h4>\n<p>We’ve modified response efficiency indicators so that:</p>\n<ul>\n<li>They now let you know the program’s percentage of reports that meet response standards instead of the number of reports that are failing or missing SLAs. </li>\n<li>The indicator and metrics are visible even when a member of the program is signed out. </li>\n<li>The orange response efficiency indicator is now changed to yellow.</li>\n<li>The indicator now occurs at the bottom of the metrics chart instead of at the top.</li>\n</ul>\n<h4>Time to Resolution by Severity</h4>\n<p>We now enable you to set your Time to Resolution response standards by severity. Learn more <a href="/programs/setting-response-targets.html">here</a>. </p>\n<h4>Invitations Toggle</h4>\n<p>Programs no longer have the ability to toggle invitations on or off with the On/Off button. The equivalent action to turn invitations off is to set the report volume to 0 if they no longer wish to engage with new hackers. To turn invitations on, just increase the report volume to be greater than 0. </p>\n<h4>Policy and Scope</h4>\n<p>Policy and Scope now have their own separate sections under <b>Settings > Program</b>. </p>\n<h4>Bug Fixes</h4>\n<ul>\n<li>The Managed label no longer shows up on the directory for programs with expired triage subscriptions.</li>\n<li>The response standard percentage now displays when the display option setting is enabled. There were some incidences where it didn’t show in the past. </li>\n<li>When a large user profile photo is uploaded, an error message is now given to the user to notify them that the upload has failed. </li>\n<li>Social sharing icons on public programs are now aligned and work properly without any weird spacing issues between the icons. </li>\n<li>Hackers no longer receive automatic invitations for programs they’ve left. </li>\n</ul>',frontmatter:{path:"/changelog/2018/may",title:"May 2018",date:"2018-05"}}},{node:{html:"<h4>The 90 Day Leaderboard</h4>\n<p>The new rolling 90 day leaderboard ranks hackers based on their score from this calculation: <strong>Reputation x Signal Percentile x Impact Percentile</strong>. </p>\n<h4>Needs More Info</h4>\n<p>When a program member adds a comment to an open report with a question mark, Hackbot will prompt them asking if they want to change the state of the report to Needs more info. </p>\n<h4>Response Efficiency Timers</h4>\n<p>Response efficiency timers no longer trigger for reports submitted by internal members of the program. </p>\n<h4>Auto-Invites for Controlled Programs</h4>\n<p>Programs in controlled launch mode are no longer able to toggle auto-invites as on or off. To change their settings for invitations, they can contact HackerOne support. </p>\n<h4>Bug Fixes</h4>\n<ul>\n<li>URLs in the report title are now wrapped so that they aren’t crossing out of the inbox. </li>\n<li>The Program Health Dashboard now displays 0 instead of N/A when there are no missed or failed reports. </li>\n<li>When a hacker leaves a program that they got invited to through the email forwarding feature, they won’t be placed in the priority queue for leaving that program. This prevents hackers from harvesting a ton of private invitations. </li>\n<li>Hackers now don’t receive invitations to programs they’ve left. </li>\n<li>When hackers received an invitation to claim a report, they couldn’t see or accept the terms of the program. Now they can actually claim the report and see the terms of the program. </li>\n</ul>",frontmatter:{path:"/changelog/2018/april",title:"April 2018",date:"2018-04"}}},{node:{html:'<h4>Invitations</h4>\n<p>We’ve improved the way programs can manage their invitations to hackers. You can now set a report volume target where we’ll monitor and manage your hacker invitations to help you meet your report goal.</p>\n<p>The Invite Hackers tab under Settings > Program > Hacker Management has been renamed to Invitations.  </p>\n<p>The Invitations page includes the new Report Volume field where you can enter the number of reports you\'d like to receive in 30 days.</p>\n<p><a href="/hackers/invitations.html">Read more about Invitations</a>.</p>\n<h4>Needs More Info</h4>\n<p>Reports in the Needs More Info state that haven’t been responded to within 30 days automatically get closed with no negative impact to the hacker’s reputation.</p>\n<h4>Controlled Launch</h4>\n<p>Response Programs in Controlled Launch that meet all of the success criteria are now prompted to publicly launch their own program through following the Setup Guide or through email notification.</p>\n<h4>Response SLA Settings</h4>\n<p>Response SLA settings are now applied to all reports and not just reports created after modification to SLA settings.</p>\n<p>Response SLA settings are also now incorporated into Controlled Launch for Response programs. Programs must’ve received at least 10 reports and invited 100 hackers while maintaining healthy responsive times before launching publicly.</p>\n<h4>Program Health Dashboard</h4>\n<p>The new Program Health Dashboard helps programs track their Response Efficiency Metrics and Response SLA performance. Go to Dashboard > Program Health to view your metrics.</p>\n<h4>Response Efficiency Indicator</h4>\n<p>Programs can now see their response efficiency indicator in their program dropdown. This enables them to see their response efficiency status without having to visit their security page.</p>\n<h4>Bug Fixes</h4>\n<ul>\n<li>Invite notifications don’t show up again for expired, declined, and duplicate invites.</li>\n<li>The questions on the Invitation Rejection Questionnaire and the Leave Program Questionnaire no longer show duplicates.</li>\n<li>The Time to Bounty timer now pauses when a report is closed as either N/A, Duplicate, Informative, or Spam.</li>\n<li>The red response efficiency indicator tooltip now correctly states that the program has failed SLAs instead of missed SLAs.</li>\n</ul>',frontmatter:{path:"/changelog/2018/march",title:"March 2018",date:"2018-03"}}},{node:{html:"<h4>In-Product Notifications for Invites</h4>\n<p>The notifications corner now pings hackers about new invitations.</p>\n<h4>Invitations on the Program’s Profile</h4>\n<p>Hackers can also see their invitations on the program's profile page. This reminds hackers of their invitation when they go to look at the program.</p>\n<h4>Pending Invitations Page</h4>\n<p>The new Pending Invitations page enables hackers to view all of their pending invites in one place so that they can see all the invitations they need to take action on.</p>\n<h4>Rejection Questionnaire</h4>\n<p>When Hackers reject an invite, they are given the opportunity to fill out a questionnaire to provide HackerOne with feedback on why they decided to reject the program invitation. The questionnaire shows up directly after hackers reject the invitation.</p>\n<h4>Leave Program Button</h4>\n<p>The Leave Program button is updated to be on the sidebar of the program’s security page. Hackers that leave the program also also get an invitation to fill out the rejection questionnaire.</p>\n<h4>Priority Queue</h4>\n<p>Hackers that submit the rejection questionnaire are placed at the top of the queue for the next program invitation they qualify for.</p>\n<h4>Private Invite Notification</h4>\n<p>The notification to private invites is updated so that it doesn't look like a program member invite.</p>\n<h4>Response Efficiency Box</h4>\n<p>The Response Efficiency box is updated on the program security page to show that metrics are averages of the last 90 days.</p>\n<h4>Response Efficiency Indicator</h4>\n<p>There is now a response indicator in the Response Efficiency box of the program's security page to show how healthy a program is. The indicators are either green, orange, or red dots.</p>\n<h4>Bug Fixes</h4>\n<ul>\n<li>Hackers are no longer redirected to a deleted program after every login.</li>\n<li>Programs can mark reports as being ineligible for bounty even though a hacker account is disabled.</li>\n<li>The program health alerts are fixed so that you're not getting alerted when you have 0 reports failing SLAs.</li>\n<li>Old resolved reports are no longer marked as SLA Fail or SLA Miss.</li>\n</ul>",frontmatter:{path:"/changelog/2018/february",title:"February 2018",date:"2018-02"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---changelog-e9f4e2aabf21abd80e31.js.map
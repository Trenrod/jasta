# Status: pre-alpha

# JASTA (Just another simple TODO app)

## Feature overview - First iteration MVP
## Dont use if
- Dont trust people you share the links to your todo
- Want roles like admin and dedicated read/write permissions

### Core features
- Simple. Just 3 stated Open, In progress, Done
- No cookies
- No external dependencies
- No ads (Please offer me a coffee to keep it running and motivate me to improve it TODO: link)
- Open Source (TODO: link client/server github)
- Encrypted keys only stored in clients
- Anonymous with only one exception 24h IP logs for Firewall rules only
- Automatic deletion of lists after 14days not used
- Instant manual deletion

TODO: add gifs
TODO: link demo

# Concept

<details>
<summary><b>PlantUML code concept Wireframes</summary>

```plantuml

@startsalt home_screen_concept
{
<b>Jasta</b>
.
Enter name of the a
new TodoList.
.
"TodoListName  "
.
[ Create ]
}
@endsalt

@startsalt admin_first_enter_concept
{
<b>Todolist Administrator</b>
.
{ "[Todolistname]" | [ Update ] }
.
<b>If you lose the link below no recovery is possible.</b>
Store this link to invite new user or
edit todolist description.
.
{ Admin link | [ Clipboard ] }
(<i>https://jasta.com/admin/[todolistid]/[admintoken]#[key]</i>)
.
--
.
Add new user for yourself or people you want to invite.
.
"Username        "
.
[ Create ]
}
@endsalt


@startsalt admin_with_user_concept
{
<b>Todolist Administrator</b>
.
{ "[Todolistname]" | [ Update ] }
.
<b>If you lose the link below no recovery is possible.</b>
Store this link to invite new user or
edit todolist description.
.
{ Admin link | [ Clipboard ] }
(<i>https://jasta.com/admin/[todolistid]/[admintoken]#[key]</i>)
.
--
.
Userlist
.
{ TreNrod | [ Clipboard ] | [ Delete ] | [ Enter ]}
(<i>https://jasta.com/todolist/[todolistid]/[usertokenid]#[key]</i>)
.
--
.
Add new user for yourself or people you want to invite.
.
"Username        "
.
[ Create ]
}
@endsalt

@startuml
state Start_Home <<start>>
state Start_Admin <<start>>
state "Home Screen" as State_Home_Screen
state "Admin Screen New" as State_Admin_Screen_New
state "Admin Screen With User" as State_Admin_Screen_With_User

Start_Home --> State_Home_Screen: browse\njasta.com
State_Home_Screen: <img https://github.com/Trenrod/jasta/raw/main/doc/diagrams/README/home_screen_concept.png>
State_Home_Screen -> State_Admin_Screen_New: 1. Type todolist name \n2 Click [Create] button
Start_Admin --> State_Admin_Screen_New: browse\nhttps://jasta.com/admin\n/[todolistid]/[admintoken]#[key]
State_Admin_Screen_New --> State_Admin_Screen_With_User: 3. Type username TreNrod \n4 Click [Create] button
' State2: User can
' State2: - ....
' State2: - Go to the "Directories" tab
' State2: - ....
' State2: - Close window
' State2 -> [*]
' State2 -> State3: Going to the \ nDirectories tab
' State3: User can
' State3: - select "Directory Name"  
' State3 -> State4: Selected directory \ n "Types of transport" 
' State4: User can
' State4: ...
@enduml

```
</details>

# Components

![Overview JASTA components](doc/diagrams/README/OverviewJASTAComponents.png)

<details>
<summary><b>PlantUML code</summary>

```plantuml

@startuml OverviewJASTAComponents

title Overview JASTA components

!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

!include <office/Services/web_services>
!include <office/Servers/web_server>
!include <office/Servers/server_generic>
!include <office/sites/website>
!include <office/databases/database>

Person(user, "User", "Person who wants to use JASTA to create and track todos.")
Person(admin, "Admin", "Create and maintain JASTA instances")

Container(deployment, "Deployment Server", "Ansible, Terraform", "Create VM instances and provisioning JASTA",  $sprite="server_generic")

System_Boundary(jasta, JASTA, "Docker-Compose") {
    Container(webclient, "Web Client (SPA)", "React, Typescript", "Provides web apps to the browser. TLS termination. API Gateway and firewall.",  $sprite="website")

    Container(caddy, "Web Server", "Caddy2, Go", "Provides web apps to the browser. TLS termination. API Gateway and firewall.",  $sprite="web_server")

    Container(api, "API", "FastAPI, Python", "Provides interface for web client CRUD todolists and todos.",  $sprite="web_services")

    Container(database, "SQLite Database", "SQLite", "Provides interface for web client CRUD todolists and todos.",  $sprite="database")
}

Rel(user, caddy, "browse to jasta.newawesome.org", "https")
Rel(user, webclient, "Create and manipulate todolists and todos", "https")
Rel_L(caddy, webclient, "delivers to users browser")
Rel(webclient, api, "API calls for CRUD operations on todolists and todos", "https, json")
Rel_R(api, database, "Read/Write", "tcp")
Rel(admin, deployment, "Read/Write", "tcp")
Rel(deployment, jasta, "Read/Write", "tcp")

@enduml

```

</details>




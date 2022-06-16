# JASTA (Just another simple TODO app)

## Feature overview
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

# System description

```plantuml
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml

Person(user, "User", "A user which wants to maintain todos in one or many todolists with other users")
' Person(admin, "Administrator", "People that administrates the products via the new v1.1 components", $tags="v1.1")
Container(jastaWebUI, "JASTA", "react", "Web app UI. To create todos. And manipulate items. Generates links containing permissions.")
Container(caddy, "Caddy2", "Caddy2", "Handles all business logic (incl. new v1.1 extensions)", $tags="v1.0+v1.1")
Container(api, "API", "Python, FastAPI", "Handles all business logic (incl. new v1.1 extensions)", $tags="v1.0+v1.1")
ContainerDb(db, "Database", "SQLite", "Holds product, order and invoice information")

Rel(user, jastaWebUI, "CRUD on todolists and its todoitems.", "https")
Rel(jastaWebUI, api, "Uses", "https")
Rel_R(api, db, "Reads/Writes")

SHOW_LEGEND()

```

## Software components
TODO: link
### Frontend:
- React (Typescript)
- Recoil main state engine
- No UI Framework

### Backend:
- FastAPI
- SQLite
- Caddy2
- Ansible
- OVH

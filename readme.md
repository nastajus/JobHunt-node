
#### business rules

tbd

---

#### table structure

###### format:
- root table [purpose] {important configuration}
    - columns (datatype)
**#- actionable investigatable idea / business rule / detail to resolve in design before implementation continues

###### details

v0.0.1:
- companies {freezeTableName: true}
    - compId
    - name
    - logo (stored as binary at an auto assigned size)**1
    - address**5

- aspects**6
    - aspectId
    - distance (integer) [changed by manually dragging often by 3-vertical bar handle in UI]
    - compId (fk)
    - groupId (fk)
    - >view compId
    - >view name
    - >view logo
    - >view address

groups
    - groupId
    - name [freefield text entry, bold/italic support]

---

v0.0.2:
- ratings **3
    - ratId
    - rating source = google, glassdoor, etc.
    -

- communications [many instances]**2
    - commId
    - commTypes = call, email, meet, ... other
    - details [~large textbox field]

- views [dynamically allow any column set]
    - ??

        - sample dynamic set
            - logo
            - name
            - address
            - rating A
            - rating B...
            - map
            - distance calculation**4


**1- investigate possibility of storing blob? data directly in-table instead of interoperating with a static directory resource (i find that distasteful that ... "rigid dependency coupling").
**2- to be viewed in a long conversation stream, back and forth, perhaps like messenger etc, with slight styling tilt on each "side".
**3- ~possibly~ dynamically updating
**4- default first result by google?
**5- mvp rules out of scope for now: later, consider how to store m# of addresses? ...
**6- query returns all _selected_ company fields via fk. possibly have aspect & aspect_view, or something.


---

#### cheat sheet sequelize commands

* `node_modules/.bin/sequelize model:create --name Organization --attributes 'orgId:integer orgName:string orgAddress:string'`
    * success

* `node_modules/.bin/sequelize seed:generate --name demo-organization`
    * well. okay. it works.
    * it just generates an empty boilerplate that you fill in manually anyways
    * i think i imagined the CLI was able to do too much. okay cool.


#### Paper Sketches Animation

![paper sketches animation](https://github.com/nastajus/JobHunt-node/raw/master/readme/jh-4sec.gif "paper sketches animation of 3 sheets")

- Sketch #1: Rankings & Route Picker Map
    - Rankings: integration with some of ranking service APIs, extensibility optional column.
    - Google Maps integration: allowing preview and embedded selection of mode of transport.

- Sketch #2: Distances & Desired Ordering 
    - single page view listing exhaustively all company travel times based on selected mode of transport unique to each company.
    - emphasis on company for easy identifier, and on draggable interface.

- Sketch #3: Categorical ordering 
    - ability to create and name categories as desired.
    - can drag line items dragging between different tables. key feature.



#### business rules ("user stories")
v0.0.1
- a person can "add a company" to an "aspect page" by typing at minimum a name (mandatory), optionally setting uploading a logo**A (optional), and typing a singular standard-formatted address. **[emphasizes: form, http, db]**
- a person can "customize the order of companies listed on the aspect page" (to indicate preference) **[empahsizes ui, minor db]**
- a person can "remove a company from an aspect page" but still "keep a record" of that company in the "companies page" to easily add later.
- a person can "permanently remove a company from the companies page" (removing from the database)

**A- long-term, need a protection mechanism against abuse such as uploading of inappropriate images.

future version:
**- general concern for SQL injection attacks with free-form entry TBD. ir

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
    - position (integer) [changed by manually dragging often by 3-vertical bar handle in UI]
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

---

#### api

    /GET  companies
view exhaustive list of all companies tracked (ordered)

    /GET  aspects
view raw list of user-managed "aspects" (with their subset tables) (ordered within each table)

    /POST companies
set 1 new company name (mandatory), with logo picture [optional], address text [optional]


preferred:

    /POST aspects?company=XYZ&?position=123&table=ABC
keep root simple, dump all other parameters into _&_& fields.


not preferred:

    /POST aspects/tables/companies?position=123
    /POST aspects?company=XYZ&?position=123
    /POST aspects/tables/
(last one: possibly used to create an named aspect (table) alone)



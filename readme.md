#### business rules

tbd

#### table structure

###### format:
- root table [purpose]
    - columns (datatype)
**#- actionable investigatable idea / business rule / detail to resolve in design before implementation continues

###### details

- companies
    - compId
    - company name
    - company logo path (stored in static dir)**1

- ratings **3
    - ratId
    - rating source = google, glassdoor, etc.
    -

- communications [many instances]**2
    - commId
    - commTypes = call, email, meet, ... other
    - details [~large textbox field]

**1- investigate possibility of storing blob? data directly in-table instead of interoperating with a static directory resource (i find that distasteful that ... "rigid dependency coupling").
**2- to be viewed in a long conversation stream, back and forth, perhaps like messenger etc, with slight styling tilt on each "side".
**3- ~possibly~ dynamically updating
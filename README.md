# Using Custom Components in Constellation

## Overview

This project provides you with an environment to extend Constellation by giving you tools to create and publish custom components that are not available from the Constellation installation.

## Prerequisites

Ensure you have access to the following in your system:

- Pega Infinity Server version 8.7 or later

- Git version 2.30 or later

- System node version 16

- System npm version 7

## Initialize a project

Initialize the project by performing the following procedure in a terminal:

1. Enter the following command to initialize the project.

    Pega 8.7 - `npx @pega/custom-dx-components@1 init`

    Pega 8.8 - `npx @pega/custom-dx-components@2 init`

2. If prompted, enter `y` to install the Custom UI Components package.
You will then be asked to set up the project by entering the required details.

3. Enter the following details:
    - Name of the project (required)
Example - `mycustomcomponents`
    - Name of the organization  (required)
Example - `customorg`
    - Version  (required)
Example - `1.0.0`
    - Description of the project (optional)
Example - `This project is intended to create and publish a custom component.`
    - Git repository URL (optional)
Example - `https://git.custom-components.io/custom-cc.git`
    - Author (optional)
Example - `Michelle`

The workspace is now set up to create custom components and publish them to the server.

## Create custom components

Create custom components using the following procedure:

1. Enter the following command to create a component:
`npm run create`
You will then be asked to enter or review the following details of the component:
    - Name of the component (required)
Example - `customcomp0`
    - Name of component label (required)
Example - `custom component`
    - Name of the library (required)
Example - `basic`
    - Component version (required)
Example - `0.0.1`
    - Type of component (required)
Example - `Field`
    - Sub-type of component (required)
Example - `Text`
    - Description of the component (optional)
Example - `This is a customized searchbox that filters data.`
The component is created in the following path:  _/Users/your_user_name/project_name/src/components/component_name_
You can also pre-configure the values for the above options in a tasks.config.json file as shown below.

    ```json
    {
        "component": {
            "library": "basic",
            "type": "field",
            "subtype": "text",
            "description": "basic field for capturing textual data",
            "icon": "basic-field-text.svg"
        }
    }
    ```
>**Note**:
Alternatively, you can enter the following command to skip entering the details of the component now and can manually enter the details in the config.json file after the component is created:
`npm run create <enter_component_name>`

A _src/components_ folder is created and the necessary files required to build the component are initialized as seen below.

    ```sh
    ├── src
       ├── components
            ├── <component_name>
                ├── index.js
                ├── demo.stories.js
                ├── config.json
    ```


The *index.js* file contains the actual component rendering logic.
The *demo.stories.js* file contains the demo that can be viewed in the storybook.
The *config.json* file contains the mapping of properties for configuring the auto generated property panel. This property panel appears in AppStudio when an application is being authored to use the custom component.


2. Enter the following command to start the storybook to view the demo.
`npm start`

3. Modify the source files to build your own component. You can also install and import third-party libraries if required for your component.

The custom component is now created. We use the information provided to create uniquely namespaced components in this convention - `<organization>_<library>_<component name>`.

## Authenticate the user
Before we publish the custom component to the Pega Infinity Server, authenticate the user to access the resources in the Pega Infinity Server.

>**Note**:
It is required that you configure a value for clientId, clientSecret, and accessTokenUri.
1. Login to Pega Infinity Server, navigate to Records / Security / OAuth 2.0 Client Registration landing page and open the *DX-CustomComponents* record.
2. Click **Regenerate Client Secret**, download the Client Credentials (as the Client ID, Client Secret, and Access token endpoint will be needed), and save the record.
3. Update the the task.config.json file with these downloaded values:
    ```json
    "server-config": {
        "server": "https://127.0.0.1:8080/prweb",
        "user": "customcomponentoperator",
        "password": "pwd",
        "clientId": "<mention client ID here>",
        "clientSecret": "<mention client secret here>",
        "accessTokenUri": "https://127.0.0.1:8080/prweb/PRRestService/oauth2/v1/token"
    },
    ```
4. Enter the following command to initiate authentication.
`npm run authenticate`

The user is now authenticated and can proceed to either publish or list the components.

## Publish custom components
Enter the following command to publish custom components to Pega Infinity Server:
`npm run publish`
Publish the finalized custom components changes to Pega Infinity Server so that it can be discoverable in authoring (design palette).
You will then be asked to enter the following details:

- The component to be published to Pega Infinity Server. It will be updated if the component exists.
- The name of the ruleset where the component must be published.
- The version of the ruleset where the component must be published.
- Specify if the development build should be generated for debugging.
You can also pre-configure the values for the above options in a tasks.config.json file as shown below. The server, user name, and password must be pre-configured.

    ```json
    {
        "components-server-config": {
            "server": "http://127.0.0.1:8080/prweb",
            "user": "customcomponentoperator",
            "password": "pwd"
            "rulesetName": "TestPega-C11nGall",
            "rulesetVersion": "01-01-03",
            "sourceOfComponents": "Server",
            "devBuild": false,
        }
    }
    ```
    When the component is successfully published, you can use the newly published component in App Studio's view authoring.


>**Note**:
The Rule-UI-Component instance (with component name) is created on the Pega Infinity Server after publishing the component.

## List custom components
View the available components in the local machine or the server.

Enter the following command to list custom components:
`npm run list`

You will then be asked to enter the following details:

- List components from Server or Local?
Example - `Server`

The custom components will now be listed in the terminal.

## Delete custom components
Delete the available or published components in the local machine or the server.

Enter the following command to delete custom components:
`npm run delete`

You will then be asked to enter the following details:

- Delete components from Server or Local?
Example - `Local`

- Select component to delete
The list of available components in the following path will be displayed:  _/Users/your_user_name/project_name/src/components
Select the component to be deleted from this list.

- Are you sure?
Example - `yes`

>**Note**:
If you choose to delete components from the server, the successfully published components along with their ruleset name and ruleset version from the Pega Infinity Server will be displayed. Select the component to be deleted from this list.

## View existing custom components in storybook
View custom components in a storybook by performing the following procedure:
1. Enter the following command to open the project.
`cd <enter your project's name>`

2. Enter the following command to start the storybook in development mode.
`npm start`

The storybook is launched in a browser where you can view the components working in isolation.

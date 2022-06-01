import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '9efb5sdd',
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    token:
        'skGugUhmZJZxrc16AAOl2ekEJZZdE4CLSb2jbwZN0TP3LrwQ0Eu6dikF61wqby7kTnAi3j0dPNPr4n3qNXDcNhEiIa9lE0JBSW9jhDZaEhRIh13EEVQYuq8rfJCbg8ZtODXTOAASN1TuI6jEIWr7VoXjFrQfia0w9FiBhYwukrvXLHlBhcXx',
    useCdn: false,
    ignoreBrowserTokenWarning: true
})
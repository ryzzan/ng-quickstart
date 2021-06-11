export interface List {
    items: Array<Item>;
    
}

interface Item {
    content: string;
    icon?: string;
    header?: Header;
}

enum Header {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3'
}
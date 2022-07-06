import { createElement } from "react";
import { createRoot } from 'react-dom/client'
const heading = createElement('h1', null, 'Biodata Perusahaan')

const listItemOne = createElement('li', null, 'Nama: Dicoding Indonesia')
const listItemTwo = createElement('li', null, "Bidang: Education");
const listItemThree = createElement('li', null, "Tagline: Decode Ideas, Discover Potential.");

const unOrderedList = createElement('ul', null, [listItemOne, listItemTwo, listItemThree]);

const container = createElement('div', null, [heading, unOrderedList])

const root = createRoot(document.getElementById('root'));

root.render(container)
export interface Post {
  title: string;
  text: string;
  url: string;
  author: string;
}

const uniqueText = `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at mauris eget erat sagittis ullamcorper ac sit amet ligula. Vivamus interdum felis eu ante cursus semper. Nulla quis ex sollicitudin, varius lacus vel, elementum tellus. Ut vestibulum non lacus vitae accumsan. Nulla eu tortor mollis purus semper egestas. Maecenas quis varius magna, vel sagittis lectus. Vestibulum eu metus sed erat molestie blandit. Praesent ac sodales tortor. Curabitur id viverra arcu, vitae sagittis libero.
Proin scelerisque purus et dolor vehicula feugiat. Proin suscipit quis odio ut egestas. Vivamus eget tellus at felis tempus malesuada. Etiam vestibulum metus ut orci sollicitudin imperdiet. Donec a felis vel tortor tempor lobortis. Proin hendrerit ex sit amet ultrices pellentesque. Maecenas feugiat, tellus a bibendum gravida, tellus nunc consectetur purus, eget dictum quam felis quis quam. Pellentesque eu magna magna. Donec volutpat odio ut mi lacinia aliquam. Curabitur congue vehicula faucibus. Donec est ante, ornare non dictum id, pulvinar ut leo.
</p>
<p>
Quisque eu nisi vel orci vehicula rhoncus ut sed mauris. Sed tristique purus et lectus placerat scelerisque. Nulla dignissim et nibh non molestie. Vestibulum lacinia molestie quam, eget pretium elit mollis id. Pellentesque faucibus porttitor tellus, at pretium augue sagittis vitae. Maecenas id feugiat ante. Aenean sagittis, arcu id finibus faucibus, ligula sem rutrum nunc, eu fringilla dui justo quis risus. Morbi porttitor suscipit arcu, eu vulputate felis ullamcorper at. Nunc ut arcu et velit pellentesque scelerisque. Nullam dignissim eros maximus magna ultricies, sagittis scelerisque mi consectetur. Integer convallis congue erat, at aliquam tortor eleifend eget. Suspendisse potenti. Quisque quis massa volutpat, malesuada libero suscipit, convallis elit. Morbi tempus enim vehicula, aliquam dolor et, tincidunt ipsum.
</p>
<p>
Pellentesque varius elementum risus, at ultricies ante bibendum in. Nullam quis ipsum eget massa facilisis fringilla. Cras in erat augue. Pellentesque tincidunt, tortor in tincidunt elementum, est augue mollis nisl, quis viverra nulla leo et mauris. Nulla pretium tellus vel tempus dictum. Maecenas feugiat, augue in maximus accumsan, massa purus condimentum elit, nec aliquam mi odio quis lorem. Morbi sed tristique sem. Vivamus sed sagittis nisl. Quisque sit amet elit nec magna feugiat consequat. Aenean ex ex, volutpat eget erat nec, luctus mattis est. Nam varius mollis justo, sit amet molestie lacus consequat vitae. Quisque ullamcorper elementum diam eu faucibus. Phasellus congue feugiat nisl, eu ornare arcu auctor finibus. Integer tristique, odio vel maximus tempor, lectus eros tristique est, sed lacinia velit est malesuada dui.
Maecenas a tortor ac tellus condimentum elementum. Integer finibus lorem tortor. Maecenas ligula lorem, sagittis a tristique nec, aliquet vitae velit. Vestibulum elementum ullamcorper tortor sit amet ullamcorper. Nam rhoncus erat urna, in volutpat ipsum congue sed. Curabitur turpis sem, tincidunt quis lorem sed, cursus commodo sem. Curabitur ut finibus nibh, hendrerit pharetra sapien. 
</p>
`;

export const mockData: Post[] = [
  {
    title: "Si enim ita est, vide ne facinus facias, cum mori suadeas.",
    text: `${uniqueText}`,
    url: "http://www.google.com",
    author: "Safa Millington"
  },
  {
    title: "Quis istud possit, inquit, negare?",
    text: `${uniqueText}`,
    url: "http://www.google.com",
    author: "Fatema Shields"
  },
  {
    title: "Maximus dolor, inquit, brevis est.",
    text: `${uniqueText}`,
    url: "http://www.google.com",
    author: "Louie Sparks"
  },
  {
    title: "Atque his de rebus et splendida est eorum et illustris oratio.",
    text: `${uniqueText}`,
    url: "http://www.google.com",
    author: "Zayaan Moreno"
  },
  {
    title: "Paulum, cum regem Persem captum adduceret, eodem flumine invectio?",
    text: `${uniqueText}`,
    url: "http://www.google.com",
    author: "Fiona Ahmad"
  }
];

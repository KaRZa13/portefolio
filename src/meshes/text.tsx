import { Scene, Mesh, MeshBasicMaterial } from "three"
import { FontLoader } from "three/examples/jsm/Addons.js"
import { TextGeometry } from "three/examples/jsm/Addons.js"

const addText = (text: string, scene: Scene): void => {
  const fontLoader = new FontLoader()
  let mesh: Mesh

  fontLoader.load('/Hanson_Bold.json', (font: any) => {
    const textGeometry = new TextGeometry(text, {
      font: font,
      size: 0.5,
      height: 0.001,
      curveSegments: 12,
      bevelEnabled: false,
    })

    textGeometry.computeBoundingBox()

    const textMaterial = new MeshBasicMaterial({ color: 0x000000})

    mesh = new Mesh(textGeometry, textMaterial)

    const scale = (0.8 * window.innerWidth) / 951

    mesh.scale.set(scale, scale, scale)

    if (textGeometry.boundingBox) {
      mesh.position.set(
        (-textGeometry.boundingBox?.max.x / 2) * scale,
        (-textGeometry.boundingBox?.max.y / 2) * scale,
        -6
      );
    } else {
      console.error('Bounding box is null')
    }

    scene.add(mesh)
  })

  return
}

export default addText
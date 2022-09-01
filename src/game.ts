
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.749911308288574, 1, 1)
})
wallPlainGlass.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape2)

const doorframeNavy = new Entity('doorframeNavy')
engine.addEntity(doorframeNavy)
doorframeNavy.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(2.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeNavy.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("72f9b185-9fde-469c-8b57-899e5f89b18e/NavyDoorframe.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
doorframeNavy.addComponentOrReplace(gltfShape3)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(16, 4, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.745284080505371, 1, 1)
})
wallPlainGlass2.addComponentOrReplace(transform5)
wallPlainGlass2.addComponentOrReplace(gltfShape2)

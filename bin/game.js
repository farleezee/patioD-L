
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
const gltfShape = new GLTFShape("da1fed3c954172146414a66adfa134f7a5e1cb49c902713481bf2fe94180c2cf/FloorBaseGrass_01/FloorBaseGrass_01.glb")
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

const floorBlue = new Entity('floorBlue')
engine.addEntity(floorBlue)
floorBlue.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.000000476837158, 1, 4.000000953674316)
})
floorBlue.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("727e6367781a8c96f18fe727e623a3991cef8019cf0833281450b733df663ae2/BlueFloor.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
floorBlue.addComponentOrReplace(gltfShape2)

const doorframeHorizontalBoard6 = new Entity('doorframeHorizontalBoard6')
engine.addEntity(doorframeHorizontalBoard6)
doorframeHorizontalBoard6.setParent(_scene)
const gltfShape3 = new GLTFShape("28f6c48abb2b46b0d0325699d5f6c41e5967cdd45ec8e4d3ab594ddd1f13d265/HorizontalBoardDoorframe.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
doorframeHorizontalBoard6.addComponentOrReplace(gltfShape3)
const transform4 = new Transform({
  position: new Vector3(0.3675832748413086, 0, 0.02440643310546875),
  rotation: new Quaternion(4.2496688520042515e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.892085552215576, 3.15625, 1.0000033378601074)
})
doorframeHorizontalBoard6.addComponentOrReplace(transform4)

const doorframeHorizontalBoard = new Entity('doorframeHorizontalBoard')
engine.addEntity(doorframeHorizontalBoard)
doorframeHorizontalBoard.setParent(_scene)
doorframeHorizontalBoard.addComponentOrReplace(gltfShape3)
const transform5 = new Transform({
  position: new Vector3(0.1265578269958496, 0, 0.04624462127685547),
  rotation: new Quaternion(1.6762261100900042e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(7.892087459564209, 3.15625, 1.0000035762786865)
})
doorframeHorizontalBoard.addComponentOrReplace(transform5)

const doorframeHorizontalBoard2 = new Entity('doorframeHorizontalBoard2')
engine.addEntity(doorframeHorizontalBoard2)
doorframeHorizontalBoard2.setParent(_scene)
doorframeHorizontalBoard2.addComponentOrReplace(gltfShape3)
const transform6 = new Transform({
  position: new Vector3(0.05933821201324463, 0, 15.548691749572754),
  rotation: new Quaternion(1.6762261100900042e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(7.892087459564209, 3.15625, 1.0000035762786865)
})
doorframeHorizontalBoard2.addComponentOrReplace(transform6)

const doorframeHorizontalBoard3 = new Entity('doorframeHorizontalBoard3')
engine.addEntity(doorframeHorizontalBoard3)
doorframeHorizontalBoard3.setParent(_scene)
doorframeHorizontalBoard3.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(15.844428062438965, 0, 0.08385848999023438),
  rotation: new Quaternion(4.2496688520042515e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.892091274261475, 3.15625, 1.0000040531158447)
})
doorframeHorizontalBoard3.addComponentOrReplace(transform7)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(0.5, 2.0290770530700684, 3.1963067054748535),
  rotation: new Quaternion(8.817940676788736e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(6.714937686920166, 4.94248104095459, 1.0000083446502686)
})
nft.addComponentOrReplace(transform8)
const nftShape = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/385559")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(0.5, 2.0290770530700684, 12.652631759643555),
  rotation: new Quaternion(1.5601851374150068e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(6.5082268714904785, 4.9244489669799805, 1)
})
nft2.addComponentOrReplace(transform9)
const nftShape2 = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/385727")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const roofMetalEdgesSmall = new Entity('roofMetalEdgesSmall')
engine.addEntity(roofMetalEdgesSmall)
roofMetalEdgesSmall.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(15.925712585449219, 8.533876419067383, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.9154510498046875, 1, 7.963193893432617)
})
roofMetalEdgesSmall.addComponentOrReplace(transform10)
const gltfShape4 = new GLTFShape("94fcd65b69eb64811e773b567a38b3507ef447fb052dc0bc00788f2d2d1cfd79/MetalRoof_4Edges_Small.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
roofMetalEdgesSmall.addComponentOrReplace(gltfShape4)

const nft3 = new Entity('nft3')
engine.addEntity(nft3)
nft3.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(7.929865837097168, 12.376776695251465, 8.019137382507324),
  rotation: new Quaternion(-0.5, -0.5000001788139343, -0.5, 0.49999991059303284),
  scale: new Vector3(27.599689483642578, 22.467544555664062, 1.0000057220458984)
})
nft3.addComponentOrReplace(transform11)
const nftShape3 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/26889")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft3.addComponentOrReplace(nftShape3)

const basketballHoop2 = new Entity('basketballHoop2')
engine.addEntity(basketballHoop2)
basketballHoop2.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(15.5, 2.5, 8),
  rotation: new Quaternion(-3.253247509639348e-15, 0.7071069478988647, -8.42937097900176e-8, -0.7071065902709961),
  scale: new Vector3(0.9999994039535522, 1, 0.9999994039535522)
})
basketballHoop2.addComponentOrReplace(transform12)
const gltfShape5 = new GLTFShape("44000c55b6dd092e6a8eaa656af6f18bbdec7714a2d9b252686db1003f24cc41/Basketball_Hoop.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
basketballHoop2.addComponentOrReplace(gltfShape5)

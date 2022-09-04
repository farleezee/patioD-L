import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script2 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script3 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script4 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script5 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script6 from "../c72c3d45-0309-4834-84df-7b5f517694fa/src/item"

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
  position: new Vector3(16, 0, 0.28107595443725586),
  rotation: new Quaternion(-8.45795749755717e-16, 0.7071067690849304, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(6.749911308288574, 2, 1)
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
  position: new Vector3(16, 0, 13.75),
  rotation: new Quaternion(-8.45795749755717e-16, 0.7071067690849304, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1.0740681886672974, 1, 1)
})
doorframeNavy.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("72f9b185-9fde-469c-8b57-899e5f89b18e/NavyDoorframe.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
doorframeNavy.addComponentOrReplace(gltfShape3)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(15.949789047241211, 8, 7.996424674987793),
  rotation: new Quaternion(-6.692902301134779e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(15.672344207763672, 2.0351979732513428, 0.23754535615444183)
})
imageFromURL2.addComponentOrReplace(transform5)

const grafittiWallJ = new Entity('grafittiWallJ')
engine.addEntity(grafittiWallJ)
grafittiWallJ.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(0.035059452056884766, 0, 15.847990036010742),
  rotation: new Quaternion(5.2905978582199874e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(3.9596188068389893, 1, 1.0000028610229492)
})
grafittiWallJ.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("9af74dab-0029-45c8-a431-4c6604ce1099/Grafitti_Wall_J.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
grafittiWallJ.addComponentOrReplace(gltfShape4)

const floorHexagon = new Entity('floorHexagon')
engine.addEntity(floorHexagon)
floorHexagon.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 1, 4)
})
floorHexagon.addComponentOrReplace(transform7)
const gltfShape5 = new GLTFShape("c2f3bda2-7ffc-4873-8d2b-026d2a4abeb6/HexagonFloor.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
floorHexagon.addComponentOrReplace(gltfShape5)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(0.4354144334793091, 2.5, 2.8834781646728516),
  rotation: new Quaternion(1.5351384790438156e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(4.216312408447266, 3.188556432723999, 1.0000028610229492)
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
  position: new Vector3(0.3603922128677368, 2.5, 12.962396621704102),
  rotation: new Quaternion(1.6298831376007085e-15, 0.7071067094802856, -8.429366715745346e-8, -0.7071069478988647),
  scale: new Vector3(4.277790069580078, 3.119871139526367, 1.0000042915344238)
})
nft2.addComponentOrReplace(transform9)
const nftShape2 = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/385727")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(0.4261808395385742, 1.4391701221466064, 15.117833137512207),
  rotation: new Quaternion(-1.0430124425681855e-15, -0.70710688829422, 8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
externalLink.addComponentOrReplace(transform10)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(0.3815269470214844, 1.392651081085205, 0.8857522010803223),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.0000020265579224)
})
twitterButtonLink.addComponentOrReplace(transform11)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0.3539694547653198, 3.8694911003112793, 7.925165176391602),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(15.770462989807129, 6.104907035827637, 0.3208199143409729)
})
imageFromURL.addComponentOrReplace(transform12)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8.018243789672852, 0, 0.3533337712287903),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15.97066879272461, 10, -0.0000017332865809294162)
})
imageFromURL3.addComponentOrReplace(transform13)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(13.98355484008789, 0, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL4.addComponentOrReplace(transform14)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(13.98355484008789, 5.506921768188477, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL5.addComponentOrReplace(transform15)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(7.996086120605469, 5.506921768188477, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL6.addComponentOrReplace(transform16)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(7.996086120605469, 0, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL7.addComponentOrReplace(transform17)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(1.988882064819336, 5.506921768188477, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL8.addComponentOrReplace(transform18)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(1.988882064819336, 0, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL9.addComponentOrReplace(transform19)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(6.009307861328125, 0, 15.983665466308594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0112749338150024, 2.5086326599121094, 1)
})
wallPlainGlass2.addComponentOrReplace(transform20)
wallPlainGlass2.addComponentOrReplace(gltfShape2)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
  position: new Vector3(12.033114433288574, 0, 15.983665466308594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0112749338150024, 2.5086326599121094, 1)
})
wallPlainGlass3.addComponentOrReplace(transform21)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(16, 9.998047828674316, 8.004677772521973),
  rotation: new Quaternion(-0.5000001192092896, 0.4999999403953552, -0.5, -0.5000000596046448),
  scale: new Vector3(15.853074073791504, 15.926095008850098, 0.32495877146720886)
})
imageFromURL10.addComponentOrReplace(transform22)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(11.99704647064209, 4.49171781539917, 16),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.5100005269050598, 1.0000011920928955, 0.9999999403953552)
})
wallPlainGlass4.addComponentOrReplace(transform23)
wallPlainGlass4.addComponentOrReplace(gltfShape2)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape2)
const transform24 = new Transform({
  position: new Vector3(5.99704647064209, 4.49171781539917, 16),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.5100006461143494, 1.0000014305114746, 0.9999999403953552)
})
wallPlainGlass5.addComponentOrReplace(transform24)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(0, 4.49171781539917, 16),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.5100007653236389, 1.0000016689300537, 0.9999999403953552)
})
wallPlainGlass6.addComponentOrReplace(transform25)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(16, 4, 13.762435913085938),
  rotation: new Quaternion(-1.4717615892819412e-14, -0.7071068286895752, 8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(1.06821608543396, 1, 1.0000026226043701)
})
wallPlainGlass7.addComponentOrReplace(transform26)
wallPlainGlass7.addComponentOrReplace(gltfShape2)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(0, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform27)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(15.13454818725586, 1, 1),
  rotation: new Quaternion(4.335300706598109e-16, 0.3826834559440613, -4.5619415800501883e-8, -0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
radio.addComponentOrReplace(transform28)

const verticalBluePad = new Entity('verticalBluePad')
engine.addEntity(verticalBluePad)
verticalBluePad.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(8.000000953674316, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalBluePad.addComponentOrReplace(transform29)

const wallHexagonGrid = new Entity('wallHexagonGrid')
engine.addEntity(wallHexagonGrid)
wallHexagonGrid.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(16, 0, 0.31845664978027344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 2.5, 1)
})
wallHexagonGrid.addComponentOrReplace(transform30)
const gltfShape6 = new GLTFShape("59fecc02-0949-4feb-9501-f4279744b57e/HexagonGridWall.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
wallHexagonGrid.addComponentOrReplace(gltfShape6)

const wallHexagonGrid2 = new Entity('wallHexagonGrid2')
engine.addEntity(wallHexagonGrid2)
wallHexagonGrid2.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(0.2729787826538086, 3.98525333404541, 0.3542060852050781),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.673176288604736, 1.5, 0.8076474070549011)
})
wallHexagonGrid2.addComponentOrReplace(transform31)
wallHexagonGrid2.addComponentOrReplace(gltfShape6)

const wallHexagonGrid3 = new Entity('wallHexagonGrid3')
engine.addEntity(wallHexagonGrid3)
wallHexagonGrid3.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(3.9747114181518555, 0, 15.988794326782227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9670429229736328, 1.115785837173462, 0.36720696091651917)
})
wallHexagonGrid3.addComponentOrReplace(transform32)
wallHexagonGrid3.addComponentOrReplace(gltfShape6)

const wallHexagonGrid4 = new Entity('wallHexagonGrid4')
engine.addEntity(wallHexagonGrid4)
wallHexagonGrid4.setParent(_scene)
wallHexagonGrid4.addComponentOrReplace(gltfShape6)
const transform33 = new Transform({
  position: new Vector3(3.9747114181518555, 5.5, 15.988794326782227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9670429229736328, 1.115785837173462, 0.36720696091651917)
})
wallHexagonGrid4.addComponentOrReplace(transform33)

const wallHexagonGrid5 = new Entity('wallHexagonGrid5')
engine.addEntity(wallHexagonGrid5)
wallHexagonGrid5.setParent(_scene)
wallHexagonGrid5.addComponentOrReplace(gltfShape6)
const transform34 = new Transform({
  position: new Vector3(9.974711418151855, 5.5, 15.988794326782227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9670429229736328, 1.115785837173462, 0.36720696091651917)
})
wallHexagonGrid5.addComponentOrReplace(transform34)

const wallHexagonGrid6 = new Entity('wallHexagonGrid6')
engine.addEntity(wallHexagonGrid6)
wallHexagonGrid6.setParent(_scene)
wallHexagonGrid6.addComponentOrReplace(gltfShape6)
const transform35 = new Transform({
  position: new Vector3(9.974711418151855, 0, 15.988794326782227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9670429229736328, 1.115785837173462, 0.36720696091651917)
})
wallHexagonGrid6.addComponentOrReplace(transform35)

const wallHexagonGrid7 = new Entity('wallHexagonGrid7')
engine.addEntity(wallHexagonGrid7)
wallHexagonGrid7.setParent(_scene)
wallHexagonGrid7.addComponentOrReplace(gltfShape6)
const transform36 = new Transform({
  position: new Vector3(15.974711418151855, 0, 15.988794326782227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9670429229736328, 1.115785837173462, 0.36720696091651917)
})
wallHexagonGrid7.addComponentOrReplace(transform36)

const wallHexagonGrid8 = new Entity('wallHexagonGrid8')
engine.addEntity(wallHexagonGrid8)
wallHexagonGrid8.setParent(_scene)
wallHexagonGrid8.addComponentOrReplace(gltfShape6)
const transform37 = new Transform({
  position: new Vector3(15.974711418151855, 5.5, 15.988794326782227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9670429229736328, 1.115785837173462, 0.36720696091651917)
})
wallHexagonGrid8.addComponentOrReplace(transform37)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(imageFromURL2, {"image":"https://i.imgur.com/nvPVoZ8.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script2.spawn(externalLink, {"url":"dotbongbillionaires.com"}, createChannel(channelId, externalLink, channelBus))
script3.spawn(twitterButtonLink, {"url":"dotbongb","bnw":true}, createChannel(channelId, twitterButtonLink, channelBus))
script1.spawn(imageFromURL, {"image":"https://i.imgur.com/k3lj4zF.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script1.spawn(imageFromURL3, {"image":"https://i.imgur.com/1yTLpTM.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script1.spawn(imageFromURL4, {"image":"https://i.imgur.com/PpMxQ6S.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script1.spawn(imageFromURL5, {"image":"https://i.imgur.com/uMfYULu.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script1.spawn(imageFromURL6, {"image":"https://i.imgur.com/PpMxQ6S.jpg"}, createChannel(channelId, imageFromURL6, channelBus))
script1.spawn(imageFromURL7, {"image":"https://i.imgur.com/uMfYULu.jpg"}, createChannel(channelId, imageFromURL7, channelBus))
script1.spawn(imageFromURL8, {"image":"https://i.imgur.com/uMfYULu.jpg"}, createChannel(channelId, imageFromURL8, channelBus))
script1.spawn(imageFromURL9, {"image":"https://i.imgur.com/PpMxQ6S.jpg"}, createChannel(channelId, imageFromURL9, channelBus))
script1.spawn(imageFromURL10, {"image":"https://i.imgur.com/1cuKdy2.jpg"}, createChannel(channelId, imageFromURL10, channelBus))
script4.spawn(ambientSound, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script5.spawn(radio, {"startOn":true,"volume":1,"onClickText":"PRESS BUTTONS!","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"station":"https://cdn.instream.audio/:9069/stream?_=171cd6c2b6e"}, createChannel(channelId, radio, channelBus))
script6.spawn(verticalBluePad, {"distance":7,"speed":5,"autoStart":true,"onReachEnd":[{"entityName":"verticalBluePad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBluePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBluePad, channelBus))
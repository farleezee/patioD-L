import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script3 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script4 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script5 from "../c72c3d45-0309-4834-84df-7b5f517694fa/src/item"
import Script6 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"

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

const grafittiWallJ = new Entity('grafittiWallJ')
engine.addEntity(grafittiWallJ)
grafittiWallJ.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15.819977760314941, 0, 16),
  rotation: new Quaternion(7.980936705509045e-15, 0, 5.901507242416469e-15, -1),
  scale: new Vector3(3.8464510440826416, 1, 1.0000042915344238)
})
grafittiWallJ.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("9af74dab-0029-45c8-a431-4c6604ce1099/Grafitti_Wall_J.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
grafittiWallJ.addComponentOrReplace(gltfShape2)

const floorHexagon = new Entity('floorHexagon')
engine.addEntity(floorHexagon)
floorHexagon.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(-7.429307451521747e-16, 0, 1.7763568394002505e-15, 1),
  scale: new Vector3(4, 1, 4)
})
floorHexagon.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("c2f3bda2-7ffc-4873-8d2b-026d2a4abeb6/HexagonFloor.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
floorHexagon.addComponentOrReplace(gltfShape3)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(14.479756355285645, 1.4391692876815796, 15.6092529296875),
  rotation: new Quaternion(1.6112725532001107e-15, -1.1920927533992653e-7, 8.30934577871964e-15, 1),
  scale: new Vector3(0.9714213609695435, 1, 1.0000033378601074)
})
externalLink.addComponentOrReplace(transform5)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(1.9688308238983154, 1.392651915550232, 15.653909683227539),
  rotation: new Quaternion(1.2602629468908759e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(0.9714212417602539, 1, 1.0000032186508179)
})
twitterButtonLink.addComponentOrReplace(transform6)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(8.049259185791016, 3.8694911003112793, 15.665105819702148),
  rotation: new Quaternion(1.2602629468908759e-15, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(15.770478248596191, 6.104907035827637, 0.3208199739456177)
})
imageFromURL.addComponentOrReplace(transform7)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(13.98355484008789, 0, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL4.addComponentOrReplace(transform8)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(13.98355484008789, 5.506921768188477, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL5.addComponentOrReplace(transform9)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(7.996086120605469, 5.506921768188477, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL6.addComponentOrReplace(transform10)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(7.996086120605469, 0, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL7.addComponentOrReplace(transform11)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(1.988882064819336, 5.506921768188477, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL8.addComponentOrReplace(transform12)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(1.988882064819336, 0, 15.85420036315918),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.9735004901885986, 4.4877424240112305, 1.4569127154695494e-12)
})
imageFromURL9.addComponentOrReplace(transform13)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(8, 9.998047828674316, 0.0046787261962890625),
  rotation: new Quaternion(-0.7071068286895752, -2.9802318834981634e-8, 1.3155380429452634e-7, -0.7071067690849304),
  scale: new Vector3(15.85307788848877, 15.926098823547363, 0.32495880126953125)
})
imageFromURL10.addComponentOrReplace(transform14)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(0.7556191682815552, 1, 4.9923176765441895),
  rotation: new Quaternion(0.008567742072045803, -0.7053873538970947, -0.01345257367938757, -0.7086426615715027),
  scale: new Vector3(1.0000007152557373, 0.9999999403953552, 1.0000015497207642)
})
radio.addComponentOrReplace(transform15)

const verticalBluePad = new Entity('verticalBluePad')
engine.addEntity(verticalBluePad)
verticalBluePad.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(8.000000953674316, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
verticalBluePad.addComponentOrReplace(transform16)

const wallHexagonGrid2 = new Entity('wallHexagonGrid2')
engine.addEntity(wallHexagonGrid2)
wallHexagonGrid2.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(0, 3.9852542877197266, 15.731605529785156),
  rotation: new Quaternion(6.189692745072917e-19, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(7.967843055725098, 1.5, 0.8076556921005249)
})
wallHexagonGrid2.addComponentOrReplace(transform17)
const gltfShape4 = new GLTFShape("59fecc02-0949-4feb-9501-f4279744b57e/HexagonGridWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallHexagonGrid2.addComponentOrReplace(gltfShape4)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(14.890656471252441, 1.9999991655349731, 15.414148330688477),
  rotation: new Quaternion(2.9148584824859654e-15, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(0.6159782409667969, 0.5356435775756836, 0.6159782409667969)
})
messageBubble.addComponentOrReplace(transform18)

const messageBubble2 = new Entity('messageBubble2')
engine.addEntity(messageBubble2)
messageBubble2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(1.2661566734313965, 2.0000007152557373, 14.91415023803711),
  rotation: new Quaternion(3.9819426485030525e-16, 0.471396803855896, -5.6194867426029305e-8, -0.8819212317466736),
  scale: new Vector3(0.6249111294746399, 0.5356435775756836, 0.6249111294746399)
})
messageBubble2.addComponentOrReplace(transform19)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(3.8742151260375977, 2.5410518646240234, 15.674311637878418),
  rotation: new Quaternion(1.8729645469246292e-15, -5.960464477539063e-8, 1.2039194799098223e-15, 1),
  scale: new Vector3(3.6004281044006348, 2.9263596534729004, 1)
})
nft.addComponentOrReplace(transform20)
const nftShape = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/385727")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(12.429673194885254, 2.5475821495056152, 15.653956413269043),
  rotation: new Quaternion(-1.7622592465426235e-15, -5.960464477539063e-8, -2.3487941988906786e-15, 1),
  scale: new Vector3(3.4932684898376465, 2.821545124053955, 1)
})
nft2.addComponentOrReplace(transform21)
const nftShape2 = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/385559")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(8.0829496383667, 8, 0.07960892468690872),
  rotation: new Quaternion(-1.1422584036133773e-14, -1, 1.1920927533992653e-7, 2.2351741790771484e-8),
  scale: new Vector3(15.170259475708008, 2.0351979732513428, 0.2375454604625702)
})
imageFromURL3.addComponentOrReplace(transform22)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
const gltfShape5 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
wallPlainGlass8.addComponentOrReplace(gltfShape5)
const transform23 = new Transform({
  position: new Vector3(13.805848121643066, 0, 0.34576085209846497),
  rotation: new Quaternion(-2.5354828439160156e-14, 8.940696716308594e-8, 1.542002474059362e-14, -1),
  scale: new Vector3(6.749911308288574, 2, 1)
})
wallPlainGlass8.addComponentOrReplace(transform23)

const doorframeNavy2 = new Entity('doorframeNavy2')
engine.addEntity(doorframeNavy2)
doorframeNavy2.setParent(_scene)
const gltfShape6 = new GLTFShape("72f9b185-9fde-469c-8b57-899e5f89b18e/NavyDoorframe.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
doorframeNavy2.addComponentOrReplace(gltfShape6)
const transform24 = new Transform({
  position: new Vector3(15.952959060668945, 0, 0.3366464376449585),
  rotation: new Quaternion(-7.563805166238297e-15, -3.725290298461914e-8, -6.669129580316258e-15, 1),
  scale: new Vector3(1.0740686655044556, 1, 1.0000003576278687)
})
doorframeNavy2.addComponentOrReplace(transform24)

const wallPlainGlass9 = new Entity('wallPlainGlass9')
engine.addEntity(wallPlainGlass9)
wallPlainGlass9.setParent(_scene)
wallPlainGlass9.addComponentOrReplace(gltfShape5)
const transform25 = new Transform({
  position: new Vector3(15.939361572265625, 4, 0.30565643310546875),
  rotation: new Quaternion(1.9976533448262668e-14, 5.960464477539063e-8, -1.1746675782412213e-14, 1),
  scale: new Vector3(1.0682162046432495, 1, 1.0000027418136597)
})
wallPlainGlass9.addComponentOrReplace(transform25)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
wallPlainGlass.addComponentOrReplace(gltfShape5)
const transform26 = new Transform({
  position: new Vector3(15.997047424316406, 4.49171781539917, 15.881132125854492),
  rotation: new Quaternion(-0.5, 0.5, -0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.5100005865097046, 1.0000014305114746, 1)
})
wallPlainGlass.addComponentOrReplace(transform26)

const imageFromURL23 = new Entity('imageFromURL23')
engine.addEntity(imageFromURL23)
imageFromURL23.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(15.969127655029297, 0, 13.91065502166748),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9828507900238037, 4.472198486328125, 1.0000028610229492)
})
imageFromURL23.addComponentOrReplace(transform27)

const imageFromURL24 = new Entity('imageFromURL24')
engine.addEntity(imageFromURL24)
imageFromURL24.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(15.81297492980957, 0, 13.908777236938477),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.8791253566741943, 4.4635539054870605, 1.0000019073486328)
})
imageFromURL24.addComponentOrReplace(transform28)

const wallHexagonGrid = new Entity('wallHexagonGrid')
engine.addEntity(wallHexagonGrid)
wallHexagonGrid.setParent(_scene)
wallHexagonGrid.addComponentOrReplace(gltfShape4)
const transform29 = new Transform({
  position: new Vector3(15.824180603027344, 1.0973030839522835e-7, 15.872520446777344),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670453071594238, 1.115785837173462, 0.3672069013118744)
})
wallHexagonGrid.addComponentOrReplace(transform29)

const wallHexagonGrid9 = new Entity('wallHexagonGrid9')
engine.addEntity(wallHexagonGrid9)
wallHexagonGrid9.setParent(_scene)
wallHexagonGrid9.addComponentOrReplace(gltfShape4)
const transform30 = new Transform({
  position: new Vector3(15.824180603027344, 5.5, 15.872520446777344),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.967045783996582, 1.115785837173462, 0.3672069013118744)
})
wallHexagonGrid9.addComponentOrReplace(transform30)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(15.81297492980957, 5.5, 13.908777236938477),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.8791263103485107, 4.4635539054870605, 1.000002145767212)
})
imageFromURL2.addComponentOrReplace(transform31)

const imageFromURL25 = new Entity('imageFromURL25')
engine.addEntity(imageFromURL25)
imageFromURL25.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(15.969127655029297, 5.5, 13.91065502166748),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.98285174369812, 4.472198486328125, 1.0000030994415283)
})
imageFromURL25.addComponentOrReplace(transform32)

const imageFromURL26 = new Entity('imageFromURL26')
engine.addEntity(imageFromURL26)
imageFromURL26.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(15.81297492980957, 5.5, 7.979310989379883),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.8791282176971436, 4.4635539054870605, 1.0000026226043701)
})
imageFromURL26.addComponentOrReplace(transform33)

const wallHexagonGrid10 = new Entity('wallHexagonGrid10')
engine.addEntity(wallHexagonGrid10)
wallHexagonGrid10.setParent(_scene)
wallHexagonGrid10.addComponentOrReplace(gltfShape4)
const transform34 = new Transform({
  position: new Vector3(15.824180603027344, 5.5, 9.94305419921875),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670467376708984, 1.115785837173462, 0.3672068417072296)
})
wallHexagonGrid10.addComponentOrReplace(transform34)

const imageFromURL27 = new Entity('imageFromURL27')
engine.addEntity(imageFromURL27)
imageFromURL27.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(15.969127655029297, 5.5, 7.981188774108887),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.982853651046753, 4.472198486328125, 1.0000035762786865)
})
imageFromURL27.addComponentOrReplace(transform35)

const imageFromURL28 = new Entity('imageFromURL28')
engine.addEntity(imageFromURL28)
imageFromURL28.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(15.969127655029297, 0, 7.981188774108887),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9828526973724365, 4.472198486328125, 1.0000033378601074)
})
imageFromURL28.addComponentOrReplace(transform36)

const wallHexagonGrid11 = new Entity('wallHexagonGrid11')
engine.addEntity(wallHexagonGrid11)
wallHexagonGrid11.setParent(_scene)
wallHexagonGrid11.addComponentOrReplace(gltfShape4)
const transform37 = new Transform({
  position: new Vector3(15.824180603027344, 0, 9.94305419921875),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670462608337402, 1.115785837173462, 0.3672068417072296)
})
wallHexagonGrid11.addComponentOrReplace(transform37)

const imageFromURL29 = new Entity('imageFromURL29')
engine.addEntity(imageFromURL29)
imageFromURL29.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(15.81297492980957, 0, 7.979310989379883),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.879127264022827, 4.4635539054870605, 1.000002384185791)
})
imageFromURL29.addComponentOrReplace(transform38)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape5)
const transform39 = new Transform({
  position: new Vector3(15.997047424316406, 4.49171781539917, 9.951665878295898),
  rotation: new Quaternion(-0.5, 0.5, -0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.5100005865097046, 1.0000014305114746, 1)
})
wallPlainGlass10.addComponentOrReplace(transform39)

const imageFromURL30 = new Entity('imageFromURL30')
engine.addEntity(imageFromURL30)
imageFromURL30.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(15.81297492980957, 5.5, 2.1259841918945312),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.87912917137146, 4.4635539054870605, 1.0000028610229492)
})
imageFromURL30.addComponentOrReplace(transform40)

const imageFromURL31 = new Entity('imageFromURL31')
engine.addEntity(imageFromURL31)
imageFromURL31.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(15.81297492980957, 0, 2.1259841918945312),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.8791282176971436, 4.4635539054870605, 1.0000026226043701)
})
imageFromURL31.addComponentOrReplace(transform41)

const wallHexagonGrid12 = new Entity('wallHexagonGrid12')
engine.addEntity(wallHexagonGrid12)
wallHexagonGrid12.setParent(_scene)
wallHexagonGrid12.addComponentOrReplace(gltfShape4)
const transform42 = new Transform({
  position: new Vector3(15.824180603027344, 5.5, 4.089727401733398),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670472145080566, 1.115785837173462, 0.3672068417072296)
})
wallHexagonGrid12.addComponentOrReplace(transform42)

const wallHexagonGrid13 = new Entity('wallHexagonGrid13')
engine.addEntity(wallHexagonGrid13)
wallHexagonGrid13.setParent(_scene)
wallHexagonGrid13.addComponentOrReplace(gltfShape4)
const transform43 = new Transform({
  position: new Vector3(15.824180603027344, 0, 4.089727401733398),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670467376708984, 1.115785837173462, 0.3672068417072296)
})
wallHexagonGrid13.addComponentOrReplace(transform43)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape5)
const transform44 = new Transform({
  position: new Vector3(15.98587417602539, 4.49171781539917, 4.098339080810547),
  rotation: new Quaternion(-0.5, 0.5, -0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.5100005865097046, 1.0000014305114746, 1)
})
wallPlainGlass11.addComponentOrReplace(transform44)

const imageFromURL32 = new Entity('imageFromURL32')
engine.addEntity(imageFromURL32)
imageFromURL32.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(15.969127655029297, 5.5, 2.127861976623535),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9828546047210693, 4.472198486328125, 1.0000038146972656)
})
imageFromURL32.addComponentOrReplace(transform45)

const imageFromURL33 = new Entity('imageFromURL33')
engine.addEntity(imageFromURL33)
imageFromURL33.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(15.969127655029297, 0, 2.127861976623535),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.982853651046753, 4.472198486328125, 1.0000035762786865)
})
imageFromURL33.addComponentOrReplace(transform46)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape5)
const transform47 = new Transform({
  position: new Vector3(15.611493110656738, 0, 6.0676164627075195),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0112770795822144, 2.5086326599121094, 1.000002145767212)
})
wallPlainGlass12.addComponentOrReplace(transform47)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(0.14492416381835938, 0, 13.908777236938477),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.879127264022827, 4.4635539054870605, 1.000002384185791)
})
imageFromURL11.addComponentOrReplace(transform48)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape5)
const transform49 = new Transform({
  position: new Vector3(0.3289966583251953, 4.49171781539917, 15.881132125854492),
  rotation: new Quaternion(-0.5, 0.5, -0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.5100005865097046, 1.0000014305114746, 1)
})
wallPlainGlass2.addComponentOrReplace(transform49)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(0.14492416381835938, 5.5, 13.908777236938477),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.8791282176971436, 4.4635539054870605, 1.0000026226043701)
})
imageFromURL12.addComponentOrReplace(transform50)

const wallHexagonGrid3 = new Entity('wallHexagonGrid3')
engine.addEntity(wallHexagonGrid3)
wallHexagonGrid3.setParent(_scene)
wallHexagonGrid3.addComponentOrReplace(gltfShape4)
const transform51 = new Transform({
  position: new Vector3(0.1561298370361328, 5.5, 15.872520446777344),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670467376708984, 1.115785837173462, 0.3672069013118744)
})
wallHexagonGrid3.addComponentOrReplace(transform51)

const wallHexagonGrid4 = new Entity('wallHexagonGrid4')
engine.addEntity(wallHexagonGrid4)
wallHexagonGrid4.setParent(_scene)
wallHexagonGrid4.addComponentOrReplace(gltfShape4)
const transform52 = new Transform({
  position: new Vector3(0.1561298370361328, 0, 15.872520446777344),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670462608337402, 1.115785837173462, 0.3672069013118744)
})
wallHexagonGrid4.addComponentOrReplace(transform52)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(0.30107688903808594, 5.5, 13.91065502166748),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.982853651046753, 4.472198486328125, 1.0000035762786865)
})
imageFromURL13.addComponentOrReplace(transform53)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(0.30107688903808594, 0, 13.91065502166748),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9828526973724365, 4.472198486328125, 1.0000033378601074)
})
imageFromURL14.addComponentOrReplace(transform54)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape5)
const transform55 = new Transform({
  position: new Vector3(15.611493110656738, 0, 11.954194068908691),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0112773180007935, 2.5086326599121094, 1.000002384185791)
})
wallPlainGlass3.addComponentOrReplace(transform55)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(0.30107688903808594, 5.5, 7.906458854675293),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9828546047210693, 4.472198486328125, 1.0000038146972656)
})
imageFromURL15.addComponentOrReplace(transform56)

const imageFromURL16 = new Entity('imageFromURL16')
engine.addEntity(imageFromURL16)
imageFromURL16.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(0.30107688903808594, 0, 7.906458854675293),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.982853651046753, 4.472198486328125, 1.0000035762786865)
})
imageFromURL16.addComponentOrReplace(transform57)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape5)
const transform58 = new Transform({
  position: new Vector3(0.3289966583251953, 4.49171781539917, 9.876935958862305),
  rotation: new Quaternion(-0.5, 0.5, -0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.5100005865097046, 1.0000014305114746, 1)
})
wallPlainGlass5.addComponentOrReplace(transform58)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape5)
const transform59 = new Transform({
  position: new Vector3(0.059474050998687744, 0, 5.910309791564941),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0112782716751099, 2.5086326599121094, 1.0000033378601074)
})
wallPlainGlass6.addComponentOrReplace(transform59)

const imageFromURL17 = new Entity('imageFromURL17')
engine.addEntity(imageFromURL17)
imageFromURL17.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(0.14492416381835938, 5.5, 7.914831161499023),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.8791301250457764, 4.4635539054870605, 1.0000030994415283)
})
imageFromURL17.addComponentOrReplace(transform60)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(0.14492416381835938, 0, 7.914831161499023),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.87912917137146, 4.4635539054870605, 1.0000028610229492)
})
imageFromURL18.addComponentOrReplace(transform61)

const wallHexagonGrid5 = new Entity('wallHexagonGrid5')
engine.addEntity(wallHexagonGrid5)
wallHexagonGrid5.setParent(_scene)
wallHexagonGrid5.addComponentOrReplace(gltfShape4)
const transform62 = new Transform({
  position: new Vector3(0.1561298370361328, 0, 9.87857437133789),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670472145080566, 1.115785837173462, 0.3672069013118744)
})
wallHexagonGrid5.addComponentOrReplace(transform62)

const wallHexagonGrid6 = new Entity('wallHexagonGrid6')
engine.addEntity(wallHexagonGrid6)
wallHexagonGrid6.setParent(_scene)
wallHexagonGrid6.addComponentOrReplace(gltfShape4)
const transform63 = new Transform({
  position: new Vector3(0.1561298370361328, 5.5, 9.87857437133789),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670476913452148, 1.115785837173462, 0.3672069013118744)
})
wallHexagonGrid6.addComponentOrReplace(transform63)

const wallHexagonGrid7 = new Entity('wallHexagonGrid7')
engine.addEntity(wallHexagonGrid7)
wallHexagonGrid7.setParent(_scene)
wallHexagonGrid7.addComponentOrReplace(gltfShape4)
const transform64 = new Transform({
  position: new Vector3(0.1561298370361328, 5.5, 4.089244842529297),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670491218566895, 1.115785837173462, 0.3672066330909729)
})
wallHexagonGrid7.addComponentOrReplace(transform64)

const wallHexagonGrid8 = new Entity('wallHexagonGrid8')
engine.addEntity(wallHexagonGrid8)
wallHexagonGrid8.setParent(_scene)
wallHexagonGrid8.addComponentOrReplace(gltfShape4)
const transform65 = new Transform({
  position: new Vector3(0.1561298370361328, 0, 4.089244842529297),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.9670486450195312, 1.115785837173462, 0.3672066926956177)
})
wallHexagonGrid8.addComponentOrReplace(transform65)

const imageFromURL19 = new Entity('imageFromURL19')
engine.addEntity(imageFromURL19)
imageFromURL19.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(0.14492416381835938, 0, 2.125501871109009),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.879132032394409, 4.4635539054870605, 1.0000035762786865)
})
imageFromURL19.addComponentOrReplace(transform66)

const imageFromURL20 = new Entity('imageFromURL20')
engine.addEntity(imageFromURL20)
imageFromURL20.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(0.14492416381835938, 5.5, 2.125501871109009),
  rotation: new Quaternion(9.075116290838494e-16, -0.7071067094802856, 8.429368847373553e-8, 0.7071069478988647),
  scale: new Vector3(3.8791329860687256, 4.4635539054870605, 1.0000038146972656)
})
imageFromURL20.addComponentOrReplace(transform67)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape5)
const transform68 = new Transform({
  position: new Vector3(0.3289966583251953, 4.49171781539917, 4.136586666107178),
  rotation: new Quaternion(-0.5, 0.5, -0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.5100005865097046, 1.0000014305114746, 1)
})
wallPlainGlass4.addComponentOrReplace(transform68)

const imageFromURL21 = new Entity('imageFromURL21')
engine.addEntity(imageFromURL21)
imageFromURL21.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(0.30107688903808594, 0, 2.1171295642852783),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.982856512069702, 4.472198486328125, 1.0000042915344238)
})
imageFromURL21.addComponentOrReplace(transform69)

const imageFromURL22 = new Entity('imageFromURL22')
engine.addEntity(imageFromURL22)
imageFromURL22.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(0.30107688903808594, 5.5, 2.1171295642852783),
  rotation: new Quaternion(3.4995418208113227e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.9828574657440186, 4.472198486328125, 1.000004529953003)
})
imageFromURL22.addComponentOrReplace(transform70)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape5)
const transform71 = new Transform({
  position: new Vector3(0.059474050998687744, 0, 11.876038551330566),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.011278510093689, 2.5086326599121094, 1.0000035762786865)
})
wallPlainGlass7.addComponentOrReplace(transform71)

const outdoorTable3 = new Entity('outdoorTable3')
engine.addEntity(outdoorTable3)
outdoorTable3.setParent(_scene)
const gltfShape7 = new GLTFShape("ea9146e1-5666-40da-80c9-8a3ce23fb979/Table_01/Table_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
outdoorTable3.addComponentOrReplace(gltfShape7)
const transform72 = new Transform({
  position: new Vector3(8.10548210144043, 0, 15.233450889587402),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 0.5, 0.2499999850988388)
})
outdoorTable3.addComponentOrReplace(transform72)

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
script1.spawn(externalLink, {"url":"dotbongbillionaires.com"}, createChannel(channelId, externalLink, channelBus))
script2.spawn(twitterButtonLink, {"url":"dotbongb","bnw":true}, createChannel(channelId, twitterButtonLink, channelBus))
script3.spawn(imageFromURL, {"image":"https://i.imgur.com/k3lj4zF.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script3.spawn(imageFromURL4, {"image":"https://i.imgur.com/PpMxQ6S.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script3.spawn(imageFromURL5, {"image":"https://i.imgur.com/uMfYULu.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script3.spawn(imageFromURL6, {"image":"https://i.imgur.com/PpMxQ6S.jpg"}, createChannel(channelId, imageFromURL6, channelBus))
script3.spawn(imageFromURL7, {"image":"https://i.imgur.com/uMfYULu.jpg"}, createChannel(channelId, imageFromURL7, channelBus))
script3.spawn(imageFromURL8, {"image":"https://i.imgur.com/uMfYULu.jpg"}, createChannel(channelId, imageFromURL8, channelBus))
script3.spawn(imageFromURL9, {"image":"https://i.imgur.com/PpMxQ6S.jpg"}, createChannel(channelId, imageFromURL9, channelBus))
script3.spawn(imageFromURL10, {"image":"https://i.imgur.com/1cuKdy2.jpg"}, createChannel(channelId, imageFromURL10, channelBus))
script4.spawn(radio, {"startOn":true,"volume":1,"onClickText":"DELTA","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"station":"https://cdn.instream.audio/:9069/stream?_=171cd6c2b6e"}, createChannel(channelId, radio, channelBus))
script5.spawn(verticalBluePad, {"distance":7,"speed":5,"autoStart":true,"onReachEnd":[{"entityName":"verticalBluePad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalBluePad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalBluePad, channelBus))
script6.spawn(messageBubble, {"text":"SHOP HERE\n         on \n    wall-link!!","fontSize":17}, createChannel(channelId, messageBubble, channelBus))
script6.spawn(messageBubble2, {"text":" TWEET HERE\n           on \n      wall-link!!","fontSize":17}, createChannel(channelId, messageBubble2, channelBus))
script3.spawn(imageFromURL3, {"image":"https://i.imgur.com/nvPVoZ8.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script3.spawn(imageFromURL23, {"image":"https://i.imgur.com/QcUwFdz.jpg"}, createChannel(channelId, imageFromURL23, channelBus))
script3.spawn(imageFromURL24, {"image":"https://i.imgur.com/UKBrTBD.jpg"}, createChannel(channelId, imageFromURL24, channelBus))
script3.spawn(imageFromURL2, {"image":"https://i.imgur.com/m0PsPsm.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script3.spawn(imageFromURL25, {"image":"https://i.imgur.com/i57SYZ5.jpg"}, createChannel(channelId, imageFromURL25, channelBus))
script3.spawn(imageFromURL26, {"image":"https://i.imgur.com/O63IE2H.jpg"}, createChannel(channelId, imageFromURL26, channelBus))
script3.spawn(imageFromURL27, {"image":"https://i.imgur.com/QcUwFdz.jpg"}, createChannel(channelId, imageFromURL27, channelBus))
script3.spawn(imageFromURL28, {"image":"https://i.imgur.com/sgCcz2y.jpg"}, createChannel(channelId, imageFromURL28, channelBus))
script3.spawn(imageFromURL29, {"image":"https://i.imgur.com/zDfIT0u.jpg"}, createChannel(channelId, imageFromURL29, channelBus))
script3.spawn(imageFromURL30, {"image":"https://i.imgur.com/i57SYZ5.jpg"}, createChannel(channelId, imageFromURL30, channelBus))
script3.spawn(imageFromURL31, {"image":"https://i.imgur.com/bVd0SZd.jpg"}, createChannel(channelId, imageFromURL31, channelBus))
script3.spawn(imageFromURL32, {"image":"https://i.imgur.com/m0PsPsm.jpg"}, createChannel(channelId, imageFromURL32, channelBus))
script3.spawn(imageFromURL33, {"image":"https://i.imgur.com/QcUwFdz.jpg"}, createChannel(channelId, imageFromURL33, channelBus))
script3.spawn(imageFromURL11, {"image":"https://i.imgur.com/QcUwFdz.jpg"}, createChannel(channelId, imageFromURL11, channelBus))
script3.spawn(imageFromURL12, {"image":"https://i.imgur.com/m0PsPsm.jpg"}, createChannel(channelId, imageFromURL12, channelBus))
script3.spawn(imageFromURL13, {"image":"https://i.imgur.com/QcUwFdz.jpg"}, createChannel(channelId, imageFromURL13, channelBus))
script3.spawn(imageFromURL14, {"image":"https://i.imgur.com/bVd0SZd.jpg"}, createChannel(channelId, imageFromURL14, channelBus))
script3.spawn(imageFromURL15, {"image":"https://i.imgur.com/ZBj6ULs.jpg"}, createChannel(channelId, imageFromURL15, channelBus))
script3.spawn(imageFromURL16, {"image":"https://i.imgur.com/sgCcz2y.jpg"}, createChannel(channelId, imageFromURL16, channelBus))
script3.spawn(imageFromURL17, {"image":"https://i.imgur.com/m0PsPsm.jpg"}, createChannel(channelId, imageFromURL17, channelBus))
script3.spawn(imageFromURL18, {"image":"https://i.imgur.com/QcUwFdz.jpg"}, createChannel(channelId, imageFromURL18, channelBus))
script3.spawn(imageFromURL19, {"image":"https://i.imgur.com/QcUwFdz.jpg"}, createChannel(channelId, imageFromURL19, channelBus))
script3.spawn(imageFromURL20, {"image":"https://i.imgur.com/m0PsPsm.jpg"}, createChannel(channelId, imageFromURL20, channelBus))
script3.spawn(imageFromURL21, {"image":"https://i.imgur.com/SNnODUg.jpg"}, createChannel(channelId, imageFromURL21, channelBus))
script3.spawn(imageFromURL22, {"image":"https://i.imgur.com/QcUwFdz.jpg"}, createChannel(channelId, imageFromURL22, channelBus))
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1d45dc17-42d2-4d02-af19-f5528f395b13/src/item"
import Script2 from "../3cf05054-0a57-4b00-ba77-a3f21876494d/src/item"
import Script3 from "../3b6be649-7ad5-4b34-b96f-9a083ae6dbef/src/item"
import Script4 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"

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

const scoreboard = new Entity('scoreboard')
engine.addEntity(scoreboard)
scoreboard.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(0.5, 5.6968793869018555, 8),
  rotation: new Quaternion(-1.0957064045685229e-14, -0.7071067690849304, 8.429369557916289e-8, -0.70710688829422),
  scale: new Vector3(3.7500052452087402, 3, 1.0000017881393433)
})
scoreboard.addComponentOrReplace(transform13)

const blueTable = new Entity('blueTable')
engine.addEntity(blueTable)
blueTable.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(8.054381370544434, 0.07328192889690399, 8),
  rotation: new Quaternion(1.9771354116350417e-15, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5000114440917969, 1.0190190076828003, 2.681312322616577)
})
blueTable.addComponentOrReplace(transform14)
const gltfShape6 = new GLTFShape("af8136bb-c528-4c8c-a986-c352b48241bf/Table_02/Table_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
blueTable.addComponentOrReplace(gltfShape6)

const ropeLight = new Entity('ropeLight')
engine.addEntity(ropeLight)
ropeLight.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(8, 8.106879234313965, 0.20492982864379883),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.141323208808899, 1, 1)
})
ropeLight.addComponentOrReplace(transform15)

const smallCandleGauzeLantern = new Entity('smallCandleGauzeLantern')
engine.addEntity(smallCandleGauzeLantern)
smallCandleGauzeLantern.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(8.103650093078613, 7.261886119842529, 0.2058943659067154),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1.5, 1.5000042915344238)
})
smallCandleGauzeLantern.addComponentOrReplace(transform16)
const gltfShape7 = new GLTFShape("3ea31ee2-9a60-4846-a1f5-c8b14419d8af/ChineseLantern_05/ChineseLantern_05.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
smallCandleGauzeLantern.addComponentOrReplace(gltfShape7)

const smallCandleGauzeLantern2 = new Entity('smallCandleGauzeLantern2')
engine.addEntity(smallCandleGauzeLantern2)
smallCandleGauzeLantern2.setParent(_scene)
smallCandleGauzeLantern2.addComponentOrReplace(gltfShape7)
const transform17 = new Transform({
  position: new Vector3(3.417440414428711, 7.261886119842529, 0.20870476961135864),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1.5, 1.5000096559524536)
})
smallCandleGauzeLantern2.addComponentOrReplace(transform17)

const smallCandleGauzeLantern3 = new Entity('smallCandleGauzeLantern3')
engine.addEntity(smallCandleGauzeLantern3)
smallCandleGauzeLantern3.setParent(_scene)
smallCandleGauzeLantern3.addComponentOrReplace(gltfShape7)
const transform18 = new Transform({
  position: new Vector3(12.650352478027344, 7.261886119842529, 0.20870471000671387),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1.5, 1.500010371208191)
})
smallCandleGauzeLantern3.addComponentOrReplace(transform18)

const smallCandleGauzeLantern4 = new Entity('smallCandleGauzeLantern4')
engine.addEntity(smallCandleGauzeLantern4)
smallCandleGauzeLantern4.setParent(_scene)
smallCandleGauzeLantern4.addComponentOrReplace(gltfShape7)
const transform19 = new Transform({
  position: new Vector3(5.791111469268799, 7.261886119842529, 0.20870442688465118),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000002384185791, 1.5, 1.500010371208191)
})
smallCandleGauzeLantern4.addComponentOrReplace(transform19)

const smallCandleGauzeLantern5 = new Entity('smallCandleGauzeLantern5')
engine.addEntity(smallCandleGauzeLantern5)
smallCandleGauzeLantern5.setParent(_scene)
smallCandleGauzeLantern5.addComponentOrReplace(gltfShape7)
const transform20 = new Transform({
  position: new Vector3(10.26932430267334, 7.261886119842529, 0.20870383083820343),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1.5, 1.5000110864639282)
})
smallCandleGauzeLantern5.addComponentOrReplace(transform20)

const ropeLight2 = new Entity('ropeLight2')
engine.addEntity(ropeLight2)
ropeLight2.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(8, 8.106879234313965, 15.664131164550781),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.141323208808899, 1, 1)
})
ropeLight2.addComponentOrReplace(transform21)

const smallCandleGauzeLantern6 = new Entity('smallCandleGauzeLantern6')
engine.addEntity(smallCandleGauzeLantern6)
smallCandleGauzeLantern6.setParent(_scene)
smallCandleGauzeLantern6.addComponentOrReplace(gltfShape7)
const transform22 = new Transform({
  position: new Vector3(3.417440414428711, 7.261886119842529, 15.667905807495117),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1.5, 1.5000110864639282)
})
smallCandleGauzeLantern6.addComponentOrReplace(transform22)

const smallCandleGauzeLantern7 = new Entity('smallCandleGauzeLantern7')
engine.addEntity(smallCandleGauzeLantern7)
smallCandleGauzeLantern7.setParent(_scene)
smallCandleGauzeLantern7.addComponentOrReplace(gltfShape7)
const transform23 = new Transform({
  position: new Vector3(5.791111469268799, 7.261886119842529, 15.667905807495117),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1.5, 1.5000118017196655)
})
smallCandleGauzeLantern7.addComponentOrReplace(transform23)

const smallCandleGauzeLantern8 = new Entity('smallCandleGauzeLantern8')
engine.addEntity(smallCandleGauzeLantern8)
smallCandleGauzeLantern8.setParent(_scene)
smallCandleGauzeLantern8.addComponentOrReplace(gltfShape7)
const transform24 = new Transform({
  position: new Vector3(8.103650093078613, 7.261886119842529, 15.665095329284668),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1.5, 1.5000057220458984)
})
smallCandleGauzeLantern8.addComponentOrReplace(transform24)

const smallCandleGauzeLantern9 = new Entity('smallCandleGauzeLantern9')
engine.addEntity(smallCandleGauzeLantern9)
smallCandleGauzeLantern9.setParent(_scene)
smallCandleGauzeLantern9.addComponentOrReplace(gltfShape7)
const transform25 = new Transform({
  position: new Vector3(10.26932430267334, 7.261886119842529, 15.6679048538208),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1.5, 1.5000125169754028)
})
smallCandleGauzeLantern9.addComponentOrReplace(transform25)

const smallCandleGauzeLantern10 = new Entity('smallCandleGauzeLantern10')
engine.addEntity(smallCandleGauzeLantern10)
smallCandleGauzeLantern10.setParent(_scene)
smallCandleGauzeLantern10.addComponentOrReplace(gltfShape7)
const transform26 = new Transform({
  position: new Vector3(12.650352478027344, 7.261886119842529, 15.667905807495117),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1.5, 1.5000118017196655)
})
smallCandleGauzeLantern10.addComponentOrReplace(transform26)

const simpleChair = new Entity('simpleChair')
engine.addEntity(simpleChair)
simpleChair.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(5.4029459953308105, 0.07328192889690399, 6.484048843383789),
  rotation: new Quaternion(-1.096675262029416e-15, 0.9002289772033691, -1.0731564970001273e-7, 0.43541696667671204),
  scale: new Vector3(1.7026140689849854, 0.9831745028495789, 1.3608938455581665)
})
simpleChair.addComponentOrReplace(transform27)
const gltfShape8 = new GLTFShape("d9eb4464-55fe-4b35-9933-246b2a423793/Chair_03/Chair_03.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
simpleChair.addComponentOrReplace(gltfShape8)

const simpleChair2 = new Entity('simpleChair2')
engine.addEntity(simpleChair2)
simpleChair2.setParent(_scene)
simpleChair2.addComponentOrReplace(gltfShape8)
const transform28 = new Transform({
  position: new Vector3(7.119312763214111, 0.07328192889690399, 6.2377705574035645),
  rotation: new Quaternion(8.985245036343629e-15, 0.7359524965286255, -8.773236714887389e-8, 0.6770331859588623),
  scale: new Vector3(1.6571459770202637, 0.9831745028495789, 1.3966583013534546)
})
simpleChair2.addComponentOrReplace(transform28)

const simpleChair3 = new Entity('simpleChair3')
engine.addEntity(simpleChair3)
simpleChair3.setParent(_scene)
simpleChair3.addComponentOrReplace(gltfShape8)
const transform29 = new Transform({
  position: new Vector3(8.64297866821289, 0.07328192889690399, 5.66210412979126),
  rotation: new Quaternion(9.885514851365809e-15, 0.9109900593757629, -1.0859849197686344e-7, -0.4124282896518707),
  scale: new Vector3(1.7086117267608643, 0.9831745028495789, 1.3561780452728271)
})
simpleChair3.addComponentOrReplace(transform29)

const simpleChair4 = new Entity('simpleChair4')
engine.addEntity(simpleChair4)
simpleChair4.setParent(_scene)
simpleChair4.addComponentOrReplace(gltfShape8)
const transform30 = new Transform({
  position: new Vector3(10.217609405517578, 0.07328192889690399, 6.267442226409912),
  rotation: new Quaternion(-3.421338868681359e-14, -0.903877854347229, 1.0775062975199035e-7, -0.42779070138931274),
  scale: new Vector3(1.704603672027588, 0.9831745028495789, 1.3593367338180542)
})
simpleChair4.addComponentOrReplace(transform30)

const outdoorChair = new Entity('outdoorChair')
engine.addEntity(outdoorChair)
outdoorChair.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(10.055240631103516, 0, 4.404974460601807),
  rotation: new Quaternion(5.662569835907872e-16, -0.35649818181991577, 4.249789142818372e-8, 0.9342960715293884),
  scale: new Vector3(0.8976744413375854, 1.0695372819900513, 1.4135234355926514)
})
outdoorChair.addComponentOrReplace(transform31)
const gltfShape9 = new GLTFShape("8707b21f-e3a0-4d8b-8da0-60d8927de229/Chair_07/Chair_07.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
outdoorChair.addComponentOrReplace(gltfShape9)

const imageURLNSFW = new Entity('imageURLNSFW')
engine.addEntity(imageURLNSFW)
imageURLNSFW.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(15.544174194335938, 5.047489643096924, 7.972203254699707),
  rotation: new Quaternion(-2.3634959379979347e-15, 0.7094048857688904, -8.456764533093519e-8, -0.7048011422157288),
  scale: new Vector3(3.701324939727783, 3.0147268772125244, 1.0001096725463867)
})
imageURLNSFW.addComponentOrReplace(transform32)

const simpleChair5 = new Entity('simpleChair5')
engine.addEntity(simpleChair5)
simpleChair5.setParent(_scene)
simpleChair5.addComponentOrReplace(gltfShape8)
const transform33 = new Transform({
  position: new Vector3(5.4029459953308105, 0.07328192889690399, 10.098552703857422),
  rotation: new Quaternion(-1.1859736046145822e-14, 0.819839596748352, -9.773247455768796e-8, -0.5725933909416199),
  scale: new Vector3(1.6705557107925415, 0.9831745028495789, 1.3861169815063477)
})
simpleChair5.addComponentOrReplace(transform33)

const simpleChair6 = new Entity('simpleChair6')
engine.addEntity(simpleChair6)
simpleChair6.setParent(_scene)
simpleChair6.addComponentOrReplace(gltfShape8)
const transform34 = new Transform({
  position: new Vector3(6.955539703369141, 0.3837960958480835, 10.266435623168945),
  rotation: new Quaternion(0.3949500322341919, 0.5832798480987549, -0.38729128241539, -0.5948147177696228),
  scale: new Vector3(1.2398484945297241, 1.3326677083969116, 1.3971303701400757)
})
simpleChair6.addComponentOrReplace(transform34)

const simpleChair7 = new Entity('simpleChair7')
engine.addEntity(simpleChair7)
simpleChair7.setParent(_scene)
simpleChair7.addComponentOrReplace(gltfShape8)
const transform35 = new Transform({
  position: new Vector3(8.495035171508789, 0.3837960958480835, 10.266435623168945),
  rotation: new Quaternion(0.3949500322341919, 0.5832798480987549, -0.38729128241539, -0.5948147177696228),
  scale: new Vector3(1.2398484945297241, 1.3326692581176758, 1.3971309661865234)
})
simpleChair7.addComponentOrReplace(transform35)

const simpleChair8 = new Entity('simpleChair8')
engine.addEntity(simpleChair8)
simpleChair8.setParent(_scene)
simpleChair8.addComponentOrReplace(gltfShape8)
const transform36 = new Transform({
  position: new Vector3(10.217609405517578, 0.07328192889690399, 9.674249649047852),
  rotation: new Quaternion(-1.4762908438574994e-14, -0.7854153513908386, 9.362882735786116e-8, 0.6189691424369812),
  scale: new Vector3(1.6628843545913696, 0.9831745028495789, 1.3921538591384888)
})
simpleChair8.addComponentOrReplace(transform36)

const outdoorChair3 = new Entity('outdoorChair3')
engine.addEntity(outdoorChair3)
outdoorChair3.setParent(_scene)
outdoorChair3.addComponentOrReplace(gltfShape9)
const transform37 = new Transform({
  position: new Vector3(13.235986709594727, 0, 1.5992136001586914),
  rotation: new Quaternion(1.2465786002323906e-15, -0.2769654095172882, 3.3016846145983436e-8, 0.960879921913147),
  scale: new Vector3(0.8854403495788574, 1.0695372819900513, 1.432809591293335)
})
outdoorChair3.addComponentOrReplace(transform37)

const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(14.886859893798828, 2.1016666889190674, 15.174051284790039),
  rotation: new Quaternion(-2.859178242302612e-16, 0.38746100664138794, -4.618894777763671e-8, 0.9218860864639282),
  scale: new Vector3(3.06477689743042, 2.356579542160034, 0.9999999403953552)
})
ambientSound.addComponentOrReplace(transform38)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script1.spawn(scoreboard, {"initialVal":17,"threshold":21,"enabled":true,"onThreshold":[{"entityName":"scoreboard","actionId":"increase","values":{}}]}, createChannel(channelId, scoreboard, channelBus))
script2.spawn(ropeLight, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight, channelBus))
script2.spawn(ropeLight2, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight2, channelBus))
script3.spawn(imageURLNSFW, {"image":"https://i.imgur.com/1cuKdy2.jpg","nsfw":false}, createChannel(channelId, imageURLNSFW, channelBus))
script4.spawn(ambientSound, {"sound":"Birds","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
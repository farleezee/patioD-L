export type Props = {
clickable,
onActivate?
}
/// click to hear siren, click again for siren to stop

export default class Door implements IScript<Props> {
  Clip = new AudioClip("4e57232a-6325-42c2-b863-1b527f54ecf5/sounds/EDMLoop.mp3")
  

  active: Record<string, boolean> = {}

  init() {}

toggle(entity: Entity) {
 
    const source = new AudioSource(this.Clip)
    entity.addComponentOrReplace(source)
    source.playing = true
}


  spawn(host: Entity, props: Props, channel: IChannel) {
    const car = new Entity(host.name + "-button")
    car.setParent(host)

    

    car.addComponent(new GLTFShape("4e57232a-6325-42c2-b863-1b527f54ecf5/models/Record_Player.glb"))

    if(props.clickable){
      car.addComponent(
          new OnPointerDown(() => {
            const activateAction = channel.createAction('activate', {})
            channel.sendActions([activateAction])
          })
        )
  }


    // handle actions
    channel.handleAction("activate", ({ sender }) => {
      this.toggle(car)
      if (sender === channel.id) {
        channel.sendActions(props.onActivate)
      }
    })
   
  }
}

    // sync initial values

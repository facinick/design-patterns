interface Door {
  open(): void
  close(): void
}

class GarageDoor implements Door {
  open(): void {
    console.log(`open`)
  }
  close(): void {
    console.log(`close`)
  }
}

class HallDoor implements Door {
  open(): void {
    console.log(`open`)
  }
  close(): void {
    console.log(`close`)
  }
}

class RoomDoor implements Door {
  open(): void {
    console.log(`open`)
  }
  close(): void {
    console.log(`close`)
  }
}

export default Door
export {
  GarageDoor,
  HallDoor,
  RoomDoor,
}
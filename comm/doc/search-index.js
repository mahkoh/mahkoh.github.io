var searchIndex = {};
searchIndex['comm'] = {"items":[[0,"","comm","Communication primitives."],[4,"Error","","Errors that can happen during receiving and sending."],[13,"Disconnected","","",0],[13,"Full","","",0],[13,"Empty","","",0],[13,"Deadlock","","",0],[0,"arc","","Fork of the `arc` module in the rust stdlib."],[3,"Arc","comm::arc",""],[3,"Weak","",""],[3,"ArcTrait","","An atomically reference counted wrapper of a trait object."],[3,"WeakTrait","","A weak pointer to an `ArcTrait`."],[11,"new","","",1],[11,"downgrade","","",1],[11,"as_trait","","Creates an ArcTrait from an Arc. `t` must be a trait object created by calling\n`&*self as &(Trait+'static)`. Otherwise the behavior is undefined.",1],[11,"weak_count","","",1],[11,"strong_count","","",1],[11,"unique_id","","Returns a unique id shared among all clones of this `Arc`.",1],[11,"clone","","",1],[6,"Target","",""],[11,"deref","","",1],[11,"drop","","",1],[11,"upgrade","","",2],[11,"weak_count","","",2],[11,"strong_count","","",2],[11,"unique_id","","Returns a unique id shared among all clones of this `Arc`.",2],[11,"clone","","",2],[11,"drop","","",2],[11,"fmt","","",1],[11,"downgrade","","",3],[11,"weak_count","","",3],[11,"strong_count","","",3],[11,"unique_id","","Returns a unique id shared among all clones of this `Arc`.",3],[11,"clone","","",3],[6,"Target","",""],[11,"deref","","",3],[11,"drop","","",3],[11,"upgrade","","",4],[11,"weak_count","","",4],[11,"strong_count","","",4],[11,"unique_id","","Returns a unique id shared among all clones of this `Arc`.",4],[11,"clone","","",4],[11,"drop","","",4],[0,"select","comm","A structure for polling channels and other objects."],[3,"Select","comm::select","Container for all targets being selected on."],[3,"WaitQueue","","A structure stored by `Selectable` objects to interact with `Select` objects that want\nto be notified when the `Selectable` object becomes ready."],[3,"Payload","","Container passed from the `Select` object to a `WaitQueue`."],[11,"new","","Creates a new `Select` object.",5],[11,"add","","Adds a target to the select object.",5],[11,"remove","","Removes a target from the `Select` object. Returns `true` if the target was\npreviously registered in the `Select` object, `false` otherwise.",5],[11,"wait","","Waits for any of the targets in the `Select` object to become ready. The ids of\nthe ready targets will be stored in `ready`. Returns the prefix containing the set\nof stored `ids`.",5],[11,"wait_timeout","","Waits for any of the targets in the `Select` object to become ready. The semantics\nare as for the `wait` function except that",5],[11,"new","","Creates a new `WaitQueue`. This function does not allocate.",6],[11,"set_id","","Sets the `id` of the `Selectable` object containing the `WaitQueue`. This id must\nbe the id returned by `Selectable::as_selectable().unique_id()`. This function\nmust be called with the correct id before any other functions are called.",6],[11,"add","","Add a `Select` object to the `WaitQueue`. Returns the number of `Select` objects\ncontained in the `WaitQueue` after this call.",6],[11,"remove","","Removes a `Select` object from the `WaitQueue`. Returns the number of `Select`\nobjects contained in the `WaitQueue` after this call.",6],[11,"notify","","Notifies all `Select` objects contained in this `WaitQueue` that the `Selectable`\nobject has become ready. Returns the number of `Select` objects contained in the\n`WaitQueue` after this call. This function might remove `Select` objects from the\n`WaitQueue`.",6],[11,"clear","","Removes all `Select` objects from this wait queue and signals them that the\n`Selectable` object will no longer be available. This happens automatically when\nthe `WaitQueue` is dropped.",6],[11,"drop","","",6],[8,"Selectable","","An object that can be selected on."],[10,"id","","Returns the id stored by `Select::wait` when this object is ready.",7],[10,"as_selectable","","Returns the interior object that will be stored in the `Select` object.",7],[8,"_Selectable","","The object that will be stored in a `Select` structure while the `Selectable` object\nis registered."],[10,"ready","","Returns `true` if the object is ready, `false` otherwise.",8],[10,"register","","Registers a `Select` object with the `Selectable` object. The payload must be\npassed to the `WaitQueue`.",8],[10,"unregister","","Unregisters a `Select` objects from the `Selectable` object. The id must be passed\nto the `WaitQueue`.",8],[0,"spsc","comm","Single-producer single-consumer (SPSC) channels."],[0,"one_space","comm::spsc","An SPSC channel with a buffer size of one."],[3,"Producer","comm::spsc::one_space","The producing half of an SPSC one space channel."],[3,"Consumer","","The consuming half of an SPSC one space channel."],[5,"new","","Creates a new SPSC one space channel."],[11,"send","","Sends a message over this channel. Doesn't block if the channel is full.",9],[11,"drop","","",9],[11,"recv_async","","Receives a message from this channel. Doesn't block if the channel is empty.",10],[11,"recv_sync","","Receives a message over this channel. Blocks if the channel is empty.",10],[11,"can_recv","","Returns whether the channel is non-empty.",10],[11,"drop","","",10],[11,"id","","",10],[11,"as_selectable","","",10],[0,"bounded","comm::spsc","A bounded SPSC channel."],[3,"Producer","comm::spsc::bounded","The producing half of a bounded SPSC channel."],[3,"Consumer","","The consuming half of a bounded SPSC channel."],[5,"new","","Creates a new bounded SPSC channel."],[11,"send_sync","","Sends a message over the channel. Blocks if the buffer is full.",11],[11,"send_async","","Sends a message over the channel. Does not block if the buffer is full.",11],[11,"drop","","",11],[11,"recv_sync","","Receives a message over this channel. Blocks until a message is available.",12],[11,"recv_async","","Receives a message over this channel. Does not block if no message is available.",12],[11,"drop","","",12],[11,"id","","",12],[11,"as_selectable","","",12],[0,"ring_buf","comm::spsc","A bounded SPSC channel that overwrites older messages when the buffer is full."],[3,"Producer","comm::spsc::ring_buf","The producing half of an SPSC ring buffer channel."],[3,"Consumer","","The sending half of an SPSC channel."],[5,"new","","Creates a new SPSC ring buffer channel."],[11,"send","","Sends a message over this channel. Returns an older message if the buffer is full.",13],[11,"drop","","",13],[11,"recv_sync","","Receives a message from the channel. Blocks if the buffer is empty.",14],[11,"recv_async","","Receives a message from the channel. Does not block if the buffer is empty.",14],[11,"drop","","",14],[11,"id","","",14],[11,"as_selectable","","",14],[0,"unbounded","comm::spsc","An unbounded SPSC channel."],[3,"Producer","comm::spsc::unbounded","The producing half on an unbounded SPSC channel."],[3,"Consumer","","The consuming half on an unbounded SPSC channel."],[5,"new","","Creates a new unbounded SPSC channel."],[11,"send","","Appends a new message to the channel.",15],[11,"drop","","",15],[11,"recv_sync","","Receives a message from the channel. Blocks if the channel is empty.",16],[11,"recv_async","","Receives a message from the channel. Does not block if the channel is empty.",16],[11,"drop","","",16],[11,"id","","",16],[11,"as_selectable","","",16],[0,"spmc","comm","Single-producer multiple-consumers (SPMC) channels."],[0,"unbounded","comm::spmc","An unbounded SPMC channel."],[3,"Producer","comm::spmc::unbounded","The producing end of an unbounded SPMC channel."],[3,"Consumer","","The receiving end of an unbounded SPMC channel."],[5,"new","","Creates a new unbounded SPMC channel."],[11,"send","","Appends a message to the channel.",17],[11,"drop","","",17],[11,"recv_sync","","Receives a message from the channel. Blocks if the channel is empty.",18],[11,"recv_async","","Receives a message from the channel. Does not block if the channel is empty.",18],[11,"clone","","",18],[11,"drop","","",18],[11,"id","","",18],[11,"as_selectable","","",18],[0,"bounded_fast","comm::spmc","A bounded SPMC channel."],[3,"Producer","comm::spmc::bounded_fast","A producer of a bounded SPMC channel."],[3,"Consumer","","A consumer of a bounded SPMC channel."],[5,"new","","Creates a new bounded MPMC channel with capacity at least `cap`."],[11,"send_sync","","Sends a message over the channel. Blocks if the channel is full.",19],[11,"send_async","","Sends a message over the channel. Does not block if the channel is full.",19],[11,"drop","","",19],[11,"recv_sync","","Receives a message from the channel. Blocks if the channel is empty.",20],[11,"recv_async","","Receives a message over the channel. Does not block if the channel is empty.",20],[11,"clone","","",20],[11,"drop","","",20],[11,"id","","",20],[11,"as_selectable","","",20],[0,"mpsc","comm","Multiple-producers single-consumer (MPSC) channels."],[0,"unbounded","comm::mpsc","An unbounded MPSC channel."],[3,"Producer","comm::mpsc::unbounded","The producing end of an unbounded MPSC channel."],[3,"Consumer","","The consuming end of an unbounded MPSC channel."],[5,"new","","Creates a new unbounded MPSC channel."],[11,"send","","Appends a message to the channel.",21],[11,"clone","","",21],[11,"drop","","",21],[11,"recv_sync","","Receives a message from this channel. Blocks if the channel is empty.",22],[11,"recv_async","","Receives a message from this channel. Does not block if the channel is empty.",22],[11,"drop","","",22],[11,"id","","",22],[11,"as_selectable","","",22],[0,"bounded_fast","comm::mpsc","A bounded MPSC channel."],[3,"Producer","comm::mpsc::bounded_fast","A producer of a bounded MPSC channel."],[3,"Consumer","","A consumer of a bounded SPMC channel."],[5,"new","","Creates a new bounded MPSC channel with capacity at least `cap`."],[11,"send_sync","","Sends a message over the channel. Blocks if the channel is full.",23],[11,"send_async","","Sends a message over the channel. Does not block if the channel is full.",23],[11,"drop","","",23],[11,"clone","","",23],[11,"recv_sync","","Receives a message from the channel. Blocks if the channel is empty.",24],[11,"recv_async","","Receives a message over the channel. Does not block if the channel is empty.",24],[11,"drop","","",24],[11,"id","","",24],[11,"as_selectable","","",24],[0,"mpmc","comm","Multiple-producers multiple-consumers (MPMC) channels."],[0,"bounded","comm::mpmc","A bounded MPMC channel."],[3,"Channel","comm::mpmc::bounded","An endpoint of a bounded MPMC channel."],[11,"new","","Creates a new bounded MPMC channel with capacity at least `cap`.",25],[11,"send_sync","","Sends a message over the channel. Blocks if the channel is full.",25],[11,"send_async","","Sends a message over the channel. Does not block if the channel is full.",25],[11,"recv_sync","","Receives a message from the channel. Blocks if the channel is empty.",25],[11,"recv_async","","Receives a message over the channel. Does not block if the channel is empty.",25],[11,"clone","","",25],[11,"drop","","",25],[11,"id","","",25],[11,"as_selectable","","",25],[11,"eq","comm","",0],[11,"ne","","",0],[11,"clone","","",0],[11,"fmt","","",0]],"paths":[[4,"Error"],[3,"Arc"],[3,"Weak"],[3,"ArcTrait"],[3,"WeakTrait"],[3,"Select"],[3,"WaitQueue"],[8,"Selectable"],[8,"_Selectable"],[3,"Producer"],[3,"Consumer"],[3,"Producer"],[3,"Consumer"],[3,"Producer"],[3,"Consumer"],[3,"Producer"],[3,"Consumer"],[3,"Producer"],[3,"Consumer"],[3,"Producer"],[3,"Consumer"],[3,"Producer"],[3,"Consumer"],[3,"Producer"],[3,"Consumer"],[3,"Channel"]]};
initSearch(searchIndex);

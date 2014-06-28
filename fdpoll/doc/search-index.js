var searchIndex = {};
searchIndex['fdpoll'] = {"items":[[0,"","fdpoll","A library for integrating native file descriptors into the Rust select pattern."],[1,"epoll_event","",""],[11,"events","","",0],[11,"data","","",0],[1,"Events","","Container for the events made available by the last wait."],[11,"lock","","",1],[1,"FDPoll","","Poll set."],[11,"rcv","","",2],[11,"running","","",2],[11,"sem","","",2],[11,"epfd","","",2],[11,"events","","",2],[11,"abort","","",2],[11,"stop","","",2],[2,"Error","","Possible errors."],[12,"Waiting","","Modification of the set failed because it's currently waiting for events.",3],[12,"Resources","","Out of resources or some other error not specified here.",3],[12,"Signal","","`wait` was interrupted by a signal.",3],[12,"BadFD","","Invalid file descriptor.",3],[12,"Exists","","`add` was called with a file descriptor already in the set.",3],[12,"DoesntExist","","`move` or `del` was called with a file descriptor not in the set.",3],[12,"Unsupported","","The file descriptor doesn't support this operation.",3],[12,"NoPermission","","The process doesn't have the permission to perform this action.",3],[2,"Type","","Watch types."],[12,"Read","","Wait for the descriptor to become read-ready.",4],[12,"Write","","Wait for the descriptor to become write-ready.",4],[12,"ReadWrite","","Wait for the descriptor to become write- or read-ready.",4],[4,"Event","","A single event."],[10,"fmt","","",3],[10,"fd","","Returns the file descriptor of this event.",0],[10,"read","","Returns if the file descriptor is readable.",0],[10,"write","","Returns if the file descriptor is writable.",0],[10,"slice","","Get the events create by the last wait.",1],[10,"new","","Create a new set that can handle at most `max` events at the same time.",2],[10,"abort","","Abort the current `wait()`.\n \nReturns `Err` if `wait()` isn't running.",2],[10,"events","","Return the container containing the events generated by the last `wait()`.",2],[10,"wait","","Start the wait process.",2],[10,"add","","Add a file descriptor to the set.",2],[10,"modify","","Modify a file descriptor in the set.",2],[10,"delete","","Remove a file descriptor from the set.",2],[10,"drop","","",2]],"paths":[[1,"epoll_event"],[1,"Events"],[1,"FDPoll"],[2,"Error"],[2,"Type"]]};
initSearch(searchIndex);

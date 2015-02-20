var searchIndex = {};
searchIndex['dns2'] = {"items":[[0,"","dns2","Rudimentary DNS library."],[3,"Packet","","A DNS packet."],[12,"id","","ID of the packet.",0],[12,"is_query","","Set if this is a query.",0],[12,"kind","","Kind of the query.",0],[12,"is_authoritative","","Set if the answer is authoritative.",0],[12,"truncated","","Set if the packet has been truncated.",0],[12,"recursion_desired","","Set if recursion is desired for this question.",0],[12,"recursion_available","","Set if recursion is available.",0],[12,"response_code","","Response code.",0],[12,"question","","Questions.",0],[12,"answer","","Answers.",0],[12,"authority","","Pointers to authorities.",0],[12,"additional","","Additional information.",0],[3,"Question","","A question."],[12,"name","","Domain name.",1],[12,"ty","","Question type.",1],[12,"class","","Question class.",1],[3,"Record","","A record."],[12,"name","","Domain name.",2],[12,"class","","Class.",2],[12,"time_to_live","","Time to live.",2],[12,"data","","Data.",2],[4,"FormatError","","An error that can occur during formatting."],[13,"Size","","The size of the packet would exceed 512 bytes.",3],[13,"Buffer","","The buffer is too small. The argument is the required buffer size.",3],[13,"Label","","One of the domain labels is larger than 63 bytes.",3],[13,"String","","A character string is larger than 255 bytes.",3],[4,"QueryKind","","The kind of the query."],[13,"Standard","","Standard query.",4],[13,"Inverse","","Inverse query.",4],[13,"Status","","Server status request.",4],[4,"ResponseCode","","The response code."],[13,"Ok","","No error.",5],[13,"FormatError","","Format error.",5],[13,"ServerFailure","","Server failure.",5],[13,"NameError","","Name error.",5],[13,"NotImplemented","","Not implemented.",5],[13,"Refused","","Refused.",5],[4,"Type","","Type of the record or question."],[13,"A","","IPv4 address.",6],[13,"Aaaa","","IPv6 address.",6],[13,"Mx","","Mail exchange.",6],[13,"Ptr","","Pointer to a domain name.",6],[13,"Rp","","Responsible person.",6],[13,"Txt","","Text.",6],[13,"All","","All.",6],[4,"Class","","Class of the request."],[13,"In","","Internet.",7],[13,"All","","All.",7],[4,"Data","","Record data."],[13,"A","","IPv4 address.",8],[13,"Aaaa","","IPv6 address.",8],[13,"Mx","","Mail exchange.",8],[13,"Ptr","","Pointer to a domain name.",8],[13,"Rp","","Responsible person.",8],[13,"Txt","","Text.",8],[0,"toy","","Toy DNS API. Only available on linux."],[5,"nameservers","dns2::toy","Retrieves a list of nameservers from the OS."],[5,"ips","","Queries a nameserver for the A and AAAA records of this hostname."],[5,"query","","Queries a nameserver for the data with type `ty`."],[11,"fmt","dns2","",0],[11,"eq","","",0],[11,"ne","","",0],[11,"clone","","",0],[11,"parse","","Parses the bytes in src as a DNS packet.",0],[11,"format","","Formats the packet into the provided buffer.",0],[11,"query","","Creates a new packet that has all header values preset for a query.",0],[11,"fmt","","",3],[11,"eq","","",3],[11,"ne","","",3],[11,"clone","","",3],[11,"fmt","","",4],[11,"eq","","",4],[11,"ne","","",4],[11,"clone","","",4],[11,"fmt","","",5],[11,"eq","","",5],[11,"ne","","",5],[11,"clone","","",5],[11,"fmt","","",6],[11,"eq","","",6],[11,"ne","","",6],[11,"clone","","",6],[11,"fmt","","",7],[11,"eq","","",7],[11,"ne","","",7],[11,"clone","","",7],[11,"fmt","","",1],[11,"eq","","",1],[11,"ne","","",1],[11,"clone","","",1],[11,"fmt","","",2],[11,"eq","","",2],[11,"ne","","",2],[11,"clone","","",2],[11,"fmt","","",8],[11,"eq","","",8],[11,"ne","","",8],[11,"clone","","",8],[11,"to_type","","Returns the type of the data.",8],[14,"trycvt!","",""]],"paths":[[3,"Packet"],[3,"Question"],[3,"Record"],[4,"FormatError"],[4,"QueryKind"],[4,"ResponseCode"],[4,"Type"],[4,"Class"],[4,"Data"]]};
initSearch(searchIndex);

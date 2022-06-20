initSidebarItems({"enum":[["OutOfSpecKind","The different types of errors that reading from IPC can cause"],["StreamState","Encodes the stream’s status after each read."]],"fn":[["deserialize_schema","Deserialize an flatbuffers-encoded Schema message into [`Schema`] and [`IpcSchema`]."],["read_batch","Reads the record batch at position `index` from the reader."],["read_dictionary","Read the dictionary from the buffer and provided metadata, updating the `dictionaries` with the resulting dictionary"],["read_file_dictionaries","Reads all file’s dictionaries, if any This function is IO-bounded"],["read_file_metadata","Read the Arrow IPC file’s metadata"],["read_record_batch","Creates a record batch from binary data using the `ipc::RecordBatch` indexes and the `Schema`"],["read_stream_metadata","Reads the metadata of the stream"]],"struct":[["FileMetadata","Metadata of an Arrow IPC file, written in the footer of the file."],["FileReader","Arrow File reader"],["StreamMetadata","Metadata of an Arrow IPC stream, written at the start of the stream"],["StreamReader","Arrow Stream reader."]],"type":[["Dictionaries","how dictionaries are tracked in this crate"]]});
class Algorithms{
    static shuffle (array) {
    var i = 0
        , j = 0
        , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
		}
	}
}enum QuestionCategory{

	ALL_TOPICS,
	ORACLE_AND_STRUCTURED_QUERY_LANGUAGE,
	RESTRICTING_AND_SORTING_DATA,
	USING_SINGLE_ROW_FUNCTIONS_TO_CUSTOMIZE_OUTPUT,
	USING_CONVERSION_FUNCTIONS_AND_CONDITIONAL_EXPRESSIONS,
	REPORTING_AGGREGATED_DATA_USING_THE_GROUP_FUNCTIONS,
	DISPLAYING_DATA_FROM_MULTIPLE_TABLES,
	USING_SUBQUERIES_TO_SOLVE_QUERIES,
	USING_THE_SET_OPERATORS,
	MANIPULATING_DATA,
	USING_DDL_STATEMENTS_TO_CREATE_AND_MANAGE_TABLES,
	MANAGING_OBJECTS_WITH_DATA_DICTIONARY_VIEWS,
	CONTROLLING_USER_ACCESS,
	MANAGING_SCHEMA_OBJECTS,
	MANIPULATING_LARGE_DATA_SETS

}
class Question{
    private answers: string[] = new Array();
    private question: string;
    private correctAnswerIndexes: boolean[] = new Array();
	private category: QuestionCategory;
	
    constructor(question: string, category: QuestionCategory){
        this.question = question;
		this.category = category;
    }

    addAnswer(answer: string, correct: boolean){
        this.correctAnswerIndexes.push(correct);
        this.answers.push(answer);
    }

    getCorrectAnswerIndex():boolean[]{
        return this.correctAnswerIndexes;
    }

    getAnswers(): string[]{
        return this.answers;
    }

    getQuestion(): string{
        return this.question;
    }
	
	getCategory(): QuestionCategory{
        return this.category;
    }
	
    randomize() {
        var i = 0
            , j = 0
            , temp = null
            , temp2 = null

        for (i = this.answers.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = this.answers[i]
            temp2 = this.correctAnswerIndexes[i]

            this.answers[i] = this.answers[j]
            this.correctAnswerIndexes[i] = this.correctAnswerIndexes[j]

            this.answers[j] = temp
            this.correctAnswerIndexes[j] = temp2

        }
    }	

	static fromJSON(obj: any): Question{
		var question: Question = new Question(obj.question, obj.category);
		for(var answerIDX in obj.answers){
			var eachAnswer = obj.answers[answerIDX];
			question.addAnswer(eachAnswer, obj.correctAnswerIndexes[answerIDX]);
        }
        question.randomize();
		return question;
	}
	
	static fromJSONArray(obj: any, category: QuestionCategory): Question[]{
		var result = new Array();
		for(var idx in obj){
			var question = Question.fromJSON(obj[idx]);
			if(category == QuestionCategory.ALL_TOPICS){
				result.push(Question.fromJSON(obj[idx]));
			}
			else if(question.getCategory() == category){
				result.push(Question.fromJSON(obj[idx]));
			}
		}
		return result;
	}
}var QuestionDatabase =

[
// Chapter 1
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"SELECT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"INSERT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"UPDATE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"DELETE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[true,false,false],"question":"MERGE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"CREATE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"ALTER is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"DROP is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"RENAME is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"TRUNCATE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"GRANT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"REVOKE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"FLASHBACK is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"PURGE is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,true,false],"question":"COMMENT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,false,true],"question":"COMMIT is a _____ type of SQL command."},
{"answers":["DML","DDL","TCL"],"correctAnswerIndexes":[false,false,true],"question":"ROLLBACK is a _____ type of SQL command."},
{"answers":["SELECT","UPDATE","ALTER","CREATE","GRANT"],"correctAnswerIndexes":[false,false,false,true,false],"question":"Which SQL command is used to instantiate a new database object, such as a user, table, view, index, or synonym?","category":0},
{"answers":["SELECT","UPDATE","ALTER","CREATE","GRANT"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to modify an existing database object's structure or attributes?","category":0},
{"answers":["DELETE","DROP","ALTER","PURGE","REVOKE","ROLLBACK"],"correctAnswerIndexes":[false,true,false,false,false,false],"question":"Which SQL command is used to remove an object from the database?","category":0},
{"answers":["SELECT","UPDATE","ALTER","CREATE","GRANT"],"correctAnswerIndexes":[false,false,false,true,false],"question":"Which SQL command is used to instantiate a new database object, such as a user, table, view, index, or synonym?","category":0},
{"answers":["SELECT","UPDATE","ALTER","CREATE","GRANT"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to modify an existing database object's structure or attributes?","category":0},
{"answers":["DELETE","DROP","PURGE","ALTER","ROLLBACK"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command is used to remove an object from the database?","category":0},
{"answers":["ALTER","UPDATE","RENAME","COMMENT","CREATE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to alter the name of an existing database object?","category":0},
{"answers":["TRUNCATE","DELETE","ROLLBACK","DROP","PURGE"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Which SQL command is used to immediately remove all records from a table, partition or subpartition?","category":0},
{"answers":["REVOKE","ALTER","CREATE","SELECT","GRANT"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Which SQL command is used to provide privileges, or rights, to user objects?","category":0},
{"answers":["DELETE","TRUNCATE","REVOKE","DROP","REMOVE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to remove privileges that have been issued to a user object?","category":0},
{"answers":["RESTORE","FLASHBACK","ROLLBACK","UPDATE","REVERT"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command is used to restore a table or database to a previous version?","category":0},
{"answers":["TRUNCATE","EMPTY","PURGE","DROP","COMMIT"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command is used to irreversibly remove an object from the recycle bin?","category":0},
{"answers":["ALTER","COMMENT","UPDATE","REFERENCE","ANNOTATE"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command is used to add a comment to the data dictionary for a database object?","category":0},
{"answers":["INSERT","DATA","SELECT","SHOW","DISPLAY"],"correctAnswerIndexes":[false,false,false,false,false],"question":"Which SQL command is used to display data in a table or view?","category":0},
{"answers":["CREATE","INSERT","ALERT","UPDATE","ROW"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command is used to add new rows to a table?","category":0},
{"answers":["UPDATE","ALTER","MODIFY","INSERT","RENAME"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Which SQL command modifies existing rows in a table?","category":0},
{"answers":["TRUNCATE","DROP","DELETE","REMOVE","PURGE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command iteratively removes a subset of existing rows from a table, as optionally defined by a WHERE clause?","category":0},
{"answers":["UPDATE","INSERT","ALTER","MERGE","DELETE"],"correctAnswerIndexes":[false,false,false,true,false],"question":"Which SQL command selects rows from one or more sources for update, insertion, or exclusion into a table?","category":0},
{"answers":["SAVE","SAVEPOINT","COMMIT","ROLLBACK","EXECUTE IMMEDIATE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which SQL command saves the set of DML statements executed in the current database session?","category":0},
{"answers":["DELETE","FLASHBACK","REVOKE","RESET","ROLLBACK"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Which SQL command revokes the set of DML statements executed in the current databse session?","category":0},
{"answers":["FLASHBACK","SAVEPOINT","COMMIT","TRANSACTION","ROLLBACK"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Which SQL command marks a position in the current session to which a future ROLLBACK will revert?","category":0},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A CONSTRAINT is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A SEQUENCE is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"An INDEX is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A PRIVATE SYNONYM is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A TABLE is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[true,false],"question":"A VIEW is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[false,true],"question":"A ROLE is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[false,true],"question":"A PUBLIC SYNONYM is a _______ object.","category":9},
{"answers":["Schema","Non-Schema"],"correctAnswerIndexes":[false,true],"question":"A USER is a _______ object.","category":9},

// Chapter 2
{"answers":["Schema","Nonschema"],"correctAnswerIndexes":[true,false],"question":"______ objects are those that can be owned by a user.","category":10},
{"answers":["Schema","Nonschema"],"correctAnswerIndexes":[false,true],"question":"_______ objects are those that cannot be owned by a user.","category":10},
{"answers":["A USER object can own itself","A USER object can be owned by another USER object","A USER object is a nonschema object","A USER object can own a PRIVATE SYNONYM"],"correctAnswerIndexes":[false,false,true,true],"question":"Which of the following are true about USER objects?","category":10},
{"answers":["PUBLIC","DUAL","SYSTEM","SYS","INTERNAL"],"correctAnswerIndexes":[true,false,false,false,false],"question":"A PUBLIC SYNONYM is owned by the special user account _______.","category":10},
{"answers":["Object names are case sensitive","All database objects MUST have a name.","Names can contain letters, '$', '_' or '#'.","Object names MUST start with a letter.","Object names can contain spaces."],"correctAnswerIndexes":[false,true,true,true,false],"question":"Which of the following are true of UNQUOTED database object names?","category":10},
{"answers":["Quoted object names must always be referenced with their quotation marks.","Quoted object names can contain spaces","Quoted object names MUST start with a letter.","Quoted object names cannot contain reserved words.","Quoted object names are case-sensitive."],"correctAnswerIndexes":[true,true,false,false,true],"question":"Which of the following are true of QUOTED database object names?","category":10},
{"answers":["NAMESPACE","SCHEMA","USER","DATABASE","CLUSTER"],"correctAnswerIndexes":[true,false,false,false,false],"question":"A _______ is a logical boundary within the database which requires encompassing objects to have unique names.","category":10},
{"answers":["USER","ROLE","PUBLIC SYNONYM","TABLE","INDEX","CONSTRAINT"],"correctAnswerIndexes":[true,true,false,false,false,false],"question":"Which two types of database objects occupying the same database share a namespace?","category":10},
{"answers":["PUBLIC SYNONYM","TABLE","VIEW","SEQUENCE","PRIVATE SYNONYM"],"correctAnswerIndexes":[true,false,false,false,false],"question":"______ objects do not share a namespace with any other type of objects.","category":10},
{"answers":["Objects in different namespaces can have the same name.","Schema objects of the same type in different schemas share the same namespace.","In the entire database, every USER objects must have a unique name.","INDEX and CONSTRAINT objects in the same schema share the same namespace."],"correctAnswerIndexes":[true,false,true,false],"question":"Which of the following is true about namespaces?","category":10},
{"answers":["aaaa","sssss"],"correctAnswerIndexes":[true,false],"question":"CREATE TABLE my_table\n(\n\tmy_id NUMBER NOT NULL,\n\tmy_value NUMBER,\n\tmy_name VARCHAR2(10) DEFAULT 'RALPH',\n\tCONSTRAINT my_pk PRIMARY_KEY (my_value)\n);\n\nHow many CONSTRAINT objects are created with the above CREATE TABLE statement?","category":10},
{"answers":["0","1","2","3","4"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following SQL: <br /><br /><div class = \"code\">CREATE TABLE my_table<br />(<br />\tmy_id NUMBER NOT NULL,<br />\tmy_value NUMBER,<br />\tmy_name VARCHAR2(10) DEFAULT 'RALPH',<br />\tCONSTRAINT my_pk PRIMARY_KEY (my_value)<br />);</div><br /><br />How many CONSTRAINT objects are created with the above CREATE TABLE statement?","category":10},
{"answers":["DESC","SHOW","DETAILS","EXPLAIN","HELP"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Which of the following SQL*Plus commands will return formatted details about a given table?","category":10},
{"answers":["5.67","6","5.6","5","5.7","None; an exception is thrown."],"correctAnswerIndexes":[false,true,false,false,false,false],"question":"If 5.67 is entered into a column of type NUMBER(2), what value is stored?","category":10},
{"answers":["5.67","6","5.6","5","5.7","None; an exception is thrown."],"correctAnswerIndexes":[true,false,false,false,false,false],"question":"If 5.67 is entered into a column of type NUMBER, what value is stored?","category":10},
{"answers":["5.6789","6","5.68","5.6","5.67","None; an exception is thrown."],"correctAnswerIndexes":[false,false,true,false,false,false],"question":"If 5.6789 is entered into a column of type NUMBER(5,2), what value is stored?","category":10},
{"answers":["5.67","6","5.7","5.6","5","None; an exception is thrown."],"correctAnswerIndexes":[false,false,true,false,false,false],"question":"If 5.67 is entered into a column of type NUMBER(4,1), what value is stored?","category":10},
{"answers":["YEAR","SECOND","MONTH","TIMEZONE_HOUR","MILLISECOND"],"correctAnswerIndexes":[true,true,true,false,false],"question":"Which of the following datetime fields are stored in a DATE data type?","category":10},
{"answers":["BLOB","CLOB","NCLOB","OBLOB"],"correctAnswerIndexes":[false,false,false,true],"question":"Which of the following is not a Large Data Object (LOB) used in Oracle?","category":10},
{"answers":["BLOB","IMAGE","CLOB","FILE","OBJECT"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Which of the following would be the best data type in which to store data for an image?","category":10},
{"answers":["In a CREATE CONSTRAINT statement","In an ALTER TABLE ADD CONSTRAINT statement","In an ALTER TABLE MODIFY statement","In a CREATE TABLE statement, in-line with respective columns","In a CREATE TABLE statement, out-of-line with respective columns"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Which of the following is NOT a valid way to create a primary key CONSTRAINT object?","category":10},
{"answers":["In a CREATE CONSTRAINT statement","In an ALTER TABLE ADD CONSTRAINT statement","In an ALTER TABLE MODIFY statement","In a CREATE TABLE statement, in-line with respective columns","In a CREATE TABLE statement, out-of-line with respective columns"],"correctAnswerIndexes":[false,false,true,true,false],"question":"Which of the following is a valid way to create a \"not null\" CONSTRAINT object?","category":10},
{"answers":["NOT NULL","UNIQUE","FOREIGN KEY","CHECK","REF"],"correctAnswerIndexes":[true,false,false,false,false],"question":"A ______ constraint ensures that, for any row, a specified column will always be populated with data.","category":10},
{"answers":["NOT NULL","UNIQUE","FOREIGN KEY","CHECK","REF"],"correctAnswerIndexes":[false,true,false,false,false],"question":"A ______ constraint ensures that a set of specified columns will never be repeated by two rows in the same table.","category":10},
{"answers":["PRIMARY KEY","FOREIGN KEY","CHECK","REF","LOCAL KEY"],"correctAnswerIndexes":[true,false,false,false,false],"question":"A ______ constraint is a combination of a NOT NULL constraint and a UNIQUE constraint.","category":10},
{"answers":["NOT NULL","UNIQUE","FOREIGN KEY","CHECK","PRIMARY KEY"],"correctAnswerIndexes":[false,false,true,false,false],"question":"A ______ constraint preserves referential integrity between two tables.","category":10},,
{"answers":["SET NULL","CASCADE","PURGE","SET DEFAULT","RESTRICT"],"correctAnswerIndexes":[false,true,false,false,false],"question":"An ON DELETE _______ clause in a FOREIGN KEY definition will delete rows in the constrained table when a referenced foreign row is deleted.","category":10},
{"answers":["SET NULL","CASCADE","NULLIFY","SET DEFAULT","RESTRICT"],"correctAnswerIndexes":[true,false,false,false,false],"question":"An ON DELETE _______ clause in a FOREIGN KEY definition will set the constrained column to NULL when its referenced foreign row is deleted.","category":10},
{"answers":["SET NULL","CASCADE","THROW EXCEPTION","SET DEFAULT","RESTRICT"],"correctAnswerIndexes":[false,false,false,false,true],"question":"An ON DELETE _______ clause in a FOREIGN KEY definition will not allow any rows in the foreign table to be deleted when they are referenced by a row in the constrained table.","category":10},
{"answers":["1","2","NULL","0","'my_value'"],"correctAnswerIndexes":[false,false,false,true,false],"question":"Given the following CREATE TABLE statement:<br /><br /><div class = \"code\"><br />CREATE TABLE my_table<br />(<br />\tmy_id NUMBER,<br />\tmy_status NUMBER CHECK (my_status IN (1,2))<br />);<br /></div><br /><br />Which of the following entries for my_status would throw a check constraint error?","category":10},
{"answers":["1","2","1.5","NULL","3"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Given the following CREATE TABLE statement:<br /><br /><div class = \"code\"><br />CREATE TABLE my_table<br />(<br />\tmy_id NUMBER,<br />\tmy_status NUMBER(1) CHECK (my_status BETWEEN 1 AND 2)<br />);<br /></div><br /><br />Which of the following entries for my_status would throw a check constraint error?","category":10},
{"answers":["DATE","TIMESTAMP","CLOB","TIMESTAMP WITH TIME ZONE","TIMESTAMP WITH LOCAL TIME ZONE"],"correctAnswerIndexes":[false,false,true,true,false],"question":"Which of the following data types can NOT have UNIQUE, PRIMARY KEY or FOREIGN KEY constraints applied to them?","category":10},
{"answers":["You cannot drop all columns in a table.","You can only drop one column per ALTER TABLE statement.","You can only drop parent key columns referenced a foreign key of another table using the CASCADE CONSTRAINTS clause.","You can only drop foreign-key-constraint columns referencing a parent table using the CASCADE CONSTRAINTS clause."],"correctAnswerIndexes":[true,false,true,false],"question":"Which of the following is true regarding dropping columns from tables?","category":10},
{"answers":["0","1","2","3","Code does not complete and an exception is thrown."],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following code:<br /><br /><div class = \"code\"><br />CREATE TABLE my_table_1<br />(<br />\tmy_id NUMBER PRIMARY KEY,<br />\tmy_status NUMBER UNIQUE<br />);<br /><br />CREATE TABLE my_table_2<br />(<br />\tmy_id NUMBER PRIMARY KEY CHECK (my_id IN (1,2)),<br />\tmy_status NUMBER NOT NULL UNIQUE,<br />\tCONSTRAINT my_fk FOREIGN KEY (my_status) REFERENCES my_table_1 (my_status)<br />);<br /><br />ALTER TABLE my_table_2 DROP COLUMN my_status;<br /></div><br /><br />If the above code does not throw an error, how many constraints does my_table_2 have after execution?","category":10},
{"answers":["0","1","2","3","Code does not complete and an exception is thrown."],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider the following code:<br /><br /><div class = \"code\"><br />CREATE TABLE my_table_1<br />(<br />\tmy_id NUMBER,<br />\tmy_status NUMBER,<br />\tCONSTRAINT my_pk_1 PRIMARY KEY (my_id, my_status)<br />);<br /><br />CREATE TABLE my_table_2<br />(<br />\tmy_id NUMBER,<br />\tmy_status NUMBER,<br />\tCONSTRAINT my_pk_2 PRIMARY KEY (my_id, my_status),<br />\tCONSTRAINT my_fk FOREIGN KEY (my_status, my_id) REFERENCES my_table_1 (my_status, my_id)<br />);<br /><br />ALTER TABLE my_table_2 DROP COLUMN my_status;<br /></div><br /><br />If the above code does not throw an error, how many named constraints does my_table_2 have?","category":10},
{"answers":["0","1","2","3","Code does not complete and an exception is thrown."],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following code:<br /><br /><div class = \"code\"><br />CREATE TABLE my_table_1<br />(<br />\tmy_id NUMBER,<br />\tmy_status NUMBER,<br />\tCONSTRAINT my_pk_1 PRIMARY KEY (my_id, my_status)<br />);<br /><br />CREATE TABLE my_table_2<br />(<br />\tmy_id NUMBER,<br />\tmy_status NUMBER,<br />\tCONSTRAINT my_pk_2 PRIMARY KEY (my_id, my_status),<br />\tCONSTRAINT my_fk FOREIGN KEY (my_status, my_id) REFERENCES my_table_1 (my_status, my_id)<br />);<br /><br />ALTER TABLE my_table_2 DROP COLUMN my_status CASCADE CONSTRAINTS;<br /></div><br /><br />If the above code does not throw an error, how many named constraints does my_table_2 have?","category":10},
{"answers":["An ALTER TABLE MODIFY statement must be used to revert it back to USABLE.","A ROLLBACK statement will have no effect on the column's UNUSED status.","You can add a new column to the table that has the same name as the UNUSED column.","Constraints and indices on the column will be dropped.","An UNUSED column still counts toward a table's maximum column limit of 1000."],"correctAnswerIndexes":[false,true,true,true,true],"question":"Which of the following is true about setting a column to be UNUSED?","category":10},
{"answers":["You can set a table's final column to be UNUSED.","A column set as UNUSED can be dropped.","A column that has been set as UNUSED can never be recovered.","Only one column can be set as UNUSED at a time.","A column can be set UNUSED even if it is constrained."],"correctAnswerIndexes":[false,true,true,false,false],"question":"Which of the following is true about setting a column to be UNUSED?","category":10},
{"answers":["VIEW","CLUSTER","EXTERNAL TABLE","DIRECTORY","DISTRIBUTED TABLE"],"correctAnswerIndexes":[false,false,true,false,false],"question":"A _________ is a table whose metadata is defined in the database, but whose data is stored outside the database.","category":10},
{"answers":["They are read-only.","They will not accept CONSTRAINT objects.","They can have INDEX objects creates on them.","Their columns cannot be dropped.","Their columns cannot be set to UNUSED."],"correctAnswerIndexes":[true,true,false,false,true],"question":"Which of the following is true about external tables?","category":10},
{"answers":["INSERT","DELETE","ALTER TABLE ... SET UNUSED","SELECT","RENAME TO"],"correctAnswerIndexes":[true,true,false,false,false],"question":"Which of the following SQL statements will fail on an external table?","category":10},
{"answers":["CLOB","BLOB","TIMESTAMP WITH TIME ZONE","CHAR","NCLOB"],"correctAnswerIndexes":[false,false,true,true,false],"question":"An external table's columns can be of which data types?","category":10},
{"answers":["DIRECTORY","LOCATION","FILE","FILEPATH","EXTERNAL TABLE"],"correctAnswerIndexes":[true,false,false,false,false],"question":"A ______ object defines a location on the database's file system.","category":10},
{"answers":["TABLE","EXTERNAL TABLE","INDEX","SEQUENCE","SYNONYM"],"correctAnswerIndexes":[true,false,false,false,false],"question":"A CONSTRAINT can be applied to which of the following?","category":10},
{"answers":["CREATE TABLE $my_table (my_data NUMBER);","CREATE TABLE my_table (my_data NUMBER(1,1));","CREATE TABLE \"my table\" (my_data VARCHAR2(10));","CREATE TABLE myTable (my_data VARCHAR2(10));","CREATE TABLE \"$ create table\" (my_data VARCHAR2(10));"],"correctAnswerIndexes":[false,true,true,true,true],"question":"Which of the following are valid CREATE TABLE statements?","category":10},
{"answers":["TABLE","VIEW","CONSTRAINT","SYNONYM","ROW"],"correctAnswerIndexes":[true,true,false,true,false],"question":"Which of the following can be instantiated with a CREATE statement?","category":10},
{"answers":["1","2","3","4","The code will execute with no errors."],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider the following statements:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table (my_data1 CHAR, my_data2 CHAR, CONSTRAINT my_obj PRIMARY KEY (my_data1));<br />2. CREATE VIEW my_obj AS (select * from my_table);<br />3. CREATE INDEX my#other#obj ON my_table (my_data2);<br />4. CREATE TABLE my#other#obj (my_data CHAR);<br /></div><br /><br />If these statements are executes in order, at which statement will the first \"name has already been used\" error be thrown?","category":10},
{"answers":["1","2","3","The code will not compile due to syntax errors.","The code will execute with no errors."],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following statements:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_obj (my_data CHAR);<br />2. ALTER TABLE my_obj ADD CONSTRAINT my_obj PRIMARY KEY (my_data);<br />3. CREATE VIEW my_obj AS (select * from my_obj);<br /></div><br /><br />If these statements are executes in order, at which statement will the first \"name has already been used\" error be thrown?","category":10},
{"answers":["1","2","The code will not compile due to syntax errors.","The code will execute with no errors."],"correctAnswerIndexes":[false,false,false,true],"question":"Consider the following statements:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_obj (my_data CHAR);<br />2. CREATE INDEX my_obj ON my_obj (my_data);<br /></div><br /><br />If these statements are executes in order, at which statement will the first \"name has already been used\" error be thrown?","category":10},
{"answers":["1","2","3","The code will not compile due to syntax errors.","The code will execute with no errors."],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following statements:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_obj (my_data CHAR);<br />2. ALTER TABLE my_obj ADD CONSTRAINT my_obj PRIMARY KEY (my_data);<br />3. CREATE INDEX my_obj ON my_obj (my_data);<br /></div><br /><br />If these statements are executes in order, at which statement will the first \"name has already been used\" error be thrown?","category":10},
{"answers":["1","2","3","The code will not compile due to syntax errors.","The code will execute with no errors."],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider the following statements:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_obj (my_data CHAR);<br />2. ALTER TABLE my_obj ADD CONSTRAINT my_obj CHECK (my_data in (1,2));<br />3. CREATE INDEX my_obj ON my_obj (my_data);<br /></div><br /><br />If these statements are executes in order, at which statement will the first \"name has already been used\" error be thrown?","category":10},
{"answers":["1","2","The code will not compile due to syntax errors.","The code will execute with no errors."],"correctAnswerIndexes":[false,false,false,true],"question":"Consider the following statements:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_obj (my_data CHAR);<br />2. ALTER TABLE my_obj ADD CONSTRAINT my_obj PRIMARY KEY (my_data);<br /></div><br /><br />If these statements are executes in order, at which statement will the first \"name has already been used\" error be thrown?","category":10},
{"answers":["Roles can be schema objects or nonschema objects, depending on where they are created.","Roles are in the same namespace as VIEW objects in the same schema.","Roles are in the same namespace as USER objects.","Roles are in the same namespace as PUBLIC SYNONYM objects.","Roles are in the same namespace as CONSTRAINT objects."],"correctAnswerIndexes":[false,false,true,false,false],"question":"Which of the following is true about ROLES?","category":10},
{"answers":["1","2","3","4","There is no error."],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id NUMBER,<br />3.\tmy_name CHAR(2),<br />4.\tmy_key VARCHAR2(10));<br /></div><br /><br />At which lines are there errors?","category":10},
{"answers":["1","2","3","4","There is no syntax error."],"correctAnswerIndexes":[false,true,false,true,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id BLOB PRIMARY KEY,<br />3.\tmy_name CLOB,<br />4.\tmy_key VARCHAR2);<br /></div><br /><br />At which lines are there errors?","category":10},
{"answers":["1","2","3","4","There is no syntax error."],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id NUMBER(10,-3),<br />3.\tmy_name CLOB UNIQUE,<br />4.\tmy_key VARCHAR2(10));<br /></div><br /><br />At which lines are there errors?","category":10},
{"answers":["CREATE TABLE my_table (my_data CHAR, CONSTRAINT my_c UNIQUE (my_data));","CREATE TABLE my_table (my_data CHAR, CONSTRAINT my_c PRIMARY KEY (my_data));","CREATE TABLE my_table (my_data CHAR, CONSTRAINT my_c NOT NULL (my_data));","CREATE TABLE my_table (my_data CHAR, CONSTRAINT my_c CHECK (my_data IS NOT NULL));"],"correctAnswerIndexes":[false,true,false,true],"question":"Which of the following SQL statements creates a table which does not accept rows where my_data is NULL?","category":10},
{"answers":["1","2","3","4","There is no syntax error."],"correctAnswerIndexes":[false,true,false,true,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id BLOB PRIMARY KEY,<br />3.\tmy_name CLOB,<br />4.\tmy_key VARCHAR2);<br /></div><br /><br />At which lines are there syntax errors?","category":10},

//Chapter 3

{"answers":["It removes all rows in the table.","It keeps data in the table's indexes in tact.","It fires no DML triggers.","It can only be rolled back with FLASHBACK_TABLE.","It is a DDL statement."],"correctAnswerIndexes":[true,false,true,false,true],"question":"Which of the following is true regarding the TRUNCATE TABLE statement?","category":9},
{"answers":["It performs an implicit commit.","It can be reversed with the ROLLBACK SAVEPOINT command.","It requires the DROP_ANY_TABLE privilege.","The reserved word \"TABLE\" is optional syntax.","It deletes rows even if there is an integrity constraint violation."],"correctAnswerIndexes":[true,false,true,false,false],"question":"Which of the following is true regarding the TRUNCATE TABLE statement?","category":9},
{"answers":["The execution fails at line 7.","The execution completes successfully.","After executing all lines, the insert at line 6 is now committed.","The execution fails at line 6.","The execution fails at line 5."],"correctAnswerIndexes":[true,false,true,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table_1<br />2. (my_id NUMBER PRIMARY KEY);<br />3. CREATE TABLE my_table_2<br />4. (my_id NUMBER PRIMARY KEY,<br />5.  CONSTRAINT my_fk FOREIGN KEY (my_id) REFERENCES my_table_1 (my_id));<br />6. INSERT INTO my_table_1 VALUES (1);<br />7. TRUNCATE TABLE my_table_1;<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["The execution fails at line 7.","The execution completes successfully.","After executing all lines, the insert at line 6 is now committed.","The execution fails at line 6.","The execution fails at line 5."],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table_1<br />2. (my_id NUMBER PRIMARY KEY);<br />3. CREATE TABLE my_table_2<br />4. (my_id NUMBER PRIMARY KEY,<br />5.  CONSTRAINT my_fk FOREIGN KEY (my_id) REFERENCES my_table_1 (my_id));<br />6. INSERT INTO my_table_1 VALUES (1);<br />7. DELETE FROM my_table_1;<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["The execution fails at line 8.","The execution completes successfully.","After executing all lines, the insert at line 6 is now committed.","The execution fails at line 6.","The execution fails at line 7."],"correctAnswerIndexes":[false,true,true,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table_1<br />2. (my_id NUMBER PRIMARY KEY);<br />3. CREATE TABLE my_table_2<br />4. (my_id NUMBER PRIMARY KEY,<br />5.  CONSTRAINT my_fk FOREIGN KEY (my_id) REFERENCES my_table_1 (my_id));<br />6. INSERT INTO my_table_1 VALUES (1);<br />7. INSERT INTO my_table_2 VALUES (1);<br />8. TRUNCATE TABLE my_table_2;<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["The \"INTO\" keyword is optional.","The \"VALUES\" keyword is optional.","Any of the subject's nullable columns are optional to include.","The inserted value data types only have to be compatible with the table's columns, not identical.","It is a DDL statement."],"correctAnswerIndexes":[false,false,true,true,false],"question":"Which of the following is true about the INSERT INTO... VALUES... statement?","category":9},
{"answers":["Execution will fail at line 4.","Execution will fail at line 5.","After line 5, the session has not been committed.","The execution completes successfully.","After line 5, there are two records in my_table."],"correctAnswerIndexes":[false,true,true,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id NUMBER PRIMARY KEY,<br />3.  my_data NUMBER);<br />4. INSERT INTO my_table (my_id) VALUES (1);<br />5. INSERT INTO my_table (my_data) VALUES (1);<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will fail at line 4.","Execution will fail at line 5.","After line 5, the session has not been committed.","The execution completes successfully.","After line 5, there are two records in my_table."],"correctAnswerIndexes":[false,false,true,true,true],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id NUMBER,<br />3.  my_data NUMBER);<br />4. INSERT INTO my_table (my_id) VALUES ('1');<br />5. INSERT INTO my_table (my_data) VALUES (1);<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will fail at line 3.","Execution will fail at line 4.","After line 4, the session has not been committed.","The execution completes successfully.","After line 4, there are two records in my_table."],"correctAnswerIndexes":[false,true,true,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. INSERT INTO my_table (my_id) VALUES ('1');<br />4. INSERT INTO my_table (my_id) VALUES (1);<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will fail at line 3.","After line 3, the session has not been committed.","The execution completes successfully.","After line 3, there is one record in my_table.","The execution will fail with a run-time error."],"correctAnswerIndexes":[false,true,true,true,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE CHECK (my_id IN (1,2)));<br />3. INSERT INTO my_table VALUES ('1');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will fail at line 3.","After line 3, the session has not been committed.","The execution completes successfully.","After line 3, there is one record in my_table.","The execution will fail with a run-time error."],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. INSERT INTO my_table (1);<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will fail at line 4.","Execution will fail at line 5.","After line 6, the session has not been committed.","The execution completes successfully.","After line 6, there are two records in my_table."],"correctAnswerIndexes":[false,false,true,true,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />4. INSERT INTO my_table (my_id) VALUES (NULL);<br />5. INSERT INTO my_table (my_id) VALUES (NULL);<br />6. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["It can only edit one table at a time.","It implicitly commits after completion.","If an UPDATE on any row violates a constraint, the entire statement is rejected.","An UPDATE must reference all NOT NULL columns in the table.","If the WHERE clause matches to zero rows in the table, an error is thrown."],"correctAnswerIndexes":[true,false,true,false,false],"question":"Which of the following is true about an UPDATE statement?","category":9},
{"answers":["TRUNCATE","INSERT","MERGE","UPDATE","CREATE"],"correctAnswerIndexes":[false,true,true,true,false],"question":"Which of the following types of SQL statements can be reverted with a ROLLBACK command?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 4.","Execution will fail at line 5.","Execution will fail at line 6.","Execution will fail at line 7."],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. INSERT INTO my_table (my_id) VALUES ('A');<br />4. COMMIT;<br />5. INSERT INTO my_table (my_id) VALUES ('B');<br />6. ROLLBACK;<br />7. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 7.","Execution will fail at line 5.","Execution will fail at line 6.","Execution will fail at line 8."],"correctAnswerIndexes":[false,true,false,false,true],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE USER my_user IDENTIFIED BY my_pass;<br />2. CREATE TABLE my_table<br />3. (my_id CHAR UNIQUE);<br />4. INSERT INTO my_table (my_id) VALUES ('A');<br />5. GRANT ALL ON my_table TO my_user;<br />6. ROLLBACK;<br />7. INSERT INTO my_table (my_id) VALUES ('A');<br />8. CREATE USER my_user IDENTIFIED BY my_pass;<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 7.","Execution will fail at line 5.","Execution will fail at line 6.","Execution will fail at line 4."],"correctAnswerIndexes":[false,false,false,true,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. INSERT INTO my_table (my_id) VALUES ('A');<br />4. DROP TABLE my_table;<br />5. ROLLBACK;<br />6. INSERT INTO my_table (my_id) VALUES ('A');<br />7. ROLLBACK;<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 7.","Execution will fail at line 5.","Execution will fail at line 6.","Execution will fail at line 4."],"correctAnswerIndexes":[false,false,false,true,true],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. INSERT INTO my_table (my_id) VALUES ('A');<br />4. TRUNCATE my_table;<br />5. ROLLBACK;<br />6. INSERT INTO my_table (my_id) VALUES ('A');<br />7. COMMIT;<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 7.","Execution will fail at line 5.","Execution will fail at line 8.","Execution will fail at line 9."],"correctAnswerIndexes":[false,true,false,false,true],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. CREATE TABLE my_table2<br />4. (my_id CHAR UNIQUE,<br />5. CONSTRAINT my_fk FOREIGN KEY (my_id) REFERENCES my_table (my_id));<br />6. INSERT INTO my_table (my_id) VALUES ('A');<br />7. TRUNCATE TABLE my_table;<br />8. ROLLBACK;<br />9. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 4.","Execution will fail at line 5.","Execution will fail at line 6.","Neither my_table nor nonexistant_table will exist in the database."],"correctAnswerIndexes":[false,true,false,true,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. INSERT INTO my_table (my_id) VALUES ('A');<br />4. TRUNCATE TABLE nonexistant_table;<br />5. ROLLBACK;<br />6. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 8.","Execution will fail at line 5.","Execution will fail at line 6.","Execution will fail at line 7."],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. CREATE TABLE my_table2<br />4. (my_id CHAR UNIQUE);<br />5. INSERT INTO my_table (my_id) VALUES ('A');<br />6. ALTER TABLE my_table2 ADD my_id2 CHAR;<br />7. ROLLBACK;<br />8. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 8.","Execution will fail at line 5.","Execution will fail at line 9.","Execution will fail at line 7."],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. CREATE TABLE my_table2<br />4. (my_id CHAR UNIQUE);<br />5. SAVEPOINT MARK1;<br />6. INSERT INTO my_table (my_id) VALUES ('A');<br />7. ROLLBACK TO MARK1;<br />8. ALTER TABLE my_table2 ADD my_id2 CHAR;<br />9. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 8.","Execution will fail at line 5.","Execution will fail at line 9.","Execution will fail at line 7."],"correctAnswerIndexes":[false,true,false,true,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. CREATE TABLE my_table2<br />4. (my_id CHAR UNIQUE);<br />5. SAVEPOINT MARK1;<br />6. INSERT INTO my_table (my_id) VALUES ('A');<br />7. ALTER TABLE my_table2 ADD my_id2 CHAR;<br />8. ROLLBACK TO MARK1;<br />9. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 6.","Execution will fail at line 5.","Execution will fail at line 3.","Execution will fail at line 7."],"correctAnswerIndexes":[false,true,true,false,true],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. SAVEPOINT MARK1;<br />4. INSERT INTO my_table (my_id) VALUES ('A');<br />5. TRUNCATE TABLE nonexistant_table;<br />6. ROLLBACK TO MARK1;<br />7. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail at line 6.","Execution will fail at line 5.","Execution will fail at line 3.","Execution will fail at line 4."],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider attempting to execute the following SQL:<br /><br /><div class = \"code\"><br />1. CREATE TABLE my_table<br />2. (my_id CHAR UNIQUE);<br />3. SAVEPOINT MARK1;<br />4. INSERT INTO my_table (my_id) VALUES ('A');<br />5. ROLLBACK TO MARK1;<br />6. INSERT INTO my_table (my_id) VALUES ('A');<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail due to type mismatch","Execution will fail due to syntax error","Execution will fail due to constraint violation","Execution will fail due to partition error."],"correctAnswerIndexes":[true,false,false,false,false],"question":"<div class = \"code\"><br />CREATE TABLE my_table<br />(<br />\tmy_id NUMBER,<br />\tmy_name VARCHAR(10),<br />\tmy_val VARCHAR(10)<br />);<br />INSERT INTO my_table VALUES (1, \"Bryce\", 1234);<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["Execution will complete successfully.","Execution will fail due to type mismatch","Execution will fail due to syntax error","Execution will fail due to constraint violation","Execution will fail due to partition error."],"correctAnswerIndexes":[false,false,true,false,false],"question":"<div class = \"code\"><br />CREATE TABLE my_table<br />(<br />\tmy_id NUMBER,<br />\tmy_name VARCHAR(10),<br />\tmy_val VARCHAR(10)<br />);<br />INSERT INTO my_table (1, 'Bryce', 1234);<br /></div>","category":9},
{"answers":["Execution will complete successfully.","Execution will fail due to type mismatch","Execution will fail due to syntax error","Execution will fail due to constraint violation","Execution will fail due to partition error."],"correctAnswerIndexes":[true,false,false,false,false],"question":"<div class = \"code\"><br />CREATE TABLE my_table<br />(<br />\tmy_id NUMBER PRIMARY KEY,<br />\tmy_name VARCHAR(10) UNIQUE,<br />\tmy_val VARCHAR(10)<br />);<br />INSERT INTO my_table VALUES (1, 'Bryce', 1234);<br />INSERT INTO my_table VALUES (2, 'Don', 1234);<br /></div><br /><br />Which of the following is true?","category":9},
{"answers":["INSERT","INTO","VALUES","WHERE","None of the above"],"correctAnswerIndexes":[false,false,true,true,false],"question":"Which of the following reserved words are not required for an INSERT statement?","category":9},
{"answers":["DELETE","FROM","TABLE","WHERE","None of the above"],"correctAnswerIndexes":[false,true,true,false,false],"question":"Which of the following reserved words are not required for a DELETE statement?","category":9},
{"answers":["UPDATE","SET","WHERE","IN","None of the above"],"correctAnswerIndexes":[true,true,false,false,false],"question":"Which of the following reserved words are required for an UPDATE statement?","category":9},


//Chapter 4

{"answers":["The result will be sorted by my_data1 and then by my_data2, both in descending order.","The result will be sorted by my_data1 in ascending order and then by my_data2 in descending order.","The statement will fail because my_data2 is not in the select list.","The statement will fail because there is no GROUP BY clause.","The statement will fail because there is no ordering defined for my_data1."],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />SELECT my_data1<br />FROM my_table<br />ORDER BY my_data1, my_data2 DESC;<br /></div><br /><br />Which of the following is true?","category":2},
{"answers":["The statement will fail because my_data2 is not in the select list.","The statement will fail because there is no GROUP BY clause.","The statement will fail because the ORDER BY clause cannot use a LIKE expression.","The statement will fail because there is no ordering defined for my_data1."],"correctAnswerIndexes":[false,false,true,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />SELECT my_data1<br />FROM my_table<br />ORDER BY LIKE my_data2;<br /></div><br /><br />Which of the following is true?","category":2},
{"answers":["It is required in a SELECT statement.","The statement will fail because there is no GROUP BY clause.","The statement will fail because the ORDER BY clause cannot use a LIKE expression.","The statement will fail because there is no ordering defined for my_data1."],"correctAnswerIndexes":[false,true,false,true],"question":"Which of the following is true about the ORDER BY clause?","category":2},
{"answers":["It is required in a SELECT statement.","It can only be used in a SELECT statement.","It can only sort on columns in the select list.","If columns in an ORDER BY statement have no defined ordering, they default to ASCENDING."],"correctAnswerIndexes":[false,true,false,true],"question":"Which of the following is true about the ORDER BY clause?","category":2},
{"answers":["3","2","1","0","Execution will fail."],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statements:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES ('my_data1');<br />INSERT INTO my_table (my_data) VALUES ('my_data2');<br />INSERT INTO my_table (my_data) VALUES ('my_data3');<br /><br />SELECT * <br />FROM my_table <br />WHERE my_data IN ('my_data1', 'my_data2', '%data3');<br /></div><br /><br />How many rows will be returned?","category":2},
{"answers":["1 would return before 2.","'Me' would return before 'You'.","'me' would return before 'You'.","January 2nd 2000 will return before January 1st 2000","'100' will return before '50'"],"correctAnswerIndexes":[false,false,true,true,false],"question":"If your ORDER BY clause sorts values in a descending order, which of the following is true?","category":2},
{"answers":["3","2","1","0","Execution will fail."],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statements:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES ('my_data1');<br />INSERT INTO my_table (my_data) VALUES ('my_data2');<br />INSERT INTO my_table (my_data) VALUES ('my_data3');<br /><br />SELECT * <br />FROM my_table <br />WHERE my_data IN ('my_data1', 'my_data2', '%data3');<br /></div><br /><br />How many rows will be returned?","category":2},
{"answers":["3","2","1","0","Execution will fail."],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following SQL statements:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES ('my_data1');<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data3');<br /><br />SELECT COUNT(*) <br />FROM my_table <br />WHERE my_data = NULL OR my_data = 'my_data3';<br /></div><br /><br />What will be returned?","category":2},
{"answers":["3","2","1","0","Execution will fail."],"correctAnswerIndexes":[false,false,false,true,false],"question":"Consider the following SQL statements:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES ('');<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data3' || NULL);<br /><br />SELECT COUNT(*) <br />FROM my_table <br />WHERE my_data = NULL;<br /></div><br /><br />What will be returned?","category":2},
{"answers":["3","2","1","0","Execution will fail."],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statements:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES ('');<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data3' || NULL);<br /><br />SELECT COUNT(*) <br />FROM my_table <br />WHERE my_data IS NULL;<br /></div><br /><br />What will be returned?","category":2},
{"answers":["3","2","1","0","Execution will fail."],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statements:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES ('');<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data3' || NULL);<br /><br />SELECT COUNT(*) <br />FROM my_table <br />WHERE my_data IS NULL;<br /></div><br /><br />What will be returned?","category":2},
{"answers":["3","2","1","0","Execution will fail."],"correctAnswerIndexes":[false,false,false,true,false],"question":"Consider the following SQL statements:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES ('');<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data3' || NULL);<br /><br />SELECT COUNT(*) <br />FROM my_table <br />WHERE my_data <> NULL;<br /></div><br /><br />What will be returned?","category":2},
{"answers":["3","2","1","0","Execution will fail."],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following SQL statements:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES ('');<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data3' || NULL);<br /><br />SELECT COUNT(*) <br />FROM my_table <br />WHERE my_data IS NOT NULL;<br /></div><br /><br />What will be returned?","category":2},
{"answers":["DEFINE","SHOW","SHOW DEFINE","SHOW &","EXPLAIN &"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Use the ______ command to list all currently defined variables.","category":2},
{"answers":["You can not replace database object names with them.","You can replace clause keywords like \"WHERE\" with them.","You can replace values in a LIKE statement with them."],"correctAnswerIndexes":[false,true,true],"question":"Which is true about a DEFINE substitution variable?","category":2},
{"answers":["UNDEFINE","REMOVE","DEREFERENCE","DELETE","SET DEFINE OFF"],"correctAnswerIndexes":[true,false,false,false,false],"question":"The ________ statement is used to delete the definition of a substitution variable.","category":2},
{"answers":["It is the final clause in a SELECT statement","It is required in a SELECT statement","ORDER BY changes the data stored in a table","You can ORDER BY columns which are not included in the select list","NULL values are always sorted last"],"correctAnswerIndexes":[true,false,false,true,false],"question":"Which of the following is true about the ORDER BY clause?","category":2},
{"answers":["NULL","'my_data1'","'my_data2'","Execution fails"],"correctAnswerIndexes":[true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data1');<br />INSERT INTO my_table (my_data) VALUES ('my_data2'); <br /><br />SELECT my_data<br />FROM my_table<br />ORDER BY my_data DESC;<br /></div><br /><br />Which value is returned first?","category":2},
{"answers":["NULL","'my_data1'","'my_data2'","Execution fails"],"correctAnswerIndexes":[false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data1');<br />INSERT INTO my_table (my_data) VALUES ('my_data2'); <br /><br />SELECT my_data<br />FROM my_table<br />ORDER BY my_data ASC;<br /></div> <br /><br />Which value is returned first?<br />","category":2},
{"answers":["NULL","'my_data1'","'my_data2'","Execution fails"],"correctAnswerIndexes":[false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (NULL);<br />INSERT INTO my_table (my_data) VALUES ('my_data1');<br />INSERT INTO my_table (my_data) VALUES ('my_data2'); <br /><br />SELECT my_data<br />FROM my_table<br />ORDER BY my_data;<br /></div> <br /><br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY my_data1, my_data2;<br /></div><br /> <br /> <br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,false,true,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY my_data2, my_data1;<br /></div><br /> <br /> <br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY my_data2 DESC, my_data1;<br /></div>","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,false,true,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY my_data2 ASC, my_data1 DESC;<br /></div> <br /> <br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY my_data1 / my_data2;<br /></div> <br /> <br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY 1;<br /></div><br /> <br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,false,false,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY 2;<br /></div> <br /> <br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,false,true,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY my_data2 - ROWNUM;<br /></div> <br /> <br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,false,false,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id as my_column, <br />my_data1 as my_column<br />FROM my_table<br />ORDER BY my_column;<br /></div><br /><br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id as \"my column\"<br />FROM my_table<br />ORDER BY \"my column\";<br /></div><br /><br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,false,false,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT id <br />FROM my_table<br />ORDER BY my_column;<br /></div><br /><br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails"],"correctAnswerIndexes":[false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"> <br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data1 <> 1;<br /></div><br /><br />What is the returned value?","category":2},
{"answers":["NULL","1","2","Execution fails","0"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data1 = ROWNUM;<br /></div><br /><br />What is the returned value?","category":2},
{"answers":["NULL","1","2","Execution fails","0"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data1 > id;<br /></div><br /><br />What is the returned value?","category":2},
{"answers":["NULL","1","2","Execution fails","0"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_date, id) VALUES (TO_DATE('30-DEC-2017'), 1);<br />INSERT INTO my_table (my_date, id) VALUES (TO_DATE('30-DEC-2016'), 2);<br /><br />SELECT id<br />FROM my_table<br />ORDER BY my_date; <br /></div><br /><br />Which value is returned first?","category":2},
{"answers":["NULL","1","2","Execution fails","0"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data, id) VALUES ('DATA', 1);<br />INSERT INTO my_table (my_data, id) VALUES ('data', 2);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data = 'DATA'; <br /></div><br /><br />Which value is returned?","category":2},
{"answers":["NULL","1","2","Execution fails","0"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data, id) VALUES ('DATA', 1);<br />INSERT INTO my_table (my_data, id) VALUES ('data', 2);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data LIKE '_A__'; <br /></div><br /><br />Which value is returned?","category":2},
{"answers":["NULL","1","2","Execution fails","0"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data, id) VALUES ('DATA', 1);<br />INSERT INTO my_table (my_data, id) VALUES ('data', 2);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data LIKE '%a%'; <br /></div><br /><br />Which value is returned?","category":2}.
{"answers":["1 = 1;","LOWER(my_data) LIKE '%a%';","my_data LIKE '_A_';","my_data LIKE '%T_';","my_data = 'DA' || 'TA';"],"correctAnswerIndexes":[true,true,false,true,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />1. INSERT INTO my_table (my_data, id) VALUES ('DATA', 1);<br />2. SELECT id<br />3. FROM my_table<br />4. WHERE _________<br /></div><br /><br />At line 4, which of the following expressions can be inserted to make the query return \"1\"?","category":2},
{"answers":["my_data IS 'DATA';","'%A%' LIKE my_data;","my_data LIKE 'D%A_';","my_data LIKE 'DATA%';","my_data LIKE 'DATA';"],"correctAnswerIndexes":[false,false,false,true,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />1. INSERT INTO my_table (my_data, id) VALUES ('DATA', 1);<br />2. SELECT id<br />3. FROM my_table<br />4. WHERE _________<br /></div><br /><br />At line 4, which of the following expressions can be inserted to make the query return \"1\"?","category":2},
{"answers":["1","2","3","Execution fails","NULL"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (0, 1, 3);<br /><br />SELECT id<br />FROM my_table<br />WHERE my_data1 > 0 AND my_data2 < 2;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["1","2","3","Execution fails","NULL"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (0, 2, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (2, 1, 2);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (0, 1, 3);<br /><br />SELECT id<br />FROM my_table<br />WHERE NOT my_data1 > 0 AND my_data2 < 2;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["my_data != 0;","my_data <> 0;","NOT my_data = 0;","my_data NOT = 0;","my_data IS NOT 0;"],"correctAnswerIndexes":[true,true,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />1. INSERT INTO my_table (my_data, id) VALUES (0, 1);<br />2. INSERT INTO my_table (my_data, id) VALUES (2, 2);<br />3. SELECT id<br />4. FROM my_table<br />5. WHERE _________<br /><br />At line 5, which of the following expressions can be inserted to make the query return \"2\"?<br />","category":2},
{"answers":["1","2","3","4"," Execution fails"],"correctAnswerIndexes":[false,false,true,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (0, 1, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (0, 2, 2);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 1, 3);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 4);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE  my_data1 = 0 OR my_data1 = 1 AND my_data2 = 2;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["1","2","3","4"," Execution fails"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (0, 1, 1);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (0, 2, 2);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 1, 3);<br />INSERT INTO my_table (my_data1, my_data2, id) VALUES (1, 2, 4);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE (my_data1 = 0 OR my_data1 = 1) AND my_data2 = 2;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["my_data BETWEEN 10 AND 0;","my_data IN (0, 10);","my_data NOT IN (3);","my_data IN (0, '1' || '0');","my_data BETWEEN 0 AND 10;"],"correctAnswerIndexes":[false,true,true,true,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />1. INSERT INTO my_table (my_data) VALUES (0);<br />2. INSERT INTO my_table (my_data) VALUES (10);<br />3. SELECT COUNT(*)<br />4. FROM my_table<br />5. WHERE ___________<br /></div><br /><br />At line 5, which of the following expressions can be inserted to make the query return \"2\"?<br />","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (0);<br />INSERT INTO my_table (my_data) VALUES (1);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data BETWEEN 1 AND 0;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (0);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data = NULL;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (0);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data IS NULL;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (0);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data != NULL;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (0);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data IS NOT NULL;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />INSERT INTO my_table (my_data) VALUES (0);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data NOT IN (0);<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />DEFINE myVar = 1;<br /><br />INSERT INTO my_table (my_data) VALUES (1);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br /><br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data = &myVar;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />DEFINE myVar = 'NOT';<br />INSERT INTO my_table (my_data) VALUES (1);<br />UNDEFINE myVar;<br />SELECT COUNT(*)<br />FROM my_table<br />WHERE &myVar my_data = 1;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["VERIFY","SHOW","DEFINE","DESCRIBE","DISPLAY"],"correctAnswerIndexes":[false,true,false,false,false],"question":"The ____ command is used to display any SQL*Plus system variable's current state.","category":2},
{"answers":["VERIFY","SHOW","DEFINE","PROMPT","ACCEPT"],"correctAnswerIndexes":[true,false,false,false,false],"question":"The ____ system variable determines whether or not \"old\" and \"new\" information is displayed during variable substitution.","category":2},
{"answers":["PROMPT","ACCEPT","VERIFY","DEFINE","SHOW"],"correctAnswerIndexes":[true,false,false,false,false],"question":"The _____ SQL*Plus command is used to diaplay an interactive message with the user.","category":2},
{"answers":["PROMPT","ACCEPT","VERIFY","DEFINE","SHOW"],"correctAnswerIndexes":[false,true,false,false,false],"question":"The _____ SQL*Plus command is used to recieve input data from the user.","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />SET DEFINE *;<br />DEFINE myVar = 1;<br />INSERT INTO my_table (my_data) VALUES (1);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data = *myVar;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />SET DEFINE *;<br />DEFINE myVar = 1;<br />INSERT INTO my_table (my_data) VALUES (1);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data = &myVar;<br /></div><br /><br />Which value is returned?","category":2},
{"answers":["0","1","2","NULL","Execution fails"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider the following SQL statement:<br /><br /><div class = \"code\"><br />DEFINE myVar = 1;<br />SET DEFINE OFF;<br />INSERT INTO my_table (my_data) VALUES (1);<br />INSERT INTO my_table (my_data) VALUES (NULL);<br />SELECT COUNT(*)<br />FROM my_table<br />WHERE my_data = &myVar;<br /></div><br /><br />Which value is returned?","category":2},


//Chapter 5

{"answers":["8","2","3","0","1"],"correctAnswerIndexes":[false,true,false,false,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />SELECT MOD(8,3) FROM DUAL;<br /></div><br /><br />What is the result?","category":3},
{"answers":["1","2","5","0","-1"],"correctAnswerIndexes":[false,false,false,false,true],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />SELECT REMAINDER(8,3) FROM DUAL;<br /></div><br /><br />What is the result?","category":3},
{"answers":["O624","Ora4","Oragle","Orcl","O1R1A1C1L1E1"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />SELECT SOUNDEX('Oracle') FROM DUAL;<br /></div><br /><br />What is the result?","category":3},
{"answers":["ADD_MONTHS","SUBTRACT_MONTHS","REDUCE","LAG","OFFSET"],"correctAnswerIndexes":[true,false,false,false,false],"question":"The ______ function can be used to subtract months from a given date value.","category":3},
{"answers":["Or","Ora","ra","rac","Oracle"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />SELECT SUBSTR('Oracle', 1, 2) FROM DUAL;<br /></div><br /><br />What is the result?","category":3},
{"answers":["O","racle","1","5","Oracle"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />SELECT LTRIM('Oracle', 'O') FROM DUAL;<br /></div><br /><br />What is the result?","category":3},
{"answers":["2","345","45","12","12345"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />SELECT LTRIM('12345', '3') FROM DUAL;<br /></div><br /><br />What is the result?","category":3},
{"answers":["123","45","123.0","3","123.45"],"correctAnswerIndexes":[true,false,false,false,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />SELECT TRUNC(123.45) FROM DUAL;<br /></div><br /><br />What is the result?","category":3},
{"answers":["123.5","123.4","123","120","100","1","123.0"],"correctAnswerIndexes":[true,false,false,false,false,false,false],"question":"Consider the following SQL:<br /><br /><div class = \"code\"><br />SELECT ROUND(123.45, 1) FROM DUAL;<br /></div><br /><br />What is the result?","category":3},





];class QuizHtmlContainer {
    parentElement: HTMLElement;
    containerElement: HTMLElement;
    headerElement: HTMLElement;
    bodyElement: HTMLElement;
    questionElement: HTMLElement;
    answerContainer: HTMLElement;
    answerChoices: HTMLElement[];
    previousButton: HTMLElement;
    underAnswersContainer: HTMLElement;
    nextButton: HTMLElement;
    submitButton: HTMLElement;
    resultText: HTMLElement;

    headerHeightPercent: number = 8;
    bodyMarginLeftPercent: number = 2;
	headerHeightConfig: number = 5;
    questionFontSizePercent: number = 5;
    questionMarginTopPercent: number = 3;
    questionMarginBottomPercent: number = 3;
    answerFontSizePercent: number = 5;
    answerBoxSizeHeightPercent: number = 3;
    answerBoxSizeWidthPercent: number = 92;
    answerMarginPercent: number = 1;
    buttonWidthPercent: number = 4;

    isShowingAnswers: boolean;

    HEIGHT: number;
    WIDTH: number;

    // answers: string[] = new Array()
    questions: Question[] = new Array();
    currentQuestionIndex: number = 0;
    areAnswersSelected: boolean[] = new Array();

    constructor(parentElement: HTMLElement, height: number, width: number) {
        this.parentElement = parentElement;
        this.HEIGHT = height;
        this.WIDTH = width;
    }

    initialize(category: QuestionCategory) {
        this.initializeContainer();

        this.parentElement.appendChild(this.containerElement);

        this.initializeHeader();
        this.initializeCSS();
        this.containerElement.appendChild(this.headerElement);
		
		this.questions = Question.fromJSONArray(QuestionDatabase, category);
		
		Algorithms.shuffle(this.questions);

        this.initializeBody();
        this.initializeQuestion();
        this.initializeAnswers();
        this.initializeNextButton();
        this.initializePrevButton();
        this.initializeSubmitButton();
        this.initializeResultText();
        this.initializeUnderAnswerContainer();

        this.bodyElement.appendChild(this.questionElement);
        this.answerContainer = this.parentElement.ownerDocument.createElement("div");

        for (var i = 0; i < this.answerChoices.length; i++) {
            this.answerContainer.appendChild(this.answerChoices[i]);
        }

        this.makeDivInvisible(this.nextButton);
        this.makeDivInvisible(this.resultText);

        this.underAnswersContainer.appendChild(this.resultText);
        this.underAnswersContainer.appendChild(this.nextButton);
        this.underAnswersContainer.appendChild(this.submitButton);

        this.bodyElement.appendChild(this.answerContainer);
        this.bodyElement.appendChild(this.underAnswersContainer);
        //this.bodyElement.appendChild(this.previousButton);

        this.containerElement.appendChild(this.bodyElement);

        //set question font size after rendering
		
		/*var fontSize;
		if(this.currentQuestion().getQuestion().includes("<br />")){
			var maxLine = this.getMaxLineInString(this.currentQuestion().getQuestion());
			fontSize = this.getFontSize(maxLine, +this.questionElement.offsetWidth);
		}
		else{
			fontSize = this.getHeightPxFromPercent(this.questionFontSizePercent) + "px";
		}	
	
        this.questionElement.style.fontSize = fontSize + "px";*/
    }

    currentQuestion(): Question{
        return this.questions[this.currentQuestionIndex];
    }

    initializeContainer() {
        this.containerElement = this.parentElement.ownerDocument.createElement("div");
    }

    initializeHeader() {
        this.headerElement = this.parentElement.ownerDocument.createElement("div");
        this.headerElement.id = "header-element";
        this.headerElement.style.width = "100%";
        this.headerElement.style.height = this.getHeightPxFromPercent(this.headerHeightConfig) + "px";
        this.headerElement.style.background = "#0275d8";
        this.headerElement.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
    }


    initializeBody() {
        this.bodyElement = this.parentElement.ownerDocument.createElement("div");
        this.bodyElement.style.marginTop = "0 px";
        this.bodyElement.style.marginLeft = this.getWidthPxFromPercent(this.bodyMarginLeftPercent) + "px";
		this.bodyElement.style.overflow = "scroll";
        this.bodyElement.style.height = (this.HEIGHT - this.getHeightPxFromPercent(this.headerHeightConfig)) + "px";
    }

    initializeUnderAnswerContainer() {
        this.underAnswersContainer = this.parentElement.ownerDocument.createElement("div");
        this.underAnswersContainer.style.width = this.getWidthPxFromPercent(this.answerBoxSizeWidthPercent) + "px";
        this.underAnswersContainer.style.marginTop = "0 px";
        this.underAnswersContainer.style.marginLeft = this.getWidthPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }

    initializeNextButton() {
        this.nextButton = this.parentElement.ownerDocument.createElement("div");
        this.nextButton.className = "downOnClick";
        this.nextButton.id = "next-button";
        this.nextButton.style.marginTop = "0 px";
        this.nextButton.style.font = "Helvetica";
        this.nextButton.style.color = "white";
        this.nextButton.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent) + "px";
        //this.nextButton.style.marginLeft = (this.getHeightPxFromPercent(this.answerBoxSizeWidthPercent) - (this.getHeightPxFromPercent(this.buttonWidthPercent))) -  + "px";
        //this.nextButton.style.width = this.getHeightPxFromPercent(this.buttonWidthPercent + 2) + "px";
        this.nextButton.style.verticalAlign = "middle";
        this.nextButton.style.paddingLeft = this.getHeightPxFromPercent(1) + "px";
        this.nextButton.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        this.nextButton.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        this.nextButton.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
        this.nextButton.style.borderRadius = "5px";
        this.nextButton.style.background = "#2ecc71";
        this.nextButton.style.border = "1px solid black";
        this.nextButton.style.display = "inline-block";
        this.nextButton.style.cssFloat = "right";
        this.nextButton.style.position = "relative";
        this.nextButton.style.userSelect = "none";
        this.nextButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
        this.nextButton.onclick = (function (element, htmlContainer) {
            return () => {
                htmlContainer.loadNextQuestion();
                htmlContainer.changeNextToSubmit();
                htmlContainer.makeDivInvisible(htmlContainer.resultText);
                htmlContainer.isShowingAnswers = false;
            }
        }(this.nextButton, this));
        this.nextButton.innerHTML = "Next";
    }

    initializePrevButton() {
        this.previousButton = this.parentElement.ownerDocument.createElement("div");
        this.previousButton.className = "downOnClick";
        this.previousButton.style.marginTop = "0 px";
        this.previousButton.style.font = "Helvetica";
        this.previousButton.style.color = "white";
        this.previousButton.style.fontSize = this.getHeightPxFromPercent(this.answerFontSizePercent) + "px";
        this.previousButton.style.width = this.getHeightPxFromPercent(this.buttonWidthPercent) + "px";
        this.previousButton.style.verticalAlign = "middle";
        this.previousButton.style.paddingLeft = this.getHeightPxFromPercent(1) + "px";
        this.previousButton.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        this.previousButton.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        this.previousButton.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
        this.previousButton.style.borderRadius = "5px";
        this.previousButton.style.background = "#e74c3c";
        this.previousButton.style.border = "1px solid black";
        this.previousButton.style.display = "inline-block";
        this.previousButton.style.position = "relative";
        this.previousButton.style.userSelect = "none";
        this.previousButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
        this.previousButton.innerHTML = "Prev";
        this.previousButton.onclick = (function (element, htmlContainer) {
            return () => {
                htmlContainer.loadPrevQuestion();
            }
        }(this.nextButton, this));
    }


    initializeSubmitButton() {
        this.submitButton = this.parentElement.ownerDocument.createElement("div");
        this.submitButton.className = "downOnClick";
        this.submitButton.id = "submit-button";
        this.submitButton.style.marginTop = "0 px";
        this.submitButton.style.font = "Helvetica";
        this.submitButton.style.color = "white";
        this.submitButton.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent) + "px";
        //this.submitButton.style.width = this.getHeightPxFromPercent(this.buttonWidthPercent + 5) + "px";
        this.submitButton.style.verticalAlign = "middle";
        //this.submitButton.style.paddingLeft = this.getHeightPxFromPercent(1) + "px";
        this.submitButton.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        //this.submitButton.style.marginLeft = ((this.getHeightPxFromPercent(this.answerBoxSizeWidthPercent) - (this.getHeightPxFromPercent(this.buttonWidthPercent + 1.5)/2)- this.getHeightPxFromPercent(this.bodyMarginLeftPercent))  + "px");
        this.submitButton.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        this.submitButton.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
        this.submitButton.style.paddingLeft = this.getHeightPxFromPercent(0.5) + "px";
        this.submitButton.style.borderRadius = "5px";
        this.submitButton.style.background = "#2ecc71";
        this.submitButton.style.border = "1px solid black";
        this.submitButton.style.display = "inline-block";
        this.submitButton.style.cssFloat = "right";
        this.submitButton.style.position = "relative";
        this.submitButton.style.userSelect = "none";
        this.submitButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
        this.submitButton.innerHTML = "Submit";
        this.submitButton.onclick = (function (element, htmlContainer) {
            return () => {
                htmlContainer.revealAnswers();
                htmlContainer.changeSubmitToNext();
                htmlContainer.makeDivVisible(htmlContainer.resultText);
                htmlContainer.isShowingAnswers = true;
                if (htmlContainer.areSelectedAnswersCorrect()) {
                    htmlContainer.resultText.style.color = "#095d34";
                    htmlContainer.resultText.innerHTML = "Correct!";
                }
                else {
                    htmlContainer.resultText.style.color = " #cc1100";
                    htmlContainer.resultText.innerHTML = "Incorrect!";
                }

            }
        }(this.submitButton, this));
    }


    initializeQuestion() {
        this.questionElement = this.parentElement.ownerDocument.createElement("div");
        this.questionElement.style.font = "Helvetica";
		this.questionElement.style.overflow = "auto";
        this.questionElement.style.fontSize = this.getRootPxFromPercent(this.questionFontSizePercent) + "px";
        this.questionElement.style.marginTop = this.getHeightPxFromPercent(this.questionMarginTopPercent) + "px";
        this.questionElement.style.marginBottom = this.getHeightPxFromPercent(this.questionMarginBottomPercent) + "px";
        this.questionElement.innerHTML = this.currentQuestion().getQuestion();
    }

    initializeResultText() {
        this.resultText = this.parentElement.ownerDocument.createElement("div");
        this.resultText.style.font = "Helvetica";
        this.resultText.style.fontSize = this.getHeightPxFromPercent(this.answerFontSizePercent) + "px";
        // this.resultText.style.marginTop = this.getHeightPxFromPercent(this.questionMarginTopPercent) + "px";
        //this.questionElement.style.marginBottom = this.getHeightPxFromPercent(this.questionMarginBottomPercent) + "px";
        this.resultText.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        this.resultText.style.display = "inline-block";
        this.resultText.style.cssFloat = "left";
        this.resultText.style.marginLeft = this.getHeightPxFromPercent(1) + "px";
        this.resultText.style.fontWeight = "1000";
        
    }

    initializeAnswers() {
        this.answerChoices = new Array();
        this.areAnswersSelected = new Array();
        for (var i = 0; i < this.currentQuestion().getAnswers().length; i++) {
            var answerChoice = this.parentElement.ownerDocument.createElement("div");
            answerChoice.className = "downOnClick";
            answerChoice.style.font = "Helvetica";
            answerChoice.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent) + "px";
            answerChoice.style.marginTop = this.getRootPxFromPercent(this.answerMarginPercent) + "px";
            answerChoice.style.marginBottom = this.getRootPxFromPercent(this.answerMarginPercent) + "px";
            answerChoice.style.background = "aliceblue";
            answerChoice.style.verticalAlign = "middle";
            answerChoice.style.width = this.getWidthPxFromPercent(this.answerBoxSizeWidthPercent) + "px";
            answerChoice.style.paddingLeft = this.getWidthPxFromPercent(2) + "px";
            answerChoice.style.paddingRight = this.getWidthPxFromPercent(1) + "px";
            answerChoice.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
            answerChoice.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
            answerChoice.style.borderRadius = "5px";
            answerChoice.style.border = "1px solid #84c5fe";
            answerChoice.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
            answerChoice.onclick = (function (element, htmlContainer) {
                return () => {
                    if (!htmlContainer.isShowingAnswers) {
                        if (htmlContainer.hasAnswerSelected(element)) {
                            htmlContainer.unselectAnswer(element);
                        }
                        else {
                            htmlContainer.setAnswerSelected(element);
                        }
                    }
                }
            }(answerChoice, this));
            answerChoice.innerHTML = this.currentQuestion().getAnswers()[i];
            var newDiv = this.parentElement.ownerDocument.createElement("div");
            newDiv.style.cssFloat = "right";
            answerChoice.appendChild(newDiv);
            this.areAnswersSelected[this.answerChoices.length] = false;
            this.answerChoices.push(answerChoice);
        }
    }

    makeDivInvisible(elem: HTMLElement){
        elem.style.visibility = "hidden";
        elem.style.display = "none";
    }

    makeDivVisible(elem: HTMLElement){
        elem.style.visibility = "visible";
        elem.style.display = "inline-block";
    }

    hasAnswerSelected(answerElement: HTMLElement) {
        var answerIndex: number;
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.answerChoices[i] == answerElement) {
                answerIndex = i;
            }
        }
        return this.areAnswersSelected[answerIndex];
    }

    unselectAnswer(answerElement: HTMLElement) {
        var answerIndex: number;
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.answerChoices[i] == answerElement) {
                answerIndex = i;
            }
        }
        this.areAnswersSelected[answerIndex] = false;
        answerElement.style.background = "aliceblue";
    }

    setAnswerSelected(answerElement: HTMLElement) {
        var answerIndex: number;
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.answerChoices[i] == answerElement) {
                answerIndex = i;
            }
        }
        this.areAnswersSelected[answerIndex] = true;
        answerElement.style.background = "#84c5fe";
    }

    changeSubmitToNext(){
        this.makeDivInvisible(this.submitButton);
        this.makeDivVisible(this.nextButton);
    }

    changeNextToSubmit(){
        this.makeDivInvisible(this.nextButton);
        this.makeDivVisible(this.submitButton);
    }

    getHeaderHeight(): number{
        return this.parentElement.ownerDocument.getElementById("header-element").clientHeight;
    }

    getHeightPxFromPercent(percent: number): number{
        return this.HEIGHT * (percent/100);
    }

    getWidthPxFromPercent(percent: number): number{
        return this.WIDTH * (percent/100);
    }

    getRootPxFromPercent(percent: number): number{
        return Math.sqrt(this.HEIGHT * this.WIDTH) * (percent/100);
    }

    renderCurrentQuestion(){
		/*var fontSize;
		if(this.currentQuestion().getQuestion().includes("<br />")){
			var maxLine = this.getMaxLineInString(this.currentQuestion().getQuestion());
			fontSize = this.getFontSize(maxLine, +this.questionElement.offsetWidth);
		}
		else{
			fontSize = this.getHeightPxFromPercent(this.questionFontSizePercent) + "px";
		}	
		this.questionElement.style.fontSize = fontSize + "px";*/
        this.questionElement.innerHTML = this.currentQuestion().getQuestion();
        this.answerContainer.innerHTML = "";
        this.initializeAnswers();
        for (var i = 0; i < this.answerChoices.length; i++) {
            this.answerContainer.appendChild(this.answerChoices[i]);
        }
    }

    loadNextQuestion(){
        var numQuestions = this.questions.length;
        var newIndex: number;
        if(this.currentQuestionIndex == (numQuestions - 1)){
            newIndex = this.questions.length - 1;
        }
        else{
            newIndex = this.currentQuestionIndex + 1;
        }
        this.currentQuestionIndex = newIndex;
        this.renderCurrentQuestion();
    }

    loadPrevQuestion(){
        var newIndex: number;
        if(this.currentQuestionIndex == 0){
            newIndex = 0;
        }
        else{
            newIndex = this.currentQuestionIndex - 1;
        }
        this.currentQuestionIndex = newIndex;
        this.renderCurrentQuestion();
    }

    areSelectedAnswersCorrect(): boolean{
        var questionIndexes = this.currentQuestion().getCorrectAnswerIndex();
        var result: boolean = true;
        for(var i = 0; i <= questionIndexes.length - 1; i++ ){
            if(questionIndexes[i] && !this.areAnswersSelected[i]){
                result = false;
            }
            else if(!questionIndexes[i] && this.areAnswersSelected[i]){
                result = false;
            }
        }
        return result;
    }

    revealAnswers(){
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.isAnswerCorrect(this.answerChoices[i])) {
                if (this.areAnswersSelected[i]) {
                    this.setAnswerRightDivInnerHTML(this.answerChoices[i], "✓");
                    this.answerChoices[i].style.background = "#69F0AE";
                    this.answerChoices[i].style.border = "1px solid black";
                }
                else {
                    this.answerChoices[i].style.background = "#b9f8da";
                    this.answerChoices[i].style.border = "1px solid black";
                }

            }
            else {
                if (this.areAnswersSelected[i]) {
                    this.setAnswerRightDivInnerHTML(this.answerChoices[i], "X");
                    this.answerChoices[i].style.background = "#FF8A80";
                    this.answerChoices[i].style.border = "1px solid black";
                }
                else {
                    this.answerChoices[i].style.background = "#ffd0cc";
                    this.answerChoices[i].style.border = "1px solid black";
                }

            }
        }
    }
	
	getMaxLineInString(text: string): string
	{
		var lines = text.split('<br />');
		var maxLine: string = null;
		for(var i in lines){
			var eachLine = lines[i];
			if(maxLine == null){
				maxLine = eachLine;
			}
			else{
				if(eachLine.length > maxLine.length){
					maxLine = eachLine;
				}	
			}	
		}
		return maxLine;
	}
	
	getVisualLength(text: string, fontSize: number)
	{
		var ruler = this.parentElement.ownerDocument.createElement('span');
		ruler.style.visibility = 'hidden';
		ruler.style.whiteSpace = 'nowrap';
		ruler.style.display = "inline";
		ruler.style.fontSize = fontSize + "px";
		this.parentElement.appendChild(ruler);
		ruler.innerHTML = text;
		var result = ruler.offsetWidth;
		ruler.style.display = "none";
		ruler.parentNode.removeChild(ruler);
		return result;
	}
	
	getFontSize(text: string, width: number) {
		var interWidth = width;
		var vl = this.getVisualLength(text, interWidth);
		while (vl > width) {
			interWidth = interWidth / 1.1;
			vl = this.getVisualLength(text, interWidth);
		}
		return interWidth;
	};
	
    isAnswerCorrect(answerElement: HTMLElement){
        var answerIndex: number;
        for (var i = 0; i < this.answerChoices.length; i++){
            if (this.answerChoices[i] == answerElement) {
                answerIndex = i;
            }
        }
        var currentQuestion = this.currentQuestion();
        return currentQuestion.getCorrectAnswerIndex()[answerIndex];
    }

    setAnswerRightDivInnerHTML(answerElement: HTMLElement, content: string){
        answerElement.firstElementChild.innerHTML = content;
    }

    initializeCSS(){
        var cssElement = this.parentElement.ownerDocument.createElement('style');
        var cssText = "";
        cssText += ".downOnClick:active {transform: translateY(2px);}";
        cssText += ".code {font-family: courier; border: 1px solid black; background-color: white; overflow: auto; overflow-x: scroll; width: 95%; white-space: nowrap;}";
        cssElement.innerHTML = cssText;
        this.parentElement.ownerDocument.getElementsByTagName('head')[0].appendChild(cssElement);
    }
}class QuizStartMenuContainer {
    parentElement: HTMLElement;
    headerElement: HTMLElement;
    buttonContainer: HTMLElement;
	bannerElement: HTMLElement;
	selectTopicElement: HTMLElement;
	
	HEIGHT: number;
    WIDTH: number;

    headerHeightPercent: number = 8;
    bodyMarginLeftPercent: number = 2;
    questionFontSizePercent: number = 5;
    questionMarginTopPercent: number = 3;
    questionMarginBottomPercent: number = 3;
    answerFontSizePercent: number = 5;
    answerBoxSizeHeightPercent: number = 3;
    answerBoxSizeWidthPercent: number = 92;
    answerMarginPercent: number = 1;
    buttonWidthPercent: number = 4;
	
	controller: QuizGlobalController;
	
	constructor(controller: QuizGlobalController, parentElement: HTMLElement, height: number, width: number) {
        this.parentElement = parentElement;
        this.HEIGHT = height;
        this.WIDTH = width;
		this.controller = controller;
    }
	
	initialize(){
		this.initializeHeader();
        this.initializeCSS();
        this.initializeButtonContainer();
		this.initializeBanner();
		this.initializeSelectTopicText();
		
		this.buttonContainer.appendChild(this.bannerElement);
		this.addButton("All Topics", "all-topics-button");
		this.buttonContainer.appendChild(this.selectTopicElement);
		this.addButton("Oracle and Structured Query Language (SQL)", "topic-0-button");
		this.addButton("Restricting and Sorting Data", "topic-1-button");
		this.addButton("Using Single-Row Functions to Customize Output", "topic-2-button");
		this.addButton("Using Conversion Functions and Conditional Expressions", "topic-3-button");
		this.addButton("Reporting Aggregated Data Using the Group Functions", "topic-4-button");
		this.addButton("Displaying Data from Multiple Tables", "topic-5-button");
		this.addButton("Using Subqueries to Solve Queries", "topic-6-button");
		this.addButton("Using the Set Operators", "topic-7-button");
		this.addButton("Manipulating Data", "topic-8-button");
		this.addButton("Using DDL Statements to Create and Manage Tables", "topic-9-button");
		this.addButton("Managing Objects with Data Dictionary Views", "topic-10-button");
		this.addButton("Controlling User Access", "topic-11-button");
		this.addButton("Managing Schema Objects", "topic-12-button");
        this.addButton("Manipulating Large Data Sets", "topic-13-button");

        this.parentElement.appendChild(this.headerElement);
        this.parentElement.appendChild(this.buttonContainer);
    }

    addButton(innerText: string, id: string) {
        var buttonElement = document.createElement("div");
        buttonElement.id = id;
        buttonElement.innerHTML = innerText;

        buttonElement.className = "downOnClick";
        buttonElement.style.font = "Helvetica";
        buttonElement.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent) + "px";
        buttonElement.style.marginTop = this.getRootPxFromPercent(this.answerMarginPercent + 5) + "px";
        buttonElement.style.marginBottom = this.getRootPxFromPercent(this.answerMarginPercent + 5) + "px";
        buttonElement.style.background = "aliceblue";
        buttonElement.style.verticalAlign = "middle";
        buttonElement.style.width = this.getWidthPxFromPercent(this.answerBoxSizeWidthPercent) + "px";
        buttonElement.style.paddingLeft = this.getHeightPxFromPercent(2) + "px";
        buttonElement.style.paddingRight = this.getHeightPxFromPercent(1) + "px";
        buttonElement.style.paddingTop = this.getHeightPxFromPercent(1) + "px";
        buttonElement.style.paddingBottom = this.getHeightPxFromPercent(1) + "px";
		buttonElement.style.textAlign = "center";
        buttonElement.style.borderRadius = "5px";
        buttonElement.style.border = "1px solid #84c5fe";
        buttonElement.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
        buttonElement.onclick = (function (element, controller) {
            return () => {controller.gotoQuiz(element.id)};
        }(buttonElement, this.controller));  
            
        this.buttonContainer.appendChild(buttonElement);
    }
	
    getHeightPxFromPercent(percent: number): number{
        return this.HEIGHT * (percent/100);
    }

    getWidthPxFromPercent(percent: number): number{
        return this.WIDTH * (percent/100);
    }

    getRootPxFromPercent(percent: number): number{
        return Math.sqrt(this.HEIGHT * this.WIDTH) * (percent/100);
    }

    initializeButtonContainer() {
        this.buttonContainer = document.createElement("div");
		this.buttonContainer.style.overflow = "scroll";
		//this.buttonContainer.style.width = 100 + "%";
		this.buttonContainer.style.height = this.getHeightPxFromPercent(95) + "px";
		this.buttonContainer.style.marginLeft = this.getWidthPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }

	initializeHeader() {
        this.headerElement = document.createElement("div");
        this.headerElement.id = "header-element";
        this.headerElement.style.width = "100%";
        this.headerElement.style.height = this.getHeightPxFromPercent(5) + "px";
        this.headerElement.style.background = "#0275d8";
        this.headerElement.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.25)";
    }
	
	initializeBanner() {
        this.bannerElement = document.createElement("div");
        this.bannerElement.id = "banner-element";
		this.bannerElement.innerHTML = "Oracle 1Z0-071 Exam <br /> Flashcards";
        this.bannerElement.style.width = this.getWidthPxFromPercent(100 - (this.bodyMarginLeftPercent * 2)) + "px";
		this.bannerElement.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent + 2) + "px";
        this.bannerElement.style.marginTop = this.getRootPxFromPercent(this.answerMarginPercent + 8) + "px";
		this.bannerElement.style.verticalAlign = "middle";
		this.bannerElement.style.textAlign = "center";
		this.bannerElement.style.font = "Helvetica";
		this.bannerElement.style.fontWeight = "1000";
        //this.headerElement.style.height = this.getHeightPxFromPercent(5) + "px";
		//this.bannerElement.style.marginLeft = this.getWidthPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }
	
	initializeSelectTopicText() {
        this.selectTopicElement = document.createElement("div");
        this.selectTopicElement.id = "selecttopictext-element";
		this.selectTopicElement.innerHTML = "Select Topic:";
        this.selectTopicElement.style.width = this.getWidthPxFromPercent(100 - (this.bodyMarginLeftPercent * 2)) + "px";
		this.selectTopicElement.style.fontSize = this.getRootPxFromPercent(this.answerFontSizePercent + 2) + "px";
        this.selectTopicElement.style.marginTop = this.getRootPxFromPercent(this.answerMarginPercent + 8) + "px";
		this.selectTopicElement.style.verticalAlign = "middle";
		this.selectTopicElement.style.textAlign = "center";
		this.selectTopicElement.style.fontWeight = "1000";
		this.selectTopicElement.style.font = "Helvetica";
        //this.headerElement.style.height = this.getHeightPxFromPercent(5) + "px";
		//this.selectTopicElement.style.marginLeft = this.getWidthPxFromPercent(this.bodyMarginLeftPercent) + "px";
    }
	
	initializeCSS(){
        var cssElement = this.parentElement.ownerDocument.createElement('style');
        var cssText = "";
        cssText += ".downOnClick:active {transform: translateY(2px);}";
        cssElement.innerHTML = cssText;
        this.parentElement.ownerDocument.getElementsByTagName('head')[0].appendChild(cssElement);
    }
}class QuizGlobalController{
	parentElement: HTMLElement;
	startMenuIFrame: HTMLIFrameElement;
	quizIFrame: HTMLIFrameElement;
	
	startMenu: QuizStartMenuContainer;
	quizContainer: QuizHtmlContainer;
	
	HEIGHT: number;
	WIDTH: number;
	
	constructor(parentElement: HTMLElement, height: number, width: number){
		this.parentElement = parentElement;
		this.HEIGHT = height;
		this.WIDTH = width;
	}
	
    start() {
		this.parentElement.ownerDocument.body.style.margin = "0px";
        this.startMenuIFrame = this.parentElement.ownerDocument.createElement('iframe');
        this.quizIFrame = this.parentElement.ownerDocument.createElement("iframe");

		this.startMenuIFrame.scrolling = "no";
		this.startMenuIFrame.frameBorder = "0";
		this.startMenuIFrame.style["seamless"] = "seamless";
		
        this.startMenuIFrame.height = this.HEIGHT + "";
        this.startMenuIFrame.width = this.WIDTH + "";
        this.startMenuIFrame.style.margin = "0px";
        this.startMenuIFrame.style.padding = "0px";   
        this.quizIFrame.scrolling = "no";
		this.quizIFrame.frameBorder = "0";
		this.quizIFrame.style["seamless"] = "seamless";
        this.quizIFrame.style.overflow = "scroll";
        this.quizIFrame.height = this.HEIGHT + "";
        this.quizIFrame.width = this.WIDTH + "";
        this.quizIFrame.style.margin = "0px";
        this.quizIFrame.style.padding = "0px";   
        this.parentElement.appendChild(this.startMenuIFrame);
        this.parentElement.appendChild(this.quizIFrame);

		this.startMenuIFrame.contentDocument.body.style.margin = "0px";
        this.quizIFrame.contentDocument.body.style.margin = "0px";
		this.startMenuIFrame.contentDocument.body.style.padding = "0px";
        this.quizIFrame.contentDocument.body.style.padding = "0px";
		
        setTimeout(() => {
            this.startMenu = new QuizStartMenuContainer(this, this.startMenuIFrame.contentDocument.body, this.HEIGHT, this.WIDTH);
            this.startMenu.initialize();
        }, 10);
	}

	gotoQuiz(id: string){
		this.makeDivInvisible(this.startMenuIFrame);
		
		
		this.quizIFrame.innerHTML = "";
		this.quizContainer = new QuizHtmlContainer(this.quizIFrame.contentWindow.document.body, this.HEIGHT, this.WIDTH);	
		
		if(id == "all-topics-button"){
			this.quizContainer.initialize(QuestionCategory.ALL_TOPICS);
		}
		else{
			var categoryStr = id.substring(5, 6);
			this.quizContainer.initialize(+categoryStr);
		}
		
		this.makeDivVisible(this.quizIFrame);
	}
	
	gotoStartMenu(){
		this.makeDivInvisible(this.quizIFrame);
		this.makeDivInvisible(this.startMenuIFrame);
	}
	
	makeDivInvisible(elem: HTMLElement){
        elem.style.visibility = "hidden";
        elem.style.display = "none";
    }

    makeDivVisible(elem: HTMLElement){
        elem.style.visibility = "visible";
        elem.style.display = "inline-block";
    }

}

//document.body.style.margin = "0";
//new QuizGlobalController(document.body, screen.height, screen.width).start();
class QuestionBuilder{
    parentElement: HTMLElement;
    questionField: HTMLElement;
	categoryDropDown: HTMLElement;
    answersField: HTMLElement;
    addAnswerButton: HTMLElement;
    compileQuestionButton: HTMLElement;
    outputArea: HTMLElement;
    clearButton: HTMLElement;
	
    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement;
    }

    initialize() {
        this.questionField = this.createQuestionField();
		this.categoryDropDown = this.createCategoryDropDown();
        this.answersField = this.createAnswersField();
        this.addAnswerButton = this.createAddAnswerButton();
        this.compileQuestionButton = this.createCompileQuestionButton();
        this.outputArea = this.createOutputArea();
		this.clearButton = this.createClearButton();
		
        this.parentElement.appendChild(this.questionField);
        this.parentElement.appendChild(document.createElement('br'));
		this.parentElement.appendChild(this.categoryDropDown);
        this.parentElement.appendChild(document.createElement('br'));
        this.parentElement.appendChild(this.answersField);
        this.parentElement.appendChild(document.createElement('br'));
        this.parentElement.appendChild(this.addAnswerButton);
        this.parentElement.appendChild(document.createElement('br'));
		this.parentElement.appendChild(this.clearButton);
        this.parentElement.appendChild(document.createElement('br'));
        this.parentElement.appendChild(this.compileQuestionButton);
        this.parentElement.appendChild(document.createElement('br'));
        this.parentElement.appendChild(this.outputArea);
    }

    createQuestionField() {
        var questionInputContainer = document.createElement('div');
        questionInputContainer.innerHTML = "Question: ";
        var questionInput = document.createElement('textarea');
        questionInput.id = "questionInput";
        questionInput.cols = 100;
        questionInput.rows = 5;
        questionInputContainer.appendChild(questionInput);
		return questionInputContainer;
    } 

    createAnswersField() {
        var answerInput = document.createElement('div');
		answerInput.id = "answerContainer";
		return answerInput;
    }

    createCompileQuestionButton() {
        var compileButton = document.createElement('button');
        compileButton.innerHTML = "Compile Question";
        compileButton.onclick = () => { var q = this.getQuestionFromInputs(); this.setOutputText(JSON.stringify(q));};
		return compileButton;
    }
	
	createClearButton() {
        var compileButton = document.createElement('button');
        compileButton.innerHTML = "Clear";
        compileButton.onclick = () => 
		{ 
			this.answersField.innerHTML = "";
		};
		return compileButton;
    }
	
	createCategoryDropDown() {
        var catergoryDropDown = document.createElement('select');
        for(var each in QuestionCategory){
			if(isNaN(Number(each))){
				var eachOption = document.createElement('option');
				eachOption.innerHTML = each;
				catergoryDropDown.appendChild(eachOption);
			}
		}
		return catergoryDropDown;
    }
    
    createAddAnswerButton() {
        var addAnswerButton = document.createElement('button');
        addAnswerButton.innerHTML = "+";
        addAnswerButton.onclick = () => {this.addAnswerField()};
		return addAnswerButton;
    }

    addAnswerField() {
        var answerFieldContainer = document.createElement('div');
        var answerField = document.createElement('textarea');
        answerField.rows = 5;
        answerField.cols = 100;
		answerField.className = "answer-element";
        var isCorrect = document.createElement('input');
        isCorrect.type = "checkbox";
        answerFieldContainer.appendChild(answerField);
        answerFieldContainer.appendChild(isCorrect);
        this.answersField.appendChild(document.createElement('br'));
        this.answersField.appendChild(answerFieldContainer);
    } 

    createOutputArea() {
        var outputDiv = document.createElement('textarea');
		outputDiv.rows = 8;
		outputDiv.cols = 100;
		return outputDiv;
    }

    getQuestionFromInputs(): Question{
        var questionString = (<HTMLTextAreaElement>this.questionField.children[0]).value;
        var category = (<HTMLSelectElement> this.categoryDropDown).options[(<HTMLSelectElement> this.categoryDropDown).selectedIndex].innerHTML;
        var newQuestion: Question = new Question(questionString, QuestionCategory[category]);
        var answerChildren = this.answersField.children; 
        for (var i = 0; i < answerChildren.length; i++){
            if (i % 2 == 1) {
                var answerString = (<HTMLTextAreaElement>answerChildren[i].firstChild).value;    
                var correct = (<HTMLInputElement>answerChildren[i].children[1]).checked;
                newQuestion.addAnswer(answerString, correct);
            }
        }
        return newQuestion;
    } 

    setOutputText(text: string) {
		var result = text;
		result = result.split("\\n").join("<br />");
		//result = result.replace("\t","   ");
        (<HTMLInputElement>this.outputArea).value = result;
    }

}
class QuizAppInstance{
	containingIFrame: HTMLIFrameElement;
	controller: QuizGlobalController;
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.height = height;
        this.width = width;

        this.containingIFrame = document.createElement('iframe');

        this.containingIFrame.scrolling = "no";
		this.containingIFrame.frameBorder = "0";
		this.containingIFrame.style["seamless"] = "seamless";
        this.containingIFrame.height = this.height + "";
        this.containingIFrame.width = this.width + "";
        this.containingIFrame.style.margin = "0px";

        this.containingIFrame.style.width = width + "px";
        this.containingIFrame.style.height = height + "px";
	}
	
	getElement(): HTMLElement{
		return this.containingIFrame;
	}
	
    start() {
        document.body.appendChild(this.containingIFrame);
		this.containingIFrame.contentDocument.body.style.margin = "0px";
        this.containingIFrame.contentDocument.body.style.padding = "0px";
        this.controller = new QuizGlobalController(this.containingIFrame.contentDocument.body, this.height, this.width);
        this.controller.start();
	}

}

document.body.style.margin = "0px";
document.body.style.padding = "0px";
new QuizAppInstance(screen.width, screen.height).start();
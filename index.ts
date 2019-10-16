import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class AnimatedProgressTrack implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _csscontainer: HTMLDivElement;
	private _row: HTMLDivElement;
	
	private _col1: HTMLDivElement;
	private _sec1: HTMLElement;
	private _h31 : HTMLHeadingElement;
	private _prog1Div : HTMLDivElement;
	private _prog1Left : HTMLSpanElement;
	private _prog1LeftBar : HTMLSpanElement;
	private _prog1Right : HTMLSpanElement;
	private _prog1RightBar : HTMLSpanElement;
	private _prog1Val : HTMLDivElement;
	private _divpc1 : HTMLDivElement;
	private _br1 : HTMLElement;
	private _completed1 : HTMLSpanElement;


	private _col2: HTMLDivElement;
	private _sec2: HTMLElement;
	private _h32 : HTMLHeadingElement;
	private _prog2Div : HTMLDivElement;
	private _prog2Left : HTMLSpanElement;
	private _prog2LeftBar : HTMLSpanElement;
	private _prog2Right : HTMLSpanElement;
	private _prog2RightBar : HTMLSpanElement;
	private _prog2Val : HTMLDivElement;
	private _divpc2 : HTMLDivElement;
	private _br2 : HTMLElement;
	private _completed2 : HTMLSpanElement;



	private _col3: HTMLDivElement;
	private _sec3: HTMLElement;
	private _h33 : HTMLHeadingElement;
	private _prog3Div : HTMLDivElement;
	private _prog3Left : HTMLSpanElement;
	private _prog3LeftBar : HTMLSpanElement;
	private _prog3Right : HTMLSpanElement;
	private _prog3RightBar : HTMLSpanElement;
	private _prog3Val : HTMLDivElement;
	private _divpc3 : HTMLDivElement;
	private _br3 : HTMLElement;
	private _completed3 : HTMLSpanElement;

	private _col4: HTMLDivElement;
	private _sec4: HTMLElement;
	private _h34 : HTMLHeadingElement;
	private _prog4Div : HTMLDivElement;
	private _prog4Left : HTMLSpanElement;
	private _prog4LeftBar : HTMLSpanElement;
	private _prog4Right : HTMLSpanElement;
	private _prog4RightBar : HTMLSpanElement;
	private _prog4Val : HTMLDivElement;
	private _divpc4 : HTMLDivElement;
	private _br4 : HTMLElement;
	private _completed4 : HTMLSpanElement;

	private _col5: HTMLDivElement;
	private _sec5: HTMLElement;
	private _h35 : HTMLHeadingElement;
	private _prog5Div : HTMLDivElement;
	private _prog5Left : HTMLSpanElement;
	private _prog5LeftBar : HTMLSpanElement;
	private _prog5Right : HTMLSpanElement;
	private _prog5RightBar : HTMLSpanElement;
	private _prog5Val : HTMLDivElement;
	private _divpc5 : HTMLDivElement;
	private _br5 : HTMLElement;
	private _completed5 : HTMLSpanElement;


	private _context: ComponentFramework.Context<IInputs>;
    private _notifyOutputChanged: () => void;
	private _container: HTMLDivElement;

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
		this._container = container;

		this._csscontainer = document.createElement("div");
		this._csscontainer.setAttribute("class", "container");

		this._row = document.createElement("div");
		this._row.setAttribute("class", "row");

		this._col1 = document.createElement("div");
		this._col1.setAttribute("class", "col-sm-3 col-md-2");
		this._sec1 = document.createElement("section");
		this._h31 = document.createElement("h3");
		this._h31.setAttribute("id","h31");
		this._h31.setAttribute("style","width: 150px;");		
		this._prog1Div = document.createElement("div");
		this._prog1Div.setAttribute("class","progress");
		this._prog1Div.setAttribute("data-percentage","20");
		this._prog1Left = document.createElement("span");
		this._prog1Left.setAttribute("class","progress-left");		
		this._prog1LeftBar = document.createElement("span");
		this._prog1LeftBar.setAttribute("class","progress-bar");
		this._prog1Right = document.createElement("span");
		this._prog1Right.setAttribute("class","progress-right");
		this._prog1RightBar = document.createElement("span");
		this._prog1RightBar.setAttribute("class","progress-bar");
		this._prog1Val = document.createElement("div");
		this._prog1Val.setAttribute("class","progress-value");
		this._divpc1 = document.createElement("div");
		this._divpc1.setAttribute("id","divpc1");
		this._br1 = document.createElement("br");
		this._completed1 = document.createElement("span");
		this._completed1.setAttribute("id","completed1");	
		this._completed1.appendChild(document.createTextNode('Completed'));
		this._divpc1.appendChild(document.createTextNode('20%'));
		this._divpc1.appendChild(this._br1);
		this._divpc1.appendChild(this._completed1);
		this._prog1Val.appendChild(this._divpc1);		
		this._prog1Left.appendChild(this._prog1LeftBar);
		this._prog1Right.appendChild(this._prog1RightBar);
		this._prog1Div.appendChild(this._prog1Left);
		this._prog1Div.appendChild(this._prog1Right);
		this._prog1Div.appendChild(this._prog1Val);
		this._h31.appendChild(document.createTextNode('PCF'));
		this._sec1.appendChild(this._h31);
		this._sec1.appendChild(this._prog1Div);
		this._col1.appendChild(this._sec1);

		this._col2 = document.createElement("div");
		this._col2.setAttribute("class", "col-sm-3 col-md-2");
		this._sec2 = document.createElement("section");
		this._h32 = document.createElement("h3");
		this._h32.setAttribute("id","h32");
		this._h32.setAttribute("style","width: 150px;");		
		this._prog2Div = document.createElement("div");
		this._prog2Div.setAttribute("class","progress");
		this._prog2Div.setAttribute("data-percentage","40");
		this._prog2Left = document.createElement("span");
		this._prog2Left.setAttribute("class","progress-left");		
		this._prog2LeftBar = document.createElement("span");
		this._prog2LeftBar.setAttribute("class","progress-bar");
		this._prog2Right = document.createElement("span");
		this._prog2Right.setAttribute("class","progress-right");
		this._prog2RightBar = document.createElement("span");
		this._prog2RightBar.setAttribute("class","progress-bar");
		this._prog2Val = document.createElement("div");
		this._prog2Val.setAttribute("class","progress-value");
		this._divpc2 = document.createElement("div");
		this._divpc2.setAttribute("id","divpc2");
		this._br2 = document.createElement("br");
		this._completed2 = document.createElement("span");
		this._completed2.setAttribute("id","completed2");	
		this._completed2.appendChild(document.createTextNode('Completed'));
		this._divpc2.appendChild(document.createTextNode('40%'));
		this._divpc2.appendChild(this._br2);
		this._divpc2.appendChild(this._completed2);
		this._prog2Val.appendChild(this._divpc2);		
		this._prog2Left.appendChild(this._prog2LeftBar);
		this._prog2Right.appendChild(this._prog2RightBar);
		this._prog2Div.appendChild(this._prog2Left);
		this._prog2Div.appendChild(this._prog2Right);
		this._prog2Div.appendChild(this._prog2Val);
		this._h32.appendChild(document.createTextNode('PowerApps'));
		this._sec2.appendChild(this._h32);
		this._sec2.appendChild(this._prog2Div);
		this._col2.appendChild(this._sec2);

		this._col3 = document.createElement("div");
		this._col3.setAttribute("class", "col-sm-3 col-md-2");
		this._sec3 = document.createElement("section");
		this._h33 = document.createElement("h3");
		this._h33.setAttribute("id","h33");
		this._h33.setAttribute("style","width: 150px;");		
		this._prog3Div = document.createElement("div");
		this._prog3Div.setAttribute("class","progress");
		this._prog3Div.setAttribute("data-percentage","60");
		this._prog3Left = document.createElement("span");
		this._prog3Left.setAttribute("class","progress-left");		
		this._prog3LeftBar = document.createElement("span");
		this._prog3LeftBar.setAttribute("class","progress-bar");
		this._prog3Right = document.createElement("span");
		this._prog3Right.setAttribute("class","progress-right");
		this._prog3RightBar = document.createElement("span");
		this._prog3RightBar.setAttribute("class","progress-bar");
		this._prog3Val = document.createElement("div");
		this._prog3Val.setAttribute("class","progress-value");
		this._divpc3 = document.createElement("div");
		this._divpc3.setAttribute("id","divpc3");
		this._br3 = document.createElement("br");
		this._completed3 = document.createElement("span");
		this._completed3.setAttribute("id","completed3");	
		this._completed3.appendChild(document.createTextNode('Completed'));
		this._divpc3.appendChild(document.createTextNode('60%'));
		this._divpc3.appendChild(this._br3);
		this._divpc3.appendChild(this._completed3);
		this._prog3Val.appendChild(this._divpc3);		
		this._prog3Left.appendChild(this._prog3LeftBar);
		this._prog3Right.appendChild(this._prog3RightBar);
		this._prog3Div.appendChild(this._prog3Left);
		this._prog3Div.appendChild(this._prog3Right);
		this._prog3Div.appendChild(this._prog3Val);
		this._h33.appendChild(document.createTextNode('Power BI'));
		this._sec3.appendChild(this._h33);
		this._sec3.appendChild(this._prog3Div);
		this._col3.appendChild(this._sec3);

		this._col4 = document.createElement("div");
		this._col4.setAttribute("class", "col-sm-3 col-md-2");
		this._sec4 = document.createElement("section");
		this._h34 = document.createElement("h3");
		this._h34.setAttribute("id","h34");
		this._h34.setAttribute("style","width: 150px;");		
		this._prog4Div = document.createElement("div");
		this._prog4Div.setAttribute("class","progress");
		this._prog4Div.setAttribute("data-percentage","80");
		this._prog4Left = document.createElement("span");
		this._prog4Left.setAttribute("class","progress-left");		
		this._prog4LeftBar = document.createElement("span");
		this._prog4LeftBar.setAttribute("class","progress-bar");
		this._prog4Right = document.createElement("span");
		this._prog4Right.setAttribute("class","progress-right");
		this._prog4RightBar = document.createElement("span");
		this._prog4RightBar.setAttribute("class","progress-bar");
		this._prog4Val = document.createElement("div");
		this._prog4Val.setAttribute("class","progress-value");
		this._divpc4 = document.createElement("div");
		this._divpc4.setAttribute("id","divpc4");
		this._br4 = document.createElement("br");
		this._completed4 = document.createElement("span");
		this._completed4.setAttribute("id","completed4");	
		this._completed4.appendChild(document.createTextNode('Completed'));
		this._divpc4.appendChild(document.createTextNode('80%'));
		this._divpc4.appendChild(this._br4);
		this._divpc4.appendChild(this._completed4);
		this._prog4Val.appendChild(this._divpc4);		
		this._prog4Left.appendChild(this._prog4LeftBar);
		this._prog4Right.appendChild(this._prog4RightBar);
		this._prog4Div.appendChild(this._prog4Left);
		this._prog4Div.appendChild(this._prog4Right);
		this._prog4Div.appendChild(this._prog4Val);
		this._h34.appendChild(document.createTextNode('Microsoft Flow'));
		this._sec4.appendChild(this._h34);
		this._sec4.appendChild(this._prog4Div);
		this._col4.appendChild(this._sec4);

		this._col5 = document.createElement("div");
		this._col5.setAttribute("class", "col-sm-3 col-md-2");
		this._sec5 = document.createElement("section");
		this._h35 = document.createElement("h3");
		this._h35.setAttribute("id","h35");
		this._h35.setAttribute("style","width: 150px;");		
		this._prog5Div = document.createElement("div");
		this._prog5Div.setAttribute("class","progress");
		this._prog5Div.setAttribute("data-percentage","100");
		this._prog5Left = document.createElement("span");
		this._prog5Left.setAttribute("class","progress-left");		
		this._prog5LeftBar = document.createElement("span");
		this._prog5LeftBar.setAttribute("class","progress-bar");
		this._prog5Right = document.createElement("span");
		this._prog5Right.setAttribute("class","progress-right");
		this._prog5RightBar = document.createElement("span");
		this._prog5RightBar.setAttribute("class","progress-bar");
		this._prog5Val = document.createElement("div");
		this._prog5Val.setAttribute("class","progress-value");
		this._divpc5 = document.createElement("div");
		this._divpc5.setAttribute("id","divpc5");
		this._br5 = document.createElement("br");
		this._completed5 = document.createElement("span");
		this._completed5.setAttribute("id","completed5");	
		this._completed5.appendChild(document.createTextNode('Completed'));
		this._divpc5.appendChild(document.createTextNode('100%'));
		this._divpc5.appendChild(this._br5);
		this._divpc5.appendChild(this._completed5);
		this._prog5Val.appendChild(this._divpc5);		
		this._prog5Left.appendChild(this._prog5LeftBar);
		this._prog5Right.appendChild(this._prog5RightBar);
		this._prog5Div.appendChild(this._prog5Left);
		this._prog5Div.appendChild(this._prog5Right);
		this._prog5Div.appendChild(this._prog5Val);
		this._h35.appendChild(document.createTextNode('Azure IOT'));
		this._sec5.appendChild(this._h35);
		this._sec5.appendChild(this._prog5Div);
		this._col5.appendChild(this._sec5);


		this._row.appendChild(this._col1);
		this._row.appendChild(this._col2);
		this._row.appendChild(this._col3);
		this._row.appendChild(this._col4);
		this._row.appendChild(this._col5);
		//this._csscontainer.appendChild(this._row);	

		//this._container.appendChild(this._csscontainer);		
		this._container.appendChild(this._row);		
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}


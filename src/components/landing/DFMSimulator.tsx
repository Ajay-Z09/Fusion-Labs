
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { 
  Upload, 
  ArrowRight, 
  Zap, 
  Leaf, 
  AlertTriangle,
  Mail
} from "lucide-react";

export const DFMSimulator = () => {
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type.includes("model") || droppedFile?.name.endsWith(".stl") || 
        droppedFile?.name.endsWith(".obj") || droppedFile?.name.endsWith(".step")) {
      setFile(droppedFile);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a CAD file (.stl, .obj, or .step)",
        variant: "destructive",
      });
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleAnalyze = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a CAD file to analyze",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleGetFullReport = () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to receive the full report",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Report sent!",
      description: "Check your inbox for the detailed DFM analysis",
    });
  };

  return (
    <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Interactive DFM Simulator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your CAD file for instant feedback on cost savings, sustainability, and potential risks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Upload Area */}
          <Card className="p-8">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors"
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold mb-2">
                Drag & Drop your CAD file here
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                or click to browse (.stl, .obj, .step)
              </p>
              <Input
                type="file"
                className="hidden"
                accept=".stl,.obj,.step"
                onChange={handleFileInput}
                id="file-upload"
              />
              <Button
                variant="outline"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                Browse Files
              </Button>
            </div>
            {file && (
              <div className="mt-4">
                <p className="text-sm text-gray-600">Selected file: {file.name}</p>
                <Button 
                  className="w-full mt-4" 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Design"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </Card>

          {/* Results Area */}
          <Card className="p-8">
            {!showResults ? (
              <div className="text-center text-gray-500">
                <h3 className="text-lg font-semibold mb-2">
                  Upload a design to see instant feedback
                </h3>
                <p className="text-sm">
                  Get insights on cost savings, sustainability, and potential risks
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cost-Saving Opportunity</h4>
                    <p className="text-sm text-gray-600">
                      Switch to recycled aluminum: Save $1.2k/1k units
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sustainability Score</h4>
                    <p className="text-sm text-gray-600">
                      Reduce carbon footprint by 15%
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Risk Alert</h4>
                    <p className="text-sm text-gray-600">
                      Part Y has 40% warping risk – optimize here
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Get Your Full Report
                  </h4>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button 
                    className="w-full"
                    onClick={handleGetFullReport}
                  >
                    Send Full Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

